const mongoose = require('mongoose');

const clientSchema = new mongoose.Schema({
  name: String,
  contactEmail: String,
  subscriptionPlan: String
}, { timestamps: true });

module.exports = mongoose.model('Client', clientSchema);