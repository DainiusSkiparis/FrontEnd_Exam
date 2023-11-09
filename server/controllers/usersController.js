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
    console.error("Error creating user:", error);
    res.status(400).json({ error: error.message });
  }
});

// DELETE ištrinti vartotoją
router.delete("/:id", auth, async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await User.findByIdAndDelete(userId);
    console.log(userId);

    if (!user) {
      return res.status(404).json({ error: "Visit not found" });
    }

    res.json({ message: "Visit deleted successfully" });
  } catch (error) {
    console.error("Deletion error:", error);
    res
      .status(500)
      .json({ error: "An error occurred while deleting the visit" });
  }
});

// PUT - Atnaujinti vartotoją
router.put("/:id", auth, async (req, res) => {
  try {
    const userId = req.params.id;
    const { firstname, lastname, email, visit } = req.body;

    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { firstname, lastname, email, visit },
      { new: true }
    );

    if (!updatedUser) {
      return res.status(404).json({ error: "User not found" });
    }

    res.json(updatedUser);
  } catch (error) {
    console.error("Update error:", error);
    res
      .status(500)
      .json({ error: "An error occurred while updating the user" });
  }
});

module.exports = router;
