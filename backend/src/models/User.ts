import mongoose, { Schema, Document } from "mongoose";

export interface IUser extends Document {
  username: string;
  passwordHash: string;
}

const userSchema = new Schema<IUser>({
  username: { type: String, required: true, unique: true },
  passwordHash: { type: String, required: true },
});

export default mongoose.model<IUser>("User", userSchema);
