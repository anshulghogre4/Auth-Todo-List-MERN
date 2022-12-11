require("dotenv").config();
require("./Config/database").ToDoDataBase();
const express = require("express");
const app = express();
const cors = require('cors');
const todoRouters = require("./Routes/todoRoutes");
const userRoutes = require("./Routes/userRoutes");
const cookieParser = require('cookie-parser');
const auth = require("./middleware/auth");

const corsOptions = {
    origin : function(origin , callback){
      return callback(null, true);
    },
    optionsSuccessStatus: 200,
    credentials: true,
    }

 
app.use(cors(corsOptions));
app.use(cookieParser())
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use("/", todoRouters);
app.use("/", userRoutes);
// app.use("/", userRoutes);


module.exports =app;