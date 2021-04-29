import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../user/user.entity';
import { UserModule } from '../user/user.module';
import { UserService } from '../user/user.service';
import { AuthService } from './auth.service';
import { LocalStrategy } from './local.strategy';

@Module({
  imports: [
    UserModule, 
    PassportModule,
    TypeOrmModule.forFeature([User])
  ],
  providers: [
    AuthService, 
    UserService, 
    LocalStrategy
  ]
})
export class AuthModule { }
