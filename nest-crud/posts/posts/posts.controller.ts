import { Controller, Get } from '@nestjs/common';

@Controller('posts')
export class PostsController {
  @Get()
  getAllUsers(): string {
    return 'This action returns all users';
  }

  @Get()
  getAllStates(): string {
    return 'This action returns all states';
  }
}
