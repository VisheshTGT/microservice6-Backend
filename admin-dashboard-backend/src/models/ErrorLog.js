const mongoose = require('mongoose');

const errorSchema = new mongoose.Schema({
  timestamp: Date,
  message: String,
  service: String,
  metadata: mongoose.Schema.Types.Mixed
}, { timestamps: true });

module.exports = mongoose.model('ErrorLog', errorSchema);