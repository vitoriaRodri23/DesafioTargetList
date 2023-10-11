import { Controller, Get } from '@nestjs/common';

@Controller('api')
export class DataController {
  @Get('data')
  getData() {
    return { message: 'back to front' };
  }
}
