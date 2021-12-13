import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";

import { DeviceSchema } from "src/device/device.schema";

import { DeviceService } from "src/device/device.service";
import { FirebaseService } from "src/firebase/firebase.service";
import { NotificationService } from "./notification.service";

@Module({
  imports: [
    MongooseModule.forFeature([{ name: "Device", schema: DeviceSchema }]),
  ],
  exports: [NotificationService],
  providers: [NotificationService, FirebaseService, DeviceService],
})
export class NotificationModule {}
