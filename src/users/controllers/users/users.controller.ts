import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { bodyUserDto } from 'src/users/dtos/bodyUser.dto';
import { UsersService } from 'src/users/service/users/users.service';

@Controller('api/users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  GetUsers() {
    return this.usersService.findAll();
  }

  @Get(':account_id')
  GetUserDetail(@Param('account_id') account_id: number) {
    return this.usersService.findOne(account_id);
  }

  @Post()
  CreateUser(@Body() bodyUserDto: bodyUserDto) {
    return this.usersService.create(bodyUserDto);
  }

  @Put(':account_id')
  async UpdateUser(
    @Param('account_id') account_id: number,
    @Body() UpdateUser: bodyUserDto,
  ) {
    await this.usersService.edit(account_id, UpdateUser);
    return this.GetUsers();
  }

  @Delete(':account_id')
  async DeleteUser(@Param('account_id') account_id: number) {
    await this.usersService.reomve(account_id);
    return this.GetUsers;
  }
}
