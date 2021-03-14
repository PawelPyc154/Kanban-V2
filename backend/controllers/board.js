const asyncHandler = require('../middleware/async');
const Board = require('../models/Board');
const Column = require('../models/Column');
const Task = require('../models/Task');
const selectIds = require('../utils/selectIds');
// const ErrorResponse = require('../utils/errorResponse');

// @desc         Add Board
// @route        POST /api/boards/add
// @access       Private
exports.addBoard = asyncHandler(async (req, res) => {
  req.body.addBy = req.user.id;
  req.body.members = [req.user.id];

  const tasks = await Task.create([
    { title: 'Task 1', addBy: req.user.id },
    { title: 'Task 2', addBy: req.user.id },
  ]);

  const taskIds = selectIds(tasks);

  const columns = await Column.create([
    { title: 'Todo', addBy: req.user.id, tasks: taskIds },
    { title: 'In progress', addBy: req.user.id },
    { title: 'Done', addBy: req.user.id },
  ]);

  req.body.columns = selectIds(columns);

  const { _id, title } = await Board.create(req.body);

  res.status(201).json({ success: true, data: { board: { _id, title } } });
});

// @desc         Get all boards
// @route        POST /api/boards/add
// @access       Private
exports.getBoards = asyncHandler(async (req, res) => {
  const boards = await Board.find({ members: req.user.id }).select('title');

  res.status(200).json({ success: true, data: { boards } });
});

// @desc         Get board by id
// @route        POST /api/boards/:id
// @access       Private
exports.getBoardById = asyncHandler(async (req, res) => {
  const boardId = req.params.id;
  const board = await Board.findById(boardId).populate({
    path: 'columns',
    populate: { path: 'tasks' },
  });
  // .exec();

  // populate: {
  //   path: 'taskIds',
  // },
  res.status(200).json({ success: true, data: { board } });
});
