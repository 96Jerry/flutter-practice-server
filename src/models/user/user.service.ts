import { Repository } from 'typeorm';

import { CreateUserDto } from './dtos/create-user.dto';
import { User } from './entities/user.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UserService {
  constructor(@InjectRepository(User) private readonly userRepository: Repository<User>) {}

  async signUp(dto: CreateUserDto) {
    await this.userRepository.insert(this.userRepository.create(dto));
  }
}
