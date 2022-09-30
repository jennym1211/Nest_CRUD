import { PostsController } from './posts/posts/posts.controller';
import { StateService } from './service/state.service';
import { UserService } from './service/user.service';
import { PostService } from './service/post.service';
import { Module } from '@nestjs/common';

@Module({
  imports: [],
  controllers: [PostsController],
  providers: [StateService, UserService, PostService],
})
export class AppModule { }
