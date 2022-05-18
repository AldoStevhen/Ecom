const router = require("express").Router();
const User = require("../models/User");
const Product = require("../models/Product");

const bcryp = require("bcrypt");
//register
router.post("/register", async (req, res) => {
  try {
    const salt = await bcryp.genSalt(10);
    const hashPass = await bcryp.hash(req.body.password, salt);
    const newUser = new User({
      username: req.body.username,
      address: req.body.address,
      password: hashPass,
      join_date: req.body.join_date,

      phone_Num: req.body.phone_Num,
    });
    const user = await newUser.save();
    console.log(user);
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});

//login api
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    !user && res.status(400).json("wrong credentials");

    const validated = await bcryp.compare(req.body.password, user.password);
    !validated && res.status(422).json("Incorrect Password");

    const { password, ...others } = user._doc;
    res.status(200).json(others);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
