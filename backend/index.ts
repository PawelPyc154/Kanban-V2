// const express = require('express');

// const dotenv = require('dotenv');
// const cookieParser = require('cookie-parser');

// // middleware

// const errorHandler = require('./middleware/error');
// // modules
// const protect = require('./modules/protect');
// const routes = require('./modules/routes');
// const connectDB = require('./modules/db');
// const devHeplers = require('./modules/devHelpers');

// dotenv.config({ path: './config/config.env' });

// connectDB();

// let app = express();

// app.use(express.json()); // Json parser
// app.use(cookieParser()); // Cookie parser

// devHeplers(app);
// app = protect(app);

// routes(app);

// app.use(errorHandler);

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, console.log(`Server running on port ${PORT}  http://localhost:${PORT}/api`.yellow.bold));
import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send('Well done!');
});

app.listen(5000, () => {
  console.log('The application is listening on port 5000!');
});
