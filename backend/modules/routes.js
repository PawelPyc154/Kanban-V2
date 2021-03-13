const auth = require('../routes/auth');
const board = require('../routes/board');

const routes = (app) => {
  app.use('/api/auth', auth);

  app.use('/api/board', board);
};

module.exports = routes;
