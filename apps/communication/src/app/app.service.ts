import { Injectable } from '@nestjs/common';
import { CreateUserEvent } from './create-user.event';
@Injectable()
export class AppService {
  getData(): { message: string } {
    return { message: 'Welcome to communication!' };
  }

  handleUserCreated(data: CreateUserEvent) {
    console.log('handleUserCreated - COMMUNICATIONS')
    //todo  create email response to user
  }
}
