"use strict";
// const express = require('express');
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
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
var express_1 = __importDefault(require("express"));
var app = express_1.default();
app.get('/', function (req, res) {
    res.send('Well done!');
});
app.listen(5000, function () {
    console.log('The application is listening on port 5000!hgf');
});
