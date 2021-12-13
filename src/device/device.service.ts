import { InjectModel } from "@nestjs/mongoose";
import { BadRequestException, Injectable } from "@nestjs/common";
import { Model, Schema } from "mongoose";

import { Helper } from "src/helper/helper.decorator";
import { HelperService } from "src/helper/helper.service";

import { User } from "src/user/user.interface";
import { Device } from "./device.interface";

import { CreateDeviceDTO } from "./dto/create.device.dto";
import { DeleteDeviceDto } from "./dto/delete.device.dto";
import { PatchDeviceDto } from "./dto/patch.device.dto";
import { Passenger } from "src/trip/trip.passenger.interface";

@Injectable()
export class DeviceService {
  constructor(
    @InjectModel("Device") private readonly deviceModel: Model<Device>,
    @Helper() private readonly helperService: HelperService
  ) {}

  async create(data: CreateDeviceDTO): Promise<Device> {
    if (data.user && data.token) return await this.deviceModel.create(data);
    throw new BadRequestException();
  }

  async getTokensArrayByUserIds(
    passengers: Passenger[]
  ): Promise<Array<string>> {
    const userIds = passengers.map((pass) => pass.user);
    const devices = await this.deviceModel.find({ user: { $in: userIds } });
    return this.helperService.extractTokensFromDevices(devices);
  }

  async getTokenByUserId(userId: string | User): Promise<string> {
    const { token } = await this.deviceModel.findOne(
      { user: userId },
      { token: 1 }
    );
    return token;
  }

  async updateTokenByUserId({ user, token }: PatchDeviceDto): Promise<void> {
    if (user && token)
      await this.deviceModel.findOneAndUpdate({ user }, { token });
    throw new BadRequestException();
  }

  async deleteByUserId({ user }: DeleteDeviceDto): Promise<void> {
    if (user) await this.deviceModel.deleteOne({ user });
    throw new BadRequestException();
  }
}
