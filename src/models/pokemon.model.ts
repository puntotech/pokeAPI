import { model, Schema } from "mongoose";
import { IPokemon } from "../interfaces/pokemon.interface";

export const PokemonSchema = new Schema(
  {
    name: String,
    gender: String,
    type: String,
    height: Number,
    weight: Number,
    photo: String,
  },
  { versionKey: false }
);

PokemonSchema.set("toJSON", {
  transform: function (doc: any, ret: any, options: any) {
    ret.id = ret._id;
    delete ret._id;
  },
});

const Pokemon = model<IPokemon>("Pokemon", PokemonSchema);

export default Pokemon;
