import { Document } from "mongoose";

export interface IPokemon extends Document {
  name: String;
  gender: String;
  type: String;
  height: Number;
  weight: Number;
  photo: String;
}
