import { Injectable } from '@nestjs/common';
import { ClassConstructor } from "class-transformer";
import { ValidationHandler } from "../../pipes/helper";
import { RuntimeException } from "@nestjs/core/errors/exceptions";
import { EnvVarsIgnoreList, EnvVarsIgnoreValues, EnvVarsPassValues } from "../../config/env.constants";
import { config } from 'dotenv';
config();

export class EnvService<EnvSchema extends object = object> {
  static Ref: EnvService;

  readonly properties: EnvSchema;

  static LoadBaseConfiguration<TypeSchema>(
    env_data: ClassConstructor<TypeSchema>,
  ) {
    const res: any = {};
    const plain_data = env_data as any;
    const restriction_list = [
      ...EnvVarsIgnoreList,
      plain_data?.USERDOMAIN,
      ...(plain_data?.USERPROFILE
        ? plain_data?.USERPROFILE.split('\\') || []
        : []),
    ].filter((val) => !!val);
    for (const [key, value] of Object.entries(env_data)) {
      if (key.toUpperCase() !== key) {
        continue;
      }
      if(!EnvVarsPassValues.some((val) => key.includes(val))){
        if (
          restriction_list.some(
            (val) =>
              (value as string)
                .toLowerCase()
                .includes(val.toString().toLowerCase()) ||
              key.includes(val) ||
              EnvVarsIgnoreValues.includes(key),
          )
        ) {
          continue;
        }
      }
      res[key] = value;
    }
    return res;
  }

  LoadConfiguration(schema: ClassConstructor<EnvSchema>) {
    const env_data = EnvService.LoadBaseConfiguration(
      process.env as unknown as typeof schema,
    );
    const errors = ValidationHandler.ValidateValue(env_data, schema);
    if (!!errors?.length) {
      console.dir(
        errors.map(({ value, property, constraints }) => ({
          value,
          property,
          constraints,
        })),
      );
      throw new RuntimeException(`environmental data error`);
    }
    return env_data;
  }

  constructor(private schema: ClassConstructor<EnvSchema>) {
    this.properties = this.LoadConfiguration(schema);
    EnvService.Ref ??= this;
  }
}