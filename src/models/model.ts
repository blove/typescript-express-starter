import { Model } from "mongoose";
import { IUserModel } from "./user";

export interface IModel {
  user: Model<IUserModel>;
}