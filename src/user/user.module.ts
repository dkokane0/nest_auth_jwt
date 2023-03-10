import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserController } from './user.controller';
import { User } from './user.entity';
import { UserService } from './user.service';
import {JwtModule} from "@nestjs/jwt";

@Module({
  imports:[
    TypeOrmModule.forFeature([User]),
  JwtModule.register({
    secret: 'secret',
    signOptions: {expiresIn: '1d'}
})],
  controllers: [UserController],
  providers: [UserService]
})
export class UserModule {}
