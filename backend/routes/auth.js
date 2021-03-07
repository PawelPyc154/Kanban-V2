const express = require('express');

const { register, login, getMe, updateDetails, logout } = require('../controllers/auth');

const router = express.Router();
const { protect } = require('../middleware/auth');

router.post('/register', register);
router.post('/login', login);
router.post('/logout', logout);
router.get('/me', protect, getMe);
router.get('/updateDetails', protect, updateDetails);

module.exports = router;
