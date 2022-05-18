const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    title_id: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    categories: { type: Array },
    quantity: { type: String },
    price: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", ProductSchema);
