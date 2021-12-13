import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
  Req,
  Res,
} from "@nestjs/common";
import { Device } from "./device.interface";
import { DeviceService } from "./device.service";
import { CreateDeviceDTO } from "./dto/create.device.dto";
import { DeleteDeviceDto } from "./dto/delete.device.dto";
import { PatchDeviceDto } from "./dto/patch.device.dto";
import {ApiOkResponse, ApiOperation} from "@nestjs/swagger";

@Controller("devices")
export class DeviceController {
  constructor(private readonly deviceService: DeviceService) {}

  @ApiOkResponse({
    description:"empty",
    type: CreateDeviceDTO
  })
  @ApiOperation({summary:"creating device"})
  @Post()
  async create(@Body() data: CreateDeviceDTO): Promise<Device> {
    return await this.deviceService.create(data);
  }

  @ApiOkResponse({
    description:"empty",
    type: PatchDeviceDto
  })
  @ApiOperation({summary:"updatign device"})
  @Patch()
  async update(@Body() data: PatchDeviceDto): Promise<void> {
    return await this.deviceService.updateTokenByUserId(data);
  }

  @ApiOkResponse({
    description:"empty",
    type: DeleteDeviceDto
  })
  @ApiOperation({summary:"deleting device"})
  @Delete()
  async delete(@Body() data: DeleteDeviceDto): Promise<void> {
    return await this.deviceService.deleteByUserId(data);
  }
}
