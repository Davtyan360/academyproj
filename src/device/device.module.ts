import { Module } from "@nestjs/common";
import { DeviceService } from "./device.service";
import { DeviceController } from "./device.controller";
import { DeviceSchema } from "./device.schema";
import { MongooseModule } from "@nestjs/mongoose";

@Module({
  imports: [
    MongooseModule.forFeature([{ name: "Device", schema: DeviceSchema }]),
  ],
  exports: [DeviceService],
  providers: [DeviceService],
  controllers: [DeviceController],
})
export class DeviceModule {}
