const express = require('express');
const app = express();

app.use('/certification', require('./certification.routes'));
app.use('/type-certification', require('./type_certification.routes'));

module.exports = app;