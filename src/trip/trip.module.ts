import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";

import { TripSchema } from "./schemas/trip.schema";
import { TripService } from "./trip.service";
import { TripController } from "./trip.controller";

import { UserModule } from "src/user/user.module";
import { NotificationModule } from "src/notification/notification.module";
import { DeviceModule } from "src/device/device.module";

// ************for testing purposes************
@Module({
  imports: [
    MongooseModule.forFeature([{ name: "Trip", schema: TripSchema }]),
    UserModule,
    NotificationModule,
    DeviceModule,
  ],
  exports: [TripService],
  providers: [TripService],
  controllers: [TripController],
})
export class TripModule {}
