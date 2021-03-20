const express = require('express');

const router = express.Router();
const { protect } = require('../middleware/auth');
const { reorderColumn } = require('../controllers/column');

router.put('/reorder', reorderColumn);

module.exports = router;
