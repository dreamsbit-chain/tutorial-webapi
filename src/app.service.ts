import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {

    console.log("Request is Coming!");
    return 'Hello World!';
  }
}
