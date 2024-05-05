import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  async getHello() {
    const timeout = (ms) => {
      return new Promise((resolve) => setTimeout(resolve, ms));
    };
    await timeout(3000);
    return 'Hello World 3';
  }
}
