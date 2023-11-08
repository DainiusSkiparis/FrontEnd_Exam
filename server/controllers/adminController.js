const express = require("express");
const router = express.Router();
const Admin = require("../models/admin.Model.js");
const auth = require("../common/middleware/authMiddleware.js");

// GET - Gauti visus adminus
router.get("/", auth, async (_, res) => {
  try {
    const admins = await Admin.find();
    res.status(200).json(admins);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// POST - Prisijungimo tikrinimas
router.post("/signin", async (req, res) => {
  try {
    const { email, password } = req.body;
    const admin = await Admin.findOne({ email });
    if (!admin) {
      return res.status(400).json({ message: "Tokio vartotojo nerasta" });
    }
    if (password !== admin.password) {
      return res.status(401).json({ message: "Neteisingas slaptažodis" });
    }
    res.status(200).json({ message: "Prisijungimas sėkmingas" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// POST - Sukurti adminą
router.post("/signup", async (req, res) => {
  try {
    const { firstname, lastname, email, password } = req.body;
    const newAdmin = new Admin({
      firstname,
      lastname,
      email,
      password,
    });
    await newAdmin.save();
    res.status(201).json(newAdmin);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
