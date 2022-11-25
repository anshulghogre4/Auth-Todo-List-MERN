require("dotenv").config();
require("./Config/database").ToDoDataBase();

const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

exports.module =app;