const mongoose = require('mongoose');

const ColumnSchema = new mongoose.Schema({
  title: {
    type: String,
    trim: true,
    required: [true, 'Nazwa jest wymagana'],
    max: [50, 'Zbyt długa nazwa'],
  },

  tasks: [{ type: mongoose.Schema.ObjectId, ref: 'Task' }],
  createdAt: {
    type: Date,
    default: Date.now,
  },
  addBy: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: true,
  },
});

module.exports = mongoose.model('Column', ColumnSchema);
