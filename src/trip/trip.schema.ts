import * as mongoose from "mongoose";
import { Schema } from "mongoose";
import { TripStatus } from "./trip.status.enum";

// ************for testing purposes************
export const TripSchema = new mongoose.Schema(
  {
    // TODO custom schemaType passenger
    passengers: [
      {
        user: {
          type: Schema.Types.ObjectId,
          ref: "User",
        },
        status: String,
        date: Date,
      },
    ],
    location: {
      // TODO to be discussed
      type: String,
    },
    // TODO change date name to departureName
    date: {
      type: Date,
      required: true,
    },
    startPoint: {
      type: String,
      required: true,
      trim: true,
    },
    endPoint: {
      type: String,
      required: true,
      trim: true,
    },
    stops: [String],
    freeSeatCount: {
      type: Number,
      required: true,
    },
    vehicle: { type: Schema.Types.ObjectId, ref: "Vehicle", required: true },
    driver: { type: Schema.Types.ObjectId, ref: "User", required: true },
    channel: [{ type: Schema.Types.ObjectId, ref: "Group-chat" }],
    status: { type: String, enum: TripStatus, default: TripStatus.INITIAL },
  },
  {
    timestamps: true,
  }
);
