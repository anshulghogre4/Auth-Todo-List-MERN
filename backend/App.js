require("dotenv").config();
require("./Config/database").ToDoDataBase();
const express = require("express");
const app = express();
const todoRouters = require("./Routes/todoRoutes");

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use("/",todoRouters);

module.exports =app;