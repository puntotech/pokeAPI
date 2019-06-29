import mongoose from "mongoose";

const PokemonSchema = new mongoose.Schema({
  Name: String,
  Gender: String,
  Type: String,
  Height: Number,
  Weight: Number,
  Photo: String
});

export const Pokemon = mongoose.model("Pokemon", PokemonSchema);
