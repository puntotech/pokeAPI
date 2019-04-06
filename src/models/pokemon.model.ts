import mongoose from "mongoose";

export const PokemonSchema = new mongoose.Schema({
  Name: String,
  Gender: String,
  Type: String,
  Height: Number,
  Weight: Number,
  Photo: String
});
