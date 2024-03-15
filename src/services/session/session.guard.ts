import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { JwtKeys } from "./session.constant";
import { ValidationHandler } from "../../pipes/helper";
import { JwtService } from "@nestjs/jwt";
import { JwtStrategy } from "./session.strategy";
import { Request } from 'express';
import { IS_PUBLIC_KEY } from "./session.metadata";
import { UnauthorizedSessionError } from "../../config/error";
import { SessionInterface } from "./session.interface";

@Injectable()
export class SessionGuard implements CanActivate {
  constructor(
    private jwtService: JwtService,
    private jwtStrategy: JwtStrategy,
    private reflector: Reflector,
  ) {}

  private extractTokenFromHeader(request: Request): string | undefined {
    const [type, token] = request.headers.authorization?.split(' ') ?? [];
    return type === 'Bearer' ? token : undefined;
  }

  async canActivate(context: ExecutionContext) {
    const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);

    if (isPublic) {
      return true;
    }

    const request = context.switchToHttp().getRequest();
    const token = this.extractTokenFromHeader(request);

    try {
      if (!token) {
        throw new Error();
      }
      const session = await this.jwtService.verifyAsync(token, {
        secret: JwtKeys.private,
      });
      const errors = ValidationHandler.ValidateValue(session, SessionInterface);
      if (!!errors?.length) {
        throw new Error();
      }
      request.session = session;
    } catch {
      throw UnauthorizedSessionError
    }
    return true;
  }
}