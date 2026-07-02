const express = require("express");
const router = express.Router();
const auth = require("../middleware/authMiddleware");
const User = require("../models/User");
const Journal = require("../models/Journal");  // ⭐ Add this

// Get logged-in user details + journal count
router.get("/me", auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");

    const journalCount = await Journal.countDocuments({ user: req.user.id });

    res.json({
      name: user.name,
      email: user.email,
      createdAt: user.createdAt,   // ⭐ Will work only if timestamps: true
      journalCount: journalCount,  // ⭐ Add this
    });
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
