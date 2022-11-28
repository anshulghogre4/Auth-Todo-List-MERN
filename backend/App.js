require("dotenv").config();
require("./Config/database").ToDoDataBase();
const express = require("express");
const app = express();
const todoRouters = require("./Routes/todoRoutes");
const userRoutes = require("./Routes/userRoutes");
const cookieParser = require('cookie-parser');
const auth = require("./middleware/auth");
app.use(cookieParser())

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use("/",auth,todoRouters);
app.use("/",userRoutes);


module.exports =app;