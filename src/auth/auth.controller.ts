import {Body, Controller, Get, Post, Req, UseGuards} from "@nestjs/common";

import { AuthService } from "./auth.service";

import { GoogleAuthGuard } from "./guards/google-auth.guard";
import {ApiOkResponse, ApiOperation} from "@nestjs/swagger";
import {CreateDeviceDTO} from "../device/dto/create.device.dto";
import {AuthUserDto} from "./authUser.dto";

@Controller("auth")
export class AuthController {
  constructor(private authService: AuthService) {}

  //no method body ???
  @ApiOkResponse({
    description:"empty"
  })
  @ApiOperation({summary:"sign in with google"})
  @UseGuards(GoogleAuthGuard)
  @Get("google")
  async signInWithGoogle(): Promise<void> {}

  @ApiOkResponse({
    description:"empty",
    type:AuthUserDto
  })
  @ApiOperation({summary:"sign in with google and redirect"})
  @UseGuards(GoogleAuthGuard)
  @Post("google/redirect")
  async signInWithGoogleRedirect(
      @Body() req: AuthUserDto
  ): Promise<{ access_token: string }> {
    return this.authService.signInWithGoogle(req);
  }
}
