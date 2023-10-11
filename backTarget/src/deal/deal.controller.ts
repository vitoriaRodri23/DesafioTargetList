import { Body, Controller, Get, Logger, Param, Post } from '@nestjs/common';
import { IsPublic } from 'src/auth/decorators/is-public.decorator';
import Deal from './deal.entity';
import { DealService } from './deal.service';

@Controller('deal')
export class DealController {
  private readonly logger = new Logger(DealController.name);
  constructor(private readonly dealService: DealService) {}

  @IsPublic()
  @Post('/create')
  async createDeal(@Body() dealData: Partial<Deal>): Promise<Deal> {
    return this.dealService.create(dealData);
  }

  @Get('/by-subsector/:subsector')
  async findBySubsectorBuyer(
    @Param('subsector') subsectorBuyer: string,
  ): Promise<Deal[]> {
    return this.dealService.findBySubsectorBuyer(subsectorBuyer);
  }

  @Get('/teste')
  async getOnlySubsectorsByBuyer() {
    const subsector = await this.dealService.getOnlySubsectorsByBuyer();
    return subsector;
  }
}
