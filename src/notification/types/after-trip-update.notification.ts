import {
  UPDATE_TRIP_NOTIF_BODY,
  UPDATE_TRIP_NOTIF_TITLE,
} from "../notification.constant";
import { BaseNotification } from "./base.notification";

export class AfterTripUpdateNotification extends BaseNotification {
  constructor() {
    super(UPDATE_TRIP_NOTIF_TITLE, UPDATE_TRIP_NOTIF_BODY);
  }
}
