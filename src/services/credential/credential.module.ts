import { Module } from '@nestjs/common';
import { CredentialService } from './credential.service';

@Module({
  providers: [CredentialService]
})
export class CredentialModule {}
