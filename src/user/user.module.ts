import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";

import { UserService } from "./user.service";
import { UserSchema } from "./user.schema";
import {UserController} from "./user.controller";

@Module({
  //*******************user module for demo and testing purposes*******************
  imports: [MongooseModule.forFeature([{ name: "User", schema: UserSchema }])],
  exports: [UserService],
  providers: [UserService],
  controllers:[UserController]
})
export class UserModule {}
