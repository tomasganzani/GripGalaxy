import mongoose, { Schema, model } from "mongoose";

const UserSchema = new Schema({
  cartId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "carts",
  },
  first_name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  age: {
    type: Number,
    required: false,
    default: 0
  },
  password: {
    type: String,
    required: true,
    default: ' ',
  },
  role: {
    type: String,
    default: "user",
  },
  image: {
    type: String,
  },
  isGithub: {
    type: Boolean,
    default: false
  },
  isGoogle: {
    type: Boolean,
    default: false
  }
});

export const UserModel = model("users", UserSchema);