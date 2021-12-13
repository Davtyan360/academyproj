import { Injectable } from "@nestjs/common";
import { messaging } from "firebase-admin";

import { DeviceService } from "src/device/device.service";
import { FirebaseService } from "src/firebase/firebase.service";
import { HelperService } from "src/helper/helper.service";
import { Passenger } from "src/trip/trip.passenger.interface";

import { User } from "src/user/user.interface";
import { Notification } from "./notification.interface";

import { AfterTripCancelNotification } from "./types/after-trip-cancel.notification";
import { AfterTripUpdateNotification } from "./types/after-trip-update.notification";
import { PassengerJoinConfirmedNotification } from "./types/passenger-join-confirmed.notification";
import { PassengerJoinRejectedNotification } from "./types/passenger-join-rejected.notification";
import { PassengerJoinNotification } from "./types/passenger-join.notification";

// TODO think about argumennts, in order to get all in tokens only
@Injectable()
export class NotificationService {
  constructor(
    private readonly firebaseService: FirebaseService,
    private readonly deviceService: DeviceService,
    private readonly helperService: HelperService
  ) {
    this.firebaseService.configure();
  }

  async notifyPassengersTripUpdate(passengers: Passenger[]): Promise<void> {
    const tokens = await this.deviceService.getTokensArrayByUserIds(passengers);
    this.sendMany(tokens, new AfterTripUpdateNotification());
  }

  async notifyPassengersTripCancel(passengers: Passenger[]): Promise<void> {
    const tokens = await this.deviceService.getTokensArrayByUserIds(passengers);
    this.sendMany(tokens, new AfterTripCancelNotification());
  }

  async notifyDriverPassengerWantsToJoin(
    driverId: string,
    { _id, firstName, lastName }: User
  ): Promise<void> {
    const driverToken = await this.deviceService.getTokenByUserId(driverId);
    const passengerFullName = this.helperService.makeFullName(
      firstName,
      lastName
    );
    this.sendOne(
      driverToken,
      new PassengerJoinNotification(passengerFullName),
      { userId: `${_id}` }
    );
  }

  async notifyPassengerJoinRequestIsConfirmed(userId: string): Promise<void> {
    const userToken = await this.deviceService.getTokenByUserId(userId);
    this.sendOne(userToken, new PassengerJoinConfirmedNotification());
  }

  async notifyPassengerJoinRequestIsRejected(userId: string): Promise<void> {
    const userToken = await this.deviceService.getTokenByUserId(userId);
    this.sendOne(userToken, new PassengerJoinRejectedNotification());
  }

  async sendOne(
    token: string,
    notification: Notification,
    data: any = {}
  ): Promise<string> {
    try {
      return await messaging().send({
        notification,
        token,
        data,
      });
    } catch (error) {
      return Promise.reject(error);
    }
  }

  async sendMany(
    tokens: string[],
    notification: Notification,
    data: any = {}
  ): Promise<string[]> {
    let notifications = [];

    tokens.forEach((token) => {
      notifications.push(this.sendOne(token, notification, data));
    });

    return Promise.all(notifications);
  }
}
