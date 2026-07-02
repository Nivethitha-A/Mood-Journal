const express = require("express");
const router = express.Router();

const {
  createJournal,
  getJournals,
  getJournalCount,
  updateJournal,
  deleteJournal,
  getSingleJournal
} = require("../controllers/journalController");

const authMiddleware = require("../middleware/authMiddleware");

// Create journal
router.post("/", authMiddleware, createJournal);

// Get all journals
router.get("/", authMiddleware, getJournals);

// Get journal count
router.get("/count", authMiddleware, getJournalCount);

// Get single journal (for editing)
router.get("/:id", authMiddleware, getSingleJournal);

// Edit journal
router.put("/:id", authMiddleware, updateJournal);

// Delete journal
router.delete("/:id", authMiddleware, deleteJournal);

module.exports = router;
