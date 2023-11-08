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
router.post("/register", auth, async (req, res) => {
  try {
    const { firstname, lastname, email, visit } = req.body;
    const newUser = new User({
      firstname,
      lastname,
      email,
      visit,
    });
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// DELETE užklausos apdorojimas
router.delete("/:id", auth, async (req, res) => {
  console.log(userId);
  try {
    const userId = req.params.id;
    const user = await User.findByIdAndRemove(userId);
    console.log(userId);

    if (!user) {
      return res.status(404).json({ error: "Vartotojas nerastas" });
    }

    res.json({ message: "Vartotojas ištrintas sėkmingai" });
  } catch (error) {
    console.error("Ištrynimo klaida:", error);
    res.status(500).json({ error: "Ištrinant vartotoją įvyko klaida" });
  }
});

module.exports = router;
