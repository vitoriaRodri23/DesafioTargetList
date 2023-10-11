import { Controller, Get } from '@nestjs/common';
import { CurrentUser } from 'src/auth/decorators/current-user.decorator';
import User from 'src/user/entities/user.entity';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // @IsPublic()
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  // @IsPublic()
  @Get('teste')
  getMe(@CurrentUser() user: User) {
    return user;
  }
}
