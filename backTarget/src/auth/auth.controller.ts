import { Body, Controller, Logger, Post } from '@nestjs/common';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { AuthService } from './auth.service';
import { IsPublic } from './decorators/is-public.decorator';
import { RegistrationStatus } from './helpers/RegistrationStatus';
import { UserToken } from './models/UserToken';
import { UserDto } from './models/User.dto';

@Controller('auth')
export class AuthController {
  private readonly logger = new Logger(AuthController.name);
  constructor(private readonly authService: AuthService) {}

  @IsPublic()
  @Post('login')
  async login(@Body() user: UserDto): Promise<UserToken> {
    this.logger.log(`Start method login`);
    return await this.authService.login(user);
  }

  @IsPublic()
  @Post('register')
  async register(
    @Body() createUserDto: CreateUserDto,
  ): Promise<RegistrationStatus> {
    try {
      const status = await this.authService.register(createUserDto);
      return status;
    } catch (err) {
      throw new Error('Failed to register user');
    }
  }
}
