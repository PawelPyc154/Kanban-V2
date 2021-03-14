const express = require('express');

const router = express.Router();
const { protect } = require('../middleware/auth');
const { reOrderColumn } = require('../controllers/column');

router.get('/reOrder', protect, reOrderColumn);

module.exports = router;
