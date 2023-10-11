import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import Deal from './deal.entity';
import { DealController } from './deal.controller';
import { DealService } from './deal.service';

@Module({
    imports: [TypeOrmModule.forFeature([Deal])],
    controllers: [DealController],
    providers: [DealService],
    exports: [DealService],
  
  })
export class DealModule {}
