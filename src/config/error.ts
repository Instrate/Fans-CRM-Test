import { ConflictException, UnauthorizedException } from "@nestjs/common";
import { ApiResponseMessage } from "./response";

export const UnauthorizedSessionError = new UnauthorizedException({
  message: ApiResponseMessage.user.tokenInvalid,
});

export const ConflictLoginException = new ConflictException({
  message: ApiResponseMessage.user.notFoundError
})