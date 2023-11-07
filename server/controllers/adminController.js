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

// POST - Sukurti adminą
router.post("/create", async (req, res) => {
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
