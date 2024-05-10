import { AuthModule } from './auth/auth.module';
import { AppController } from './endpoints/app.controller';
import { UserController } from './endpoints/user.controller';
import { User } from './models/user/entities/user.entity';
import { UserModule } from './models/user/user.module';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '0000',
      database: 'test',
      entities: [User],
      synchronize: true,
    }),
    UserModule,
    AuthModule,
  ],
  controllers: [AppController, UserController],
  providers: [],
})
export class AppModule {}
