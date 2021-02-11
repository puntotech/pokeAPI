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

const Pokemon = model<IPokemon>("Pokemon", PokemonSchema);

export default Pokemon;
