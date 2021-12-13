import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Req,
} from "@nestjs/common";

import { TripService } from "./trip.service";
import { TripStatus } from "./trip.status.enum";
import { PatchTripDto } from "./dto/patch.trip.dto";
import { Trip } from "./trip.interface";
import { CreateTripDTO } from "./dto/create.trip.dto";
import {ApiOkResponse, ApiOperation} from "@nestjs/swagger";
import {CreateDeviceDTO} from "../device/dto/create.device.dto";

@Controller("trips")
export class TripController {
  constructor(private readonly tripService: TripService) {}

  @ApiOkResponse({
    description:"empty",
    type: CreateTripDTO
  })
  @ApiOperation({summary:"creating trip"})
  @Post()
  async create(@Body() data: CreateTripDTO) {
    this.tripService.create(data);
  }

  @ApiOkResponse({
    description:"empty",
    // dto is empty
  })
  @ApiOperation({summary:"updating trip"})
  @Patch(":id")
  async modify(
    @Body() data: PatchTripDto,
    @Param("id") id: string
  ): Promise<void> {
    await this.tripService.updateById(id, data);
  }

  @ApiOkResponse({
    description:"empty",
  })
  @ApiOperation({summary:"deleting trip"})
  @Delete(":id")
  async cancel(@Param("id") id: string): Promise<void> {
    return await this.tripService.updateById(id, {
      status: TripStatus.CANCELLED,
    });
  }

  @ApiOperation({summary:"get trips"})
  // TODO get another trips for drivers?
  @Get("open")
  async getOpenTrips(): Promise<Array<Trip>> {
    return await this.tripService.getByStatus(TripStatus.INITIAL);
  }

  @ApiOkResponse({
    description:"empty",
    type: String
  })
  @ApiOperation({summary:"join trip"})
  // TODO think about routes, query strings
  @Post(":id/join")
  async join(
    @Body("userId") userId: string,
    @Param("id") id: string
  ): Promise<void> {
    // TODO maybe userId we can receive from req
    await this.tripService.join(id, userId);
  }
  @ApiOkResponse({
    description:"empty",
    type: String
  })
  @ApiOperation({summary:"confirm join trip"})
  @Post(":id/join/confirm")
  async confirmJoin(
    @Body("userId") userId: string,
    @Param("id") id: string
  ): Promise<void> {
    await this.tripService.confirmJoin(id, userId);
  }

  @ApiOkResponse({
    description:"empty",
    type: String
  })
  @ApiOperation({summary:"reject join trip"})
  @Post(":id/join/reject")
  async rejectJoin(
    @Body("userId") userId: string,
    @Param("id") id: string
  ): Promise<void> {
    await this.tripService.rejectJoin(id, userId);
  }
}
