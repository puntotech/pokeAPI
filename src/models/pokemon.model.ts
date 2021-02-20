import { Schema, model } from "mongoose";

import { IPokemon } from "../interfaces/pokemon.interface";

const PokemonSchema = new Schema({
  name: { type: String, required: [true] },
  gender: { type: String, required: [true] },
  type: { type: String, required: [true] },
  height: { type: Number, required: [true] },
  weight: { type: Number, required: [true] },
  photo: { type: String, required: [true] },
});

export const Pokemon = model<IPokemon>("Pokemon", PokemonSchema);
