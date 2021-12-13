import * as mongoose from "mongoose";
import { Role } from "../role/role.enum";
// ************for testing purposes************
export const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      trim: true,
    },
    firstName: {
      type: String,
      required: true,
      trim: true,
    },
    lastName: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },
    phone: {
      type: [String],
    },
    googleId: { type: String },
    refreshToken: { type: String },
    role: {
      type: String,
      enum: Role,
    },
  },
  {
    timestamps: true,
  }
);
