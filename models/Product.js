const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    id_Product: { type: Int, required: true, unique: true },
    name: { type: String, required: true },
    quantity: { type: Int },
    price: { type: Int },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", ProductSchema);
