import { Document } from "mongoose";

export interface IPokemon extends Document {
  name: string;
  gender: string;
  type: string;
  height: number;
  weight: number;
  photo: string;
}
