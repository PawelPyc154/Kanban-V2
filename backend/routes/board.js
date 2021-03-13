const express = require('express');

const router = express.Router();
const { protect } = require('../middleware/auth');
const { add } = require('../controllers/board');

router.post('/add', protect, add);

module.exports = router;
