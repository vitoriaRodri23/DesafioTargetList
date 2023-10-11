import { Body, Controller, Get, Post } from '@nestjs/common';
import User from './entities/user.entity';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('/teste')
  public async getAllUsers(): Promise<User[]> {
    const messages = await this.userService.getAllUsers();
    return messages;
  }
}
