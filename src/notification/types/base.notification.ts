import { Notification } from "../notification.interface";

export class BaseNotification implements Notification {
  readonly title: string;
  readonly body: string;

  constructor(title: string, body: string) {
    this.title = title;
    this.body = body;
  }
}
