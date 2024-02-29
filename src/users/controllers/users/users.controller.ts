import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateUserDto } from 'src/users/dtos/createUser.dto';
import { UsersService } from 'src/users/service/users/users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  GetUsers() {
    return this.usersService.findUsers();
  }

  @Post()
  CreateUser(@Body() CreateUserDto: CreateUserDto) {
    // const { ...useDetail } = CreateUserDto;
    return this.usersService.CreateUser(CreateUserDto);
  }

  @Put(':id')
  async UpdateUser(@Param('id') id: number, @Body() UpdateUser: CreateUserDto) {
    return await this.usersService.UpdateUser(id, UpdateUser);
  }

  @Delete(':id')
  DeleteUser(@Param('id') id: number) {
    if (this.usersService.DeleteUser(id)) return true;
    else return false;
  }
}
