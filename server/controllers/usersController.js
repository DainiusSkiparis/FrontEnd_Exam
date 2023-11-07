const express = require("express");
const router = express.Router();
const User = require("../models/user.Model.js");
const auth = require("../common/middleware/authMiddleware.js");

// GET - Gauti visus vartotojus
router.get("/", auth, async (_, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// POST - Sukurti vartotoją
router.post("/create", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const newUser = new User({
      name,
      email,
      password,
    });
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
