'use strict';

const express = require('express');

module.exports = () => {
  const app = express();
  app.disable('x-powered-by');
  app.listen(process.env.PORT);
  return app;
};
