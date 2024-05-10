import { AuthService } from '../auth/auth.service';
import { Body, Controller, Post } from '@nestjs/common';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post()
  @Post('login')
  async login(@Body() { email, password }: { email: string; password: string }) {
    const isLogin = await this.authService.login(email, password);
    if (!isLogin) {
      throw new Error('Password not match');
    }
  }
}
