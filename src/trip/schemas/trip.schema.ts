import * as mongoose from "mongoose";
import { Schema } from "mongoose";
import { TripStatus } from "../trip.status.enum";
import { PointSchema } from "./trip.point.schema";

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
    // TODO think about geospatial indexes
    location: PointSchema,
    // TODO change date name to departureName
    date: {
      type: Date,
      required: true,
    },
    startPoint: PointSchema,
    endPoint: PointSchema,
    stops: [PointSchema],
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
