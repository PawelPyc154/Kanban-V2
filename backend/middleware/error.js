const ErrorResponse = require('../utils/errorResponse');
const capitalize = require('../utils/capitalize');

const errorHandler = (err, req, res) => {
  let error = { ...err };
  error.message = err.message;

  // Log to console for dev
  console.log(err);

  // Mongoose bad ObjectID
  if (err.name === 'CastError') {
    const message = `TODO not found with id of ${err.value}`;
    error = new ErrorResponse({ CastError: message }, 404);
  }

  // Mongoose duplicate key
  if (err.code === 11000) {
    const fieldName = Object.keys(err.keyValue)[0];
    const message = `${capitalize(fieldName)} is already used`;
    error = new ErrorResponse({ [fieldName]: message }, 400);
  }

  // Mongoose validation error
  if (err.name === 'ValidationError') {
    const message = Object.assign(
      {},
      ...Object.values(err.errors).map((val) => ({
        [val.path]: val.message,
      })),
    );

    error = new ErrorResponse(message, 400);
  }

  res.status(error.statusCode || 500).json({
    success: false,
    error: error.message || 'Server Error',
  });
};

module.exports = errorHandler;
