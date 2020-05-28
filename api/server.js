"use strict";

require("./config/env.config");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");

const app = express();

app.set("port", process.env.PORT);
const corsOptions = {
    origin: "*",
};

app.use(cors(corsOptions));
app.use(morgan("dev"));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

const db = require("./models");
db.sequelize
    .sync()
    .then(() => {
        console.log("Database connected");
    })
    .catch((err) => {
        console.log("Something went wrong");
    });

app.use('/api', require('./routes/index'));

app.listen(app.get("port"), () => {
    console.log("Server is running on port: ", app.get("port"));
});
