const mongoose = require('mongoose');

const BoardSchema = new mongoose.Schema({
  title: {
    type: String,
    trim: true,
    required: [true, 'Nazwa jest wymagana'],
    max: [50, 'Zbyt długa nazwa'],
  },
  columnIds: [{ type: mongoose.Schema.ObjectId, ref: 'Column' }],
  createdAt: {
    type: Date,
    default: Date.now,
  },
  members: [
    {
      type: mongoose.Schema.ObjectId,
      ref: 'User',
      required: true,
    },
  ],
  addBy: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: true,
  },
});

module.exports = mongoose.model('Board', BoardSchema);
