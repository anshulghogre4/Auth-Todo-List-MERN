const express = require('express')

const router = express.Router()
const { home, createTodo, getAllTodos, getATodo, editTodoTitle, deleteTodo, tasksForATodo, getAllTasksForATodo, editTaskForATodo, deleteTaskForATodo, toSearch, sortDateAndTime } = require("../Controllers/todoControllers");
const cookieParser = require('cookie-parser');
const auth = require("../middleware/auth")

router.get("/", home);
router.post("/api/todo/", auth, createTodo);
router.get("/api/todo", auth, getAllTodos);
router.get("/api/ATodo/:_id", auth, getATodo);
router.put("/api/editATodo/:_id", auth, editTodoTitle);
router.delete("/api/deleteATodo/:_id", auth, deleteTodo);
router.put("/api/insertTaskInTodo/:_id", auth, tasksForATodo);
router.get("/api/TaskInTodo/:_id", auth, getAllTasksForATodo);
router.put("/api/editTaskInTodo/:_id", auth, editTaskForATodo);
router.put("/api/deleteTaskInTodo/:_id", auth, deleteTaskForATodo);
router.get("/toSearch", auth, toSearch);
router.get("/sortByDateAndTime", auth, sortDateAndTime);


 module.exports = router;