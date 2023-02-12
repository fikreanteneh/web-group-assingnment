import { Controller, Get, UseGuards } from '@nestjs/common';
import { UserMiddleware } from 'src/middleware/user.middleware';
import { RoleGuard } from './strategy/role.guard';
import { UserService } from './users.service';



@Controller('users')
export class UsersController {
  constructor(private readonly userService: UserService) {}
  
  // @Use(UserMiddleware)
  @UseGuards(RoleGuard.forRole(1))
  @Get()
  findAll() {
    return this.userService.findAll();
  }

  
}
