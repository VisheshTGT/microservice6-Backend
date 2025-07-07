const User = require('../models/User');
const Client = require('../models/Client');
const Transaction = require('../models/Transaction');
const ErrorLog = require('../models/ErrorLog');

exports.getDashboardData = async (req, res) => {
  try {
    const [totalUsers, totalClients, totalReceipts, totalErrors] = await Promise.all([
      User.countDocuments(),
      Client.countDocuments(),
      Transaction.countDocuments(),
      ErrorLog.countDocuments()
    ]);

    const recentTransactions = await Transaction.find()
      .sort({ date: -1 })
      .limit(5)
      .populate('client', 'name');

    const recentErrors = await ErrorLog.find()
      .sort({ timestamp: -1 })
      .limit(5);

    const chartData = await Transaction.aggregate([
      { $group: { _id: '$status', count: { $sum: 1 } } }
    ]);

    res.json({
      totalUsers,
      totalClients,
      totalReceipts,
      totalErrors,
      recentTransactions,
      recentErrors,
      chartData
    });
  } catch (err) {
    res.status(500).json({ message: 'Dashboard error', error: err.message });
  }
};