import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import Deal from './deal.entity';

@Injectable()
export class DealService {
  private readonly logger = new Logger(DealService.name);
  constructor(
    @InjectRepository(Deal)
    private readonly dealRepository: Repository<Deal>,
  ) {}

  async create(dealData: Partial<Deal>): Promise<Deal> {
    const newDeal = this.dealRepository.create(dealData);
    return await this.dealRepository.save(newDeal);
  }

  async findBySubsectorBuyer(subsectorBuyer: string): Promise<Deal[]> {
    return this.dealRepository.find({
      where: { subsectorBuyer: subsectorBuyer },
    });
  }

  async getOnlySubsectorsByBuyer(): Promise<string[]> {
    const subsectors = await this.dealRepository
      .createQueryBuilder('deal')
      .select('deal."subsectorBuyer"', 'subsector')
      .groupBy('subsector')
      .execute();
    return subsectors.map(({ subsector }) => subsector);
  }
}
