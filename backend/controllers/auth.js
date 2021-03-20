const asyncHandler = require('../middleware/async');
const ErrorResponse = require('../utils/errorResponse');

const User = require('../models/User');

// Get token from model, create cookie and send response
const sendTokenResponse = (user, statusCode, res) => {
  // Create token
  const token = user.getSignedJwtToken();
  const options = {
    expires: new Date(Date.now() + process.env.JWT_COOKIE_EXPIRE * 24 * 60 * 60 * 1000),
    httpOnly: false, // cookie only in server
    sameSite: false,
    secure: false,
  };
  // if (process.env.NODE_ENV === 'production' || process.env.VERCEL_ENV === 'production') {
  options.select = true;
  options.sameSite = 'none';
  options.httpOnly = true;
  // }

  res.status(statusCode).cookie('token', token, options).json({ success: true });
};

// @desc         Register user
// @route        POST /api/auth/register
// @access       Public
exports.register = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;

  // Create user
  if (!email) {
    return next(new ErrorResponse({ email: 'Please add an email' }, 400));
  }
  if (!password) {
    return next(new ErrorResponse({ password: 'Please add a password' }, 400));
  }

  const user = await User.create({
    email,
    password,
  });
  return sendTokenResponse(user, 200, res);
});

// @desc         Register or login with facebook or google
// @route        POST /api/auth/facebook/token
// @route        POST /api/auth/google/token
// @access       Public
// exports.loginRegisterFbGoogle = asyncHandler(async (req, res, next) => {
//   const user = await User.findOne({ email: req.user._json.email });
//   if (user) {
//     return sendTokenResponse(user, 200, res);
//   }
//   const newUser = await User.create({
//     name: req.user.displayName,
//     email: req.user._json.email,
//   });
//   if (newUser) {
//     return sendTokenResponse(newUser, 200, res);
//   }
// });

// @desc         Login user
// @route        POST /api/auth/login
// @access       Public
exports.login = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;
  // validate email & password

  if (!email) {
    return next(new ErrorResponse({ email: 'Email jest wymagany' }, 400));
  }
  if (!password) {
    return next(new ErrorResponse({ password: 'Hasło jest wymagane' }, 400));
  }
  // check for user
  const user = await User.findOne({ email }).select('+password');
  if (!user) {
    return next(
      new ErrorResponse(
        {
          email: 'Nieprawidlowe dane logowania',
          password: 'Nieprawidlowe dane logowania',
        },
        401,
      ),
    );
  }
  // Check if password matches
  const isMatch = await user.matchPassword(password);
  if (!isMatch) {
    return next(
      new ErrorResponse(
        {
          email: 'Nieprawidlowe dane logowania',
          password: 'Nieprawidlowe dane logowania',
        },
        401,
      ),
    );
  }
  return sendTokenResponse(user, 200, res);
});

// @desc         Get current logged in user
// @route        POST /api/auth/me
// @access       Private
exports.getMe = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user.id).select('email');
  res.status(200).json(user);
});

// @desc         Logout clear cookie
// @route        get /api/auth/logout
// @access       Private
exports.logout = asyncHandler(async (req, res) => {
  res
    .status(200)
    .cookie('token', 'none', {
      expires: new Date(Date.now() + 10 * 1000),
      httpOnly: true,
    })
    .json({ success: true });
});

// @desc         Update user detils
// @route        PUT /api/auth/updatedetails
// @access       Private
exports.updateDetails = asyncHandler(async (req, res) => {
  const fieldsToUpdate = { name: req.body.name, email: req.body.email };
  const user = await User.findByIdAndUpdate(req.user.id, fieldsToUpdate, {
    new: true,
    runValidators: true,
  });
  res.status(200).json({ success: true, user });
});
