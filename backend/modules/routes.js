const auth = require('../routes/auth');
const board = require('../routes/board');
const column = require('../routes/column');

const routes = (app) => {
  app.use('/api/auth', auth);
  app.use('/api/boards', board);
  app.use('/api/column', column);
};

module.exports = routes;
