const express = require('express');
const routes = require('./routes');
const setupSwagger = require('../swagger/swagger')
const app = express();


app.use(express.json());
setupSwagger(app);

app.use('/api', routes);

module.exports = app;