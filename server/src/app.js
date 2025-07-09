const express = require('express');
const app = express();

const helloRoute = require('./routes/hello');
const errorHandler = require('./middleware/errorHandler'); // ✅ move this line up

app.use('/api', helloRoute);
app.use(errorHandler); // ✅ now this works fine

module.exports = app;

