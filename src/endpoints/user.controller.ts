import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDto } from 'src/models/user/dtos/create-user.dto';
import { UserService } from 'src/models/user/user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async signUp(@Body() body: CreateUserDto) {
    await this.userService.signUp(body);
  }
}
