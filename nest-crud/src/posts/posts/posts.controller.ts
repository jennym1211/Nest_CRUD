import { Controller, Get } from '@nestjs/common';
import { UserService } from './../../service/user.service';
import { StateService } from './../../service/state.service';
import { PostService } from 'src/service/post.service';
@Controller('posts')
export class PostsController {
  constructor(
    private readonly userService: UserService,
    private readonly stateService: StateService,
    private readonly postService: PostService
  ) {}

  @Get("/index")
  async getAllPosts(): Promise<any[]> {
   const posts = await this.postService.getAllPosts();
   console.log(posts);
   return posts;
 }

  @Get("/users")
   async getAllUsers(): Promise<any[]> {
    const users = await this.userService.getAllUsers();
    console.log(users);
    return users;
  }

  @Get("/states")
  async getAllStates(): Promise<any[]>  {
    const states = await this.stateService.getAllStates();
    console.log(states);

    return states;
  }
}
