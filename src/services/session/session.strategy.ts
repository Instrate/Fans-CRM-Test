import { Inject, Injectable } from "@nestjs/common";
import { UnauthorizedSessionError } from "../../config/error";
import { JwtKeys } from "./session.constant";
import { SessionInterface } from "./session.interface";
import { ExtractJwt, Strategy } from 'passport-jwt';

import * as jwt from 'jsonwebtoken';
import { PassportStrategy } from "@nestjs/passport";
import { CACHE_MANAGER } from "@nestjs/cache-manager";
import { Cache } from 'cache-manager';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(@Inject(CACHE_MANAGER) private readonly cache: Cache) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: true,
      secretOrKey: JwtKeys.public,
    });
  }

  async validate(payload: any) {
    return payload;
  }

  async authenticate(req: any, options?: any) {
    const token = ExtractJwt.fromAuthHeaderAsBearerToken()(req);
    if (!token?.length) {
      throw UnauthorizedSessionError;
    }
    const payload = jwt.verify(token, JwtKeys.public) as SessionInterface;
    if (token !== (await this.cache.get(payload?.email || ''))) {
      throw UnauthorizedSessionError;
    }
    super.authenticate(req, options);
  }
}
