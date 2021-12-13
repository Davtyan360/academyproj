import * as mongoose from "mongoose";
import { Schema } from "mongoose";
import { DeviceOS } from "./device.os.enum";

export const DeviceSchema = new mongoose.Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: "User", required: true },
    os: {
      type: String,
      required: true,
      enum: DeviceOS,
      default: DeviceOS.ANDROID,
    },
    token: { type: String, required: true },
  },
  { timestamps: true }
);
