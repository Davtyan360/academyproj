import { Document } from "mongoose";
import { Role } from "src/role/role.enum";
// ************for testing purposes************
export interface User extends Document {
  readonly _id :string;
  readonly username: string;
  readonly firstName: string;
  readonly lastName: string;
  readonly email: string;
  readonly phone: string[];
  readonly googleId: string;
  readonly refreshToken: string;
  readonly role: Role;
}
