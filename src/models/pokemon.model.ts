import { IPokemon } from "../interfaces/pokemon.interface";
import mongoose from "mongoose";

const PokemonSchema = new mongoose.Schema({
  name: { type: String, required: [true] },
  gender: { type: String, required: [true] },
  type: { type: String, required: [true] },
  height: { type: Number, required: [true] },
  weight: { type: Number, required: [true] },
  photo: { type: String, required: [true] },
});

export const Pokemon = mongoose.model<IPokemon>("Pokemon", PokemonSchema);
