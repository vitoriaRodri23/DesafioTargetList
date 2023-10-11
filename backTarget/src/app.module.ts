import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import 'dotenv/config';
import { DatabaseModule } from 'src/database/database.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { DataController } from './data/data.controller';
import {DealController}  from './deal/deal.controller';
import { DealModule } from './deal/deal.module';



console.log(process.env.POSTGRES_HOST);
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.env'],
    }),
    DatabaseModule,
    UserModule,
    AuthModule,
    DealModule,
  ],
  providers: [AppService],
  controllers: [AppController, DataController, DealController],
})
export class AppModule {}
