import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/user.entity';
@Module({
  imports: [
    TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'deepak',
    database: 'user_auth',
    entities: [User],
    synchronize: true,
  }),UserModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
