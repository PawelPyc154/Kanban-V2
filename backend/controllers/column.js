const asyncHandler = require('../middleware/async');

// @desc         Get board by id
// @route        POST /api/boards/:id
// @access       Private
exports.reOrderColumn = asyncHandler(async (req, res) => {
  console.log(req);
  //   const boardId = req.params.id;
  //   const board = await Board.findById(boardId).populate({
  //     path: 'columns',
  //     populate: { path: 'tasks' },
  //   });
  // .exec();

  // populate: {
  //   path: 'taskIds',
  // },
  res.status(200).json({ success: true, data: null });
});
