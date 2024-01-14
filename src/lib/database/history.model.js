const { Schema, model, models } = require('mongoose');

export const HistorySchema = new Schema({
  createdAt: {
    type: Date,
    default: Date.now,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
  },
  fakultas: {
    type: String,
    
  },
  prodi: {
    type: String,
    
  },
  pesan: {
    type: String,
  },
});

const History = models.History || model('History', HistorySchema);

module.exports = History;
