import {
  PASSENGER_JOIN_REJECTED_NOTIF_BODY,
  PASSENGER_JOIN_REJECTED_NOTIF_TITLE,
} from "../notification.constant";
import { BaseNotification } from "./base.notification";

export class PassengerJoinRejectedNotification extends BaseNotification {
  constructor() {
    super(
      PASSENGER_JOIN_REJECTED_NOTIF_TITLE,
      PASSENGER_JOIN_REJECTED_NOTIF_BODY
    );
  }
}
