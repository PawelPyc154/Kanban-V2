const express = require('express');

// const dotenv = require("dotenv");
// const cookieParser = require("cookie-parser");
// const passport = require("passport");
// middleware
// const cors = require("cors");
// const errorHandler = require("./middleware/error");
// modules
// const protect = require("./modules/protect");
const routes = require('./modules/routes');
// const connectDB = require("./modules/db");
const devHeplers = require('./modules/devHelpers');

// dotenv.config({path: "./config/config.env"});

// connectDB();

const app = express();

// app.use(express.json()); // Json parser
// app.use(cookieParser()); // Cookie parser

devHeplers(app);
// app = protect(app);

// require("./modules/passport");

routes(app);

// app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server running on port ${PORT}  http://localhost:${PORT}/api`.yellow.bold));