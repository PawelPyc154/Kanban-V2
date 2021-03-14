const express = require('express');

const router = express.Router();
const { protect } = require('../middleware/auth');
const { addBoard, getBoards, getBoardById } = require('../controllers/board');

router.get('/all', protect, getBoards);
router.post('/add', protect, addBoard);
router.get('/:id', protect, getBoardById);

module.exports = router;
