import { ArgumentMetadata, BadRequestException, PipeTransform, PreconditionFailedException } from "@nestjs/common";
import { ValidationHandler } from "./helper";
import { ClassConstructor } from "class-transformer";
import { ValidationException } from "./constants";

export class ClassValidationPipe<T extends object>
  implements PipeTransform<T>
{
  constructor(
    private schema: ClassConstructor<T>,
    private logError: boolean = false,
    private route?: string,
    private readonly handler = new ValidationHandler(),
  ) {
  }

  transform(value: object | string, metadata: ArgumentMetadata) {
    if (typeof value === 'object') {
      if (!Object.keys(value)?.length) {
        throw ValidationException;
      }
    }
    return ValidationHandler.ProceedValue<T>(
      value,
      this.schema,
      metadata,
      this.logError,
      this.route
    );
  }
}
