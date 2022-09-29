import { Controller, Get } from '@nestjs/common';
import { UserService } from './service/user.service';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
@Controller()
export class AppController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async getAllUsers(): Promise<string> {
    const users = this.userService.getAllUsers();
    console.log(users);

    users.then((value) => {
      console.log(value);
    });

    return users.toString();
  }
}
