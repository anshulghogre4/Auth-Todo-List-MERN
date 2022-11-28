require("dotenv").config();
require("./Config/database").ToDoDataBase();
const express = require("express");
const app = express();
const todoRouters = require("./Routes/todoRoutes");
const userRoutes = require("./Routes/userRoutes");
const cookieParser = require('cookie-parser');

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use("/",todoRouters);
app.use("/",userRoutes);
// app.use(cookieParser());

module.exports =app;