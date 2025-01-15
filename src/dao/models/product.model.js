import { Schema, model } from "mongoose";

const ProductSchema = new Schema({
  name: { type: String, required: false },
  description: { type: String, required: false },
  price: { type: Number, required: false },
  stock: { type: Number, required: false },
});

export const ProductModel = model("products", ProductSchema);
