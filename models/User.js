const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    username: { type: String, required: true },
    address: { type: String, required: true },
    password: { type: String, required: true },
    join_date: { type: Date, required: true },
    phone_Num: { type: Number, required: true },
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
