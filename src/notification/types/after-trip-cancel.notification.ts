import { CANCEL_TRIP_NOTIF_TITLE, CANCEL_TRIP_NOTIF_BODY } from "../notification.constant";
import { BaseNotification } from "./base.notification";

export class AfterTripCancelNotification extends BaseNotification {
  constructor() {
    super(CANCEL_TRIP_NOTIF_TITLE, CANCEL_TRIP_NOTIF_BODY);
  }
}
