import { Controller, Get } from '@nestjs/common';
import { UserService } from './service/user.service';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
@Controller()
export class AppController {
  constructor(private readonly userService: UserService) {}

  @Get()
   getAllUsers(): any[] {
    const users = this.userService.getAllUsers();
    console.log(users);

    var userJSON = [];
    
    users.then((value) => {
     userJSON.push(value);
    });

    return userJSON;
  }
}
