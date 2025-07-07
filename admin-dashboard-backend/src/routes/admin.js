const express = require('express');
const { protect, restrictTo } = require('../middleware/auth');
const { getAllUsers, getUser, updateUser, deleteUser } = require('../controllers/admin');
const { getDashboardData } = require('../controllers/dashboard');
const router = express.Router();

router.use(protect, restrictTo('admin'));

router.get('/users', getAllUsers);
router.get('/users/:id', getUser);
router.put('/users/:id', updateUser);
router.delete('/users/:id', deleteUser);
router.get('/dashboard', getDashboardData);

module.exports = router;