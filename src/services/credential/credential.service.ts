import { Injectable } from '@nestjs/common';

import * as crypto from 'crypto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class CredentialService {
  static Ref: CredentialService;

  constructor() {
    CredentialService.Ref ??= this;
  }

  static CreatePair() {
    const { publicKey, privateKey } = crypto.generateKeyPairSync('rsa', {
      modulusLength: 2048,
    });

    return {
      public: publicKey.export({ type: 'pkcs1', format: 'pem' }),
      private: privateKey.export({ type: 'pkcs1', format: 'pem' }),
    };
  }

  CreateHash<IsSync = boolean>(
    data: string,
    isSync: IsSync = true as IsSync,
    iterations: number = Number(process.env.SECURITY_HASH_ITERATIONS),
  ) {
    return isSync
      ? bcrypt.hashSync(data, iterations)
      : bcrypt.hash(data, iterations);
  }

  ValidateHash<IsSync = boolean>(
    data: string,
    toCompare: string,
    isSync: IsSync = true as IsSync,
  ) {
    return isSync
      ? bcrypt.compareSync(data, toCompare)
      : bcrypt.compare(data, toCompare);
  }
}