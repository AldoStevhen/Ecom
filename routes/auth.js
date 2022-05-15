const router = require("express").Router();
const User = require("../models/User");

const bcryp = require("bcrypt");

router.post("/register", async (req, res) => {
  try {
    const salt = await bcryp.genSalt(10);
    const hashPass = await bcryp.hash(req.body.password, salt);
    const newUser = new User({
      id: req.body.id,
      password: req.body.password,
    });
    const user = await newUser.save();
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
