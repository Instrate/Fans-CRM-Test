import { ClassConstructor, plainToInstance } from "class-transformer";
import { validateSync, ValidationError } from "class-validator";
import { ArgumentMetadata, PreconditionFailedException } from "@nestjs/common";
import { ApiResponseMessage } from "../config/response";
import { ValidationException } from "./constants";



export class ValidationHandler {


  static TryConvert<T extends object>(value: any) {
    if (typeof value === 'string') {
      value = JSON.parse(value) as T;
    }

    for (const key of Object.keys(value)) {
      if (
        typeof value[key] === 'string' &&
        ['{', '['].some((val) => value[key].includes(val))
      ) {
        try {
          value[key] = JSON.parse(value[key] as string);
        } catch (e) {}
      }
    }
    return value;
  }

  static ValidateValue<T extends object>(
    value: object | string,
    schema: ClassConstructor<T>,
  ) {
    value = this.TryConvert(value);
    value = plainToInstance(schema, value);
    return validateSync(value);
  }

  static ProceedValue<T extends object>(
    value: object | string,
    schema: ClassConstructor<T>,
    metadata: ArgumentMetadata,
    logError: boolean = false,
    route?: string,
  ) {
    let errors: ValidationError[] = [];
    try {
      errors = this.ValidateValue(value, schema);
    } catch (e: any) {
      console.log(
        `Failed to convert {${JSON.stringify(
          metadata,
        )}}\n with data ${JSON.stringify(
          value,
        )}\nError message: ${e?.message}\n$Error Stack: ${e?.stack}`,
      );
      throw ValidationException;
    }
    if (!!errors?.length) {
      if (logError) {
        console.error(`\n${!!route?.length ? (`Error on root: ${route}\n`) : 'Unknown place: \n'}${(!!errors ? errors : 'Undefined error')}`);
        console.dir(errors.map((err) => err.constraints))
      }
      throw ValidationException;
    }
    return value;
  }
}