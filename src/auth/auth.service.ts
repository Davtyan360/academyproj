import { Injectable, BadRequestException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";

import { UserService } from "../user/user.service";
import { User } from "src/user/user.interface";
import {AuthUserDto} from "./authUser.dto";

@Injectable()
export class AuthService {
  constructor(
    private usersService: UserService,
    private jwtService: JwtService
  ) {}

  async login(user: User, accessToken = null) {
    // *******************login function for demo and testing purposes*******************
    return {
      access_token:
        accessToken ??
        this.jwtService.sign(
          {
            sub: user.id,
            email: user.email,
          },
          {
            secret: process.env.JWT_SECRET,
            expiresIn: process.env.JWT_EXPIRE_TIME,
          }
        ),
    };
  }

  async signInWithGoogle( user:AuthUserDto ) {
    if (!user) throw new BadRequestException();
    const { data, accessToken } = user;
    let userData = await this.usersService.findByEmail(data.email);

    if (!userData) userData = await this.usersService.create(data);
    else if (!userData.googleId)
      userData = await this.usersService.updateById(userData._id, {
        googleId: data.googleId,
      });

    return this.login(userData, accessToken);
  }
}
