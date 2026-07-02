const Journal = require("../models/Journal");

// Create journal
exports.createJournal = async (req, res) => {
  try {
    const journal = await Journal.create({
      user: req.user.id,
      mood: req.body.mood,
      note: req.body.note
    });

    res.json(journal);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Failed to create journal" });
  }
};



// Get all journals
exports.getJournals = async (req, res) => {
  try {
    const journals = await Journal.find({ user: req.user.id }).sort({ createdAt: -1 });
    res.json(journals);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch journals" });
  }
};

// Journal count
exports.getJournalCount = async (req, res) => {
  try {
    const count = await Journal.countDocuments({ user: req.user.id });
    res.json({ count });
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch journal count" });
  }
};

// ⭐ UPDATE Journal
exports.updateJournal = async (req, res) => {
  try {
    const updated = await Journal.findOneAndUpdate(
      { _id: req.params.id, user: req.user.id },
      {
        mood: req.body.mood,
        note: req.body.note,
      },
      { new: true }
    );

    if (!updated) {
      return res.status(404).json({ message: "Journal not found" });
    }

    res.json(updated);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Failed to update journal" });
  }
};


// ⭐ DELETE Journal
exports.deleteJournal = async (req, res) => {
  try {
    const deleted = await Journal.findOneAndDelete({
      _id: req.params.id,
      user: req.user.id,
    });

    if (!deleted) {
      return res.status(404).json({ message: "Journal not found" });
    }

    res.json({ message: "Journal deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete journal" });
  }
};
// ⭐ GET Single Journal
exports.getSingleJournal = async (req, res) => {
  try {
    const journal = await Journal.findOne({
      _id: req.params.id,
      user: req.user.id
    });

    if (!journal) {
      return res.status(404).json({ message: "Journal not found" });
    }

    res.json(journal);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch journal" });
  }
};
