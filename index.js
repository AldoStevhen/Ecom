const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRoute = require("./routes/auth.js");
const userRoute = require("./routes/user.js");
const productRoute = require("./routes/product.js");
const PORT = process.env.PORT || 5000;
dotenv.config();
const app = express();

mongoose
  .connect(process.env.MONGO_DB_URL)
  .then(() => console.log("connect to mongodb"))
  .catch((err) => {
    console.log(err);
  });

//all api route goes here
app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/user", userRoute);
app.use("/api/product", productRoute);

app.listen(PORT, () => {
  console.log(`server run on PORT ${PORT}`);
});
