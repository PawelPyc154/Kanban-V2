const asyncHandler = require('../middleware/async');
const Board = require('../models/Board');
// @desc         Get board by id
// @route        POST /api/boards/:id
// @access       Private
exports.reorderColumn = asyncHandler(async (req, res) => {
  const { boardId, columnId, fromIndex, toIndex } = req.body;

  const board = await Board.findById(boardId);

  const { columns } = board;

  columns.splice(fromIndex, 1);
  columns.splice(toIndex, 0, columnId);

  board.columns = columns;

  const board2 = await board.save().then((board22) =>
    board22
      .populate({
        path: 'columns',
        populate: { path: 'tasks' },
      })
      .execPopulate(),
  );

  res.status(200).json(board2);
});
