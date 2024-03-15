import { Inject, Injectable } from "@nestjs/common";
import { CACHE_MANAGER } from "@nestjs/cache-manager";
import { Cache } from 'cache-manager';
import { JwtKeys } from "./session.constant";
import jwt from 'jsonwebtoken';
import { SessionInterface } from "./session.interface";

@Injectable()
export class SessionService {

  constructor(
    @Inject(CACHE_MANAGER) private readonly cacheManager: Cache,
  ) {
  }

  static create(data: Pick<SessionInterface, 'email'>) {
    return jwt.sign(data, JwtKeys.private, {
      algorithm: 'RS512',
      noTimestamp: false,
      expiresIn: '1h',
    });
  }

  sessionUpdate(email: string, session: string) {
    return this.cacheManager.set(email, session, 0);
  }
}
