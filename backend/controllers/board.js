const asyncHandler = require('../middleware/async');
const Board = require('../models/Board');
// const ErrorResponse = require('../utils/errorResponse');

exports.add = asyncHandler(async (req, res) => {
  req.body.addBy = req.user.id;
  req.body.members = [req.user.id];
  const board = await Board.create(req.body);

  res.status(201).json({ success: true, data: { board } });
});
exports.getMyBoards = asyncHandler(async (req, res) => {
  req.body.addBy = req.user.id;
  req.body.members = [req.user.id];
  const board = await Board.create(req.body);

  res.status(201).json({ success: true, data: { board } });
});
