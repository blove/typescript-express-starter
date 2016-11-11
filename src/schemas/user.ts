import { Schema } from "mongoose";

export var userSchema: Schema = new Schema({
  createdAt: Date,
  email: String,
  firstName: String,
  lastName: String
});
userSchema.pre("save", next => {
  let now = new Date();
  if (!this.createdAt) {
    this.createdAt = now;
  }
  next();
});