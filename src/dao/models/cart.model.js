import { Schema, model } from "mongoose";

const CartSchema = new Schema({
    name: { type: String, required: true },
});

export const CartModel = model("products", CartSchema);
