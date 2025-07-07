const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
  transactionId: String,
  client: { type: mongoose.Schema.Types.ObjectId, ref: 'Client' },
  receiptNumber: String,
  amount: Number,
  date: Date,
  status: { type: String, enum: ['Success', 'Failed', 'Pending'] }
}, { timestamps: true });

module.exports = mongoose.model('Transaction', transactionSchema);