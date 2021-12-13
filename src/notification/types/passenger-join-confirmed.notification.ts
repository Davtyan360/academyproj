import { PASSENGER_JOIN_CONFIRMED_NOTIF_BODY, PASSENGER_JOIN_CONFIRMED_NOTIF_TITLE } from "../notification.constant";
import { BaseNotification } from "./base.notification";

export class PassengerJoinConfirmedNotification extends BaseNotification {
  constructor() {
    super(PASSENGER_JOIN_CONFIRMED_NOTIF_TITLE, PASSENGER_JOIN_CONFIRMED_NOTIF_BODY);
  }
}
