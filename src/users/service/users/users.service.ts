import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/typeom/entities/user.entity';
import { CreateUserParams } from 'src/utils/type';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  findUsers() {
    return this.userRepository.find();
  }

  CreateUser(userDetail: CreateUserParams) {
    const newUser = this.userRepository.create({ ...userDetail });
    return this.userRepository.save(newUser);
  }

  UpdateUser(id: number, userDetail: CreateUserParams) {
    return this.userRepository.update(id, { ...userDetail });
  }

  DeleteUser(id: number) {
    if (this.userRepository.delete(id)) return true;
    else return false;
  }
}
