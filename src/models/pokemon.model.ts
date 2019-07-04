import mongoose from 'mongoose';

const PokemonSchema = new mongoose.Schema({
  name: String,
  gender: String,
  type: String,
  height: Number,
  weight: Number,
  photo: String
});

export const Pokemon = mongoose.model('Pokemon', PokemonSchema);
