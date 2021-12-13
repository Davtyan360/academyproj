import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";

import { Model, ObjectId } from "mongoose";

import { User } from "./user.interface";

import { Helper } from "src/helper/helper.decorator";
import { HelperService } from "src/helper/helper.service";

import { CreateUserDTO } from "./dto/create.user.dto";
import { UpdateUserDto } from "./dto/update.user.dto";

@Injectable()
export class UserService {
  constructor(
    @InjectModel("User") private readonly userModel: Model<User>,
    @Helper() private readonly helperService: HelperService
  ) {}
  // *******************user service for demo and testing purposes*******************
  async create(user: CreateUserDTO): Promise<User> {
    user.username = this.helperService.makeDefaultUsername(
      user.firstName,
      user.lastName
    );
    const newUser = new this.userModel(user);
    return newUser.save();
  }

  async findByGoogleId(googleId: string): Promise<User> {
    return await this.userModel.findOne({ googleId });
  }

  async findByEmail(email: string): Promise<User> {
    return await this.userModel.findOne({ email });
  }

  async findById(id: string | ObjectId): Promise<User> {
    return await this.userModel.findById(id);
  }

  async updateById(userId: string, data: UpdateUserDto): Promise<User> {
    return await this.userModel.findByIdAndUpdate(userId, data);
  }
}
