const mongoose = require('mongoose');

const journalEntrySchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  mood: { type: String, enum: ['happy', 'sad', 'neutral', 'angry', 'excited'], required: true },
  entry: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('JournalEntry', journalEntrySchema);

