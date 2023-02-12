import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { User,UserDocument } from './dto/user.schema';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  // async create(email: string, password: string): Promise<User> {
  //   const hash = await argon.hash(password);
  //   const createdUser = new this.userModel({ email, hash });
  //   return createdUser.save();
  // }

  async findOne(email: string): Promise<User | null> {
    return await this.userModel.findOne({ email });
  }
  async findOneById(id: string): Promise<User | null> {
    return await this.userModel.findOne({ id });
  }

  async findAll(): Promise<User[]> {
    return await this.userModel.find().exec();
  }
  async create(userData) {
    const user = new this.userModel(userData);
    return await user.save();
  
    
  }
}
