import { User } from "src/user/user.interface";
import { PassengerStatus } from "./trip.passenger.status.enum";

export interface Passenger {
  readonly user: User | string;
  status: PassengerStatus;
  readonly date: Date;
}
