import mongoose, { Schema, Document } from "mongoose";

export interface IHero extends Document {
  nom: string;
  alias?: string;
  description?: string;
  univers?: string;
  image?: string;
}

const heroSchema = new Schema<IHero>(
  {
    nom: { type: String, required: true },
    alias: String,
    description: String,
    univers: String,
    image: String,
  },
  { timestamps: true }
);

export default mongoose.model<IHero>("Hero", heroSchema);
