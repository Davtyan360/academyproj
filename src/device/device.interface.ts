import { Document, Schema } from "mongoose";
import { User } from "src/user/user.interface";

export interface Device extends Document {
  readonly user: User | Schema.Types.ObjectId | string;
  readonly token: string;
  readonly os: string;
}
