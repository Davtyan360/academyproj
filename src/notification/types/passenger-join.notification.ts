import {
  PASSENGER_JOIN_NOTIF_TITLE,
  PASSENGER_JOIN_NOTIF_BODY,
} from "../notification.constant";
import { BaseNotification } from "./base.notification";

export class PassengerJoinNotification extends BaseNotification {
  constructor(passengerFullName: string) {
    super(
      PASSENGER_JOIN_NOTIF_TITLE,
      PASSENGER_JOIN_NOTIF_BODY(passengerFullName)
    );
  }
}
