const express = require('express')

const router = express.Router()
const { home, createTodo, getAllTodos, getATodo, editTodoTitle, deleteTodo, tasksForATodo, getAllTasksForATodo, editTaskForATodo, deleteTaskForATodo, toSearch, sortDateAndTime } = require("../Controllers/todoControllers");
const cookieParser = require('cookie-parser');
const auth = require("../middleware/auth")

router.get("/api", home);
router.post("/api/todo/", createTodo);
router.get("/api/todo", getAllTodos);
router.get("/api/ATodo/:_id", getATodo);
router.put("/api/editATodo/:_id", editTodoTitle);
router.delete("/api/deleteATodo/:_id", deleteTodo);
router.put("/api/insertTaskInTodo/:_id", tasksForATodo);
router.get("/api/TaskInTodo/:_id", getAllTasksForATodo);
router.put("/api/editTaskInTodo/:_id", editTaskForATodo);
router.put("/api/deleteTaskInTodo/:_id", deleteTaskForATodo);
router.get("/toSearch", toSearch);
router.get("/sortByDateAndTime", sortDateAndTime);


 module.exports = router;