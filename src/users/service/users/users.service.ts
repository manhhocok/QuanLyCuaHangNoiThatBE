import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/typeom/entities/user.entity';
import { bodyUserParams } from 'src/utils/type';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  findAll() {
    return this.userRepository.find();
  }

  findOne(account_id: number) {
    return this.userRepository.findOneBy({ account_id });
  }

  create(userDetail: bodyUserParams) {
    const newUser = this.userRepository.create({ ...userDetail });
    return this.userRepository.save(newUser);
  }

  edit(account_id: number, userDetail: bodyUserParams) {
    return this.userRepository.update(account_id, { ...userDetail });
  }

  reomve(account_id: number) {
    if (this.userRepository.delete(account_id)) return true;
    else return false;
  }
}
