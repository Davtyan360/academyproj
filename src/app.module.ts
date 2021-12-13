import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { MongooseModule } from "@nestjs/mongoose";

import { AppController } from "./app.controller";
import { AppService } from "./app.service";

import { AuthModule } from "./auth/auth.module";
import { TripModule } from "./trip/trip.module";
import { UserModule } from "./user/user.module";
import { DeviceModule } from "./device/device.module";
import { FirebaseModule } from "./firebase/firebase.module";
import { NotificationModule } from './notification/notification.module';
import { HelperModule } from './helper/helper.module';
import {ChatModule} from "./chat/chat.module";

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGODB_URL),
    AuthModule,
    UserModule,
    TripModule,
    DeviceModule,
    FirebaseModule,
    NotificationModule,
    HelperModule,
    ChatModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
