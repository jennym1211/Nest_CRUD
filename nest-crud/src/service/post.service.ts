/*
https://docs.nestjs.com/providers#services
*/
import { PrismaClient, post } from '@prisma/client';
import { Injectable } from '@nestjs/common';
const prisma = new PrismaClient();
@Injectable()
export class PostService {

  async getAllPosts(): Promise<post[]> {
    const posts = await prisma.post.findMany();
    return posts;
  }
}
