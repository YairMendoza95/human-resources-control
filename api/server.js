"use strict";

require('./config/env.config');
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const morgan = require('morgan');

const app = express();

const corsOptions = {
    origin: ,
};

app.use(cors(corsOptions));
app.use(morgan());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));