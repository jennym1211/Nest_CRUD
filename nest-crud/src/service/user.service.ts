/*
https://docs.nestjs.com/providers#services
*/
import { PrismaClient, user } from '@prisma/client';
import { Injectable } from '@nestjs/common';
const prisma = new PrismaClient();
@Injectable()
export class UserService {
  async getAllUsers(): Promise<user[]> {
    const users = await prisma.user.findMany();
    return users;
  }
}
