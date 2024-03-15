import { PreconditionFailedException } from "@nestjs/common";
import { ApiResponseMessage } from "../config/response";


export const ValidationException = new PreconditionFailedException({message: ApiResponseMessage.server.api.validationError})