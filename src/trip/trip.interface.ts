import { Document, Schema } from "mongoose";

import { Passenger } from "./trip.passenger.interface";

import { TripStatus } from "./trip.status.enum";

// ************for testing purposes************
export interface Trip extends Document {
  passengers: Passenger[];
  readonly location: string;
  readonly date: Date;
  readonly startPoint: string;
  readonly endPoint: string;
  readonly stops: string[];
  readonly freeSeatCount: string;
  readonly vehicle: string;
  readonly driver: string;
  readonly channel: string;
  readonly status: TripStatus;
}
