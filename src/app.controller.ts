import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import {ApiOkResponse , ApiOperation} from "@nestjs/swagger";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}


  @ApiOkResponse({
    description:"test endpoint"
  })
  @ApiOperation({summary:"test endpoint"})
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
