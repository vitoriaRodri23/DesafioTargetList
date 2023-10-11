import { Injectable, Logger } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import User from '../user/entities/user.entity';
import { UserService } from '../user/user.service';
import { UnauthorizedError } from './errors/unauthorized.error';
import { RegistrationStatus } from './helpers/RegistrationStatus';
import { UserDto } from './models/User.dto';
import { UserToken } from './models/UserToken';

@Injectable()
export class AuthService {
  private readonly logger = new Logger(AuthService.name);

  constructor(
    private readonly jwtService: JwtService,
    private readonly userService: UserService,
  ) {}

  async register(userDto: CreateUserDto): Promise<RegistrationStatus> {
    let status: RegistrationStatus = {
      success: true,
      message: 'user registered',
    };
    try {
      await this.userService.createUser(userDto);
    } catch (err) {
      status = {
        success: false,
        message: JSON.stringify(err),
      };
    }
    return status;
  }

  async login(user: UserDto): Promise<UserToken> {
    this.logger.log(`Start method login - Request  - ${JSON.stringify(user)}`);
    const payload: UserDto = {
      email: user.email,
      password: user.password,
    };

    await this.validateUser(user);

    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async validateUser(loginData: UserDto): Promise<User> {
    this.logger.log(
      `Start method validateUser - Request  - ${JSON.stringify(loginData)}`,
    );
    const user = await this.userService.findByEmail(loginData.email);

    if (user) {
      const isPasswordValid = await bcrypt.compare(
        loginData.password,
        user.password,
      );

      if (isPasswordValid) {
        return {
          ...user,
        };
      }
    }
    throw new UnauthorizedError(
      'Email address or password provided is incorrect.',
    );
  }
}
