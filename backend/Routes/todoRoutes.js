const express = require('express')

const router = express.Router()
const { home, createTodo, getAllTodos, getATodo, editTodoTitle, deleteTodo, tasksForATodo, getAllTasksForATodo, editTaskForATodo, deleteTaskForATodo, toSearch } = require("../Controllers/todoControllers");




router.get("/", home);
router.post("/createTodo", createTodo);
router.get("/getAllTodos", getAllTodos);
router.get("/getATodo/:_id", getATodo);
router.put("/editATodo/:_id", editTodoTitle);
router.delete("/deleteATodo/:_id", deleteTodo);
router.put("/addATaskInTodo/:_id", tasksForATodo);
router.get("/getAllTheTasksForATodo/:_id", getAllTasksForATodo);
router.put("/editTaskForATodo/:_id",editTaskForATodo);
router.put("/deleteTaskForATodo/:_id", deleteTaskForATodo);
router.get("/toSearch", toSearch);


 module.exports = router;