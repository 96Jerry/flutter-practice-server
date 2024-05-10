import { Repository } from 'typeorm';

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/models/user/entities/user.entity';

@Injectable()
export class AuthService {
  constructor(@InjectRepository(User) private readonly userRepository: Repository<User>) {}

  async login(email: string, password: string) {
    const user = await this.userRepository.findOne({ where: { email, password } });
    if (!user) {
      throw new Error('Not found user');
    }

    return true;
  }
}
