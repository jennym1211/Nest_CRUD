import { Controller, Get } from '@nestjs/common';
import { UserService } from './../../service/user.service';
import { StateService } from './../../service/state.service';
@Controller('posts')
export class PostsController {
  constructor(
    private readonly userService: UserService,
    private readonly stateService: StateService,
  ) {}
  @Get()
  async getAllUsers(): Promise<string> {
    const users = this.userService.getAllUsers();
    console.log(users);

    users.then((value) => {
      console.log(value);
    });
    return users.toString();
  }

  @Get()
  getAllStates(): string {
    const states = this.stateService.getAllStates();
    console.log(states);

    states.then((value) => {
      console.log(value);
    });
    return states.toString();
  }
}
