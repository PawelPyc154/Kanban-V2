const auth = require('../routes/auth');

const routes = (app) => {
  app.use('/', auth);
};

module.exports = routes;
