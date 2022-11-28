const express = require('express')

const router = express.Router()
const { home, createTodo, getAllTodos, getATodo, editTodoTitle, deleteTodo, tasksForATodo, getAllTasksForATodo, editTaskForATodo, deleteTaskForATodo, toSearch, sortDateAndTime } = require("../Controllers/todoControllers");

var cookieParser = require('cookie-parser');
const auth = require('../middleware/auth');
router.use(cookieParser())

router.get("/api", home);
router.post("/api/todo/", auth, createTodo);
router.get("/api/todo",auth, getAllTodos);
router.get("/api/ATodo/:_id", getATodo);
router.put("/api/ATodo/:_id", editTodoTitle);
router.delete("/api/ATodo/:_id", deleteTodo);
router.put("/api/TaskInTodo/:_id", tasksForATodo);
router.get("/api/tasksInTodo/:_id", getAllTasksForATodo);
router.put("/api/TaskInTodo/:_id",editTaskForATodo);
router.put("/api/TaskInTodo/:_id", deleteTaskForATodo);
router.get("/toSearch", toSearch);
router.get("/sortByDateAndTime", sortDateAndTime);


 module.exports = router;