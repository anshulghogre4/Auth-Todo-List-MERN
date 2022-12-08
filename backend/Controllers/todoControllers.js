const Todo = require("../Model/todoSchema");
const auth = require("../middleware/auth");
const { default: mongoose, Mongoose } = require("mongoose");



//for home route
exports.home =  (req, res) =>{

    res.status(200).send("Welcome you all");
}

//to created Todo Title
exports.createTodo = async  (req, res) => {

        console.log("it came inside it")

    try {

        const userID = req.user.id;
        console.log(userID);

        if (!userID)  return res.status(401).send("User Not found!");
        
        console.log("existing user" + userID);

        const {Title} = req.body;
 

        if (!Title) {
            alert("Please type the title!");
        }
        const todo = await Todo.create({
            Title,
            userID

        });

        console.log(todo.createdAt);
      

        res.status(200).json({
            success : true,
            message: "Todo Created",
            todo
        })
    } catch (error) {
        console.log(error)
        console.log("Error in ToDo Creation")
        res.send("Error in todo creation")
    }
}

//Getting All Todos(Title)
exports.getAllTodos= async (req, res) => {

    try {

        const uID = req.user.id;
            console.log(uID);
        const todos = await Todo.find({userID : uID});
            console.log(todos);
        res.status(200).json({
            success : true,
            todos
        })

    } catch (error) {
        console.log(error);
        console.log("Failed to get all todos!");
        res.status(401).json({
            success : false,
            message : "Failed to get all todos!"
        });
    }
}

//getting specific todo title

exports.getATodo = async (req, res) =>{
    try {
        const uID = req.user.id;
        console.log(uID);
        const uniqueUser = await Todo.find({userID : uID});

        if ( uniqueUser) {
        const todoID = await Todo.findById(req.params._id); // pass todo id

        console.log(todoID);
         return res.status(200).json({
            success : true,
            todoID
        })
    }
    } catch (error) {
        console.log(error);
        console.log("Failed to get a todo!");
        res.status(401).json({
            success : false,
            message : "Failed to get a todo!"
        });
    }
}

//edit todo title
exports.editTodoTitle = async (req, res) => {
    try {
        const uID = req.user.id;
        console.log(uID);
        const uniqueUser = await Todo.find({userID : uID});

        if (uniqueUser) {
             
        const editedTodo = await Todo.findByIdAndUpdate(req.params._id, req.body);
                console.log(req.body);
            console.log(editedTodo)
           const savedTodo =  await editedTodo.save();
           console.log(savedTodo)
       return res.status(201).json({
            success : true,
            message :"Todo edited!",
        })}
    } catch (error) {
        console.log(error);
        console.log("Failed to edit a todo!");
        res.status(401).json({
            success : false,
            message : "Failed to edit a todo!"
        });
    }
   
}

//delete todo 
exports.deleteTodo= async (req, res) => {
    try {

        const uID = req.user.id;
        console.log(uID);
        const uniqueUser = await Todo.find({userID : uID});

        if (uniqueUser) {
        const deletedTodo = await Todo.findByIdAndDelete(req.params._id);
            console.log(deletedTodo)
      return res.status(201).json({
            success : true,
            message :"Todo deleted!"
        })}
    } catch (error) {
        console.log(error);
        console.log("Failed to delete a todo!");
        res.status(401).json({
            success : false,
            message : "Failed to delete a todo!"
        });
    }
   
}

//create task under a todo title
exports.tasksForATodo = async (req, res) =>{

    try {

        const uID = req.user.id;
        console.log(uID);
        const uniqueUser = await Todo.find({userID : uID});

        if (uniqueUser) {

        const todo = await Todo.findById(req.params._id);

        if (!todo) {
            return res.status(401).send("Todo doesn't exist!");}
    
            const taskToBeAdded = req.body.Tasks; //It'll acces the key of an Object and will return the value
                //use "Tasks" as key in postman
            console.log("--->",todo);
            todo.Tasks.push(taskToBeAdded);
            await todo.save();
            console.log("--->",todo);
           return  res.status(201).json({
                success : true,
                message : "Task added in your todo!",
                todo 
            })}
    } catch (error) {
        console.log(error);
        console.log("Failed to add a task!");
        res.status(401).json({
            success : false,
            message : "Failed to add a task!"
        })
    }
    
}
// Get all tasks for a specific todo title 
exports.getAllTasksForATodo = async (req, res) =>{

    try {

        const uID = req.user.id;
        console.log(uID);
        const uniqueUser = await Todo.find({userID : uID});

        if (uniqueUser) {

        const todo = await Todo.findById(req.params._id);

if (!todo) { res.status(401).send("Todo doesn't exisit");
}

                

        const tasks = todo.Tasks;

   return  res.status(201).json({
        success  : true,
        tasks,
        todo
    })}
    } catch (error) {
        console.log(error);
        console.log("Failed to show all tasks!");
        res.status(401).json({
            success : false,
            message : "Failed to show all tasks!"
        })
    }
}

//edit a task for a specific todo
exports.editTaskForATodo = async (req, res) => {
    try {

        const uID = req.user.id;
        console.log(uID);
        const uniqueUser = await Todo.find({userID : uID});

        if (uniqueUser) {
        const targetTodo = await Todo.findById(req.params._id);
        if (!targetTodo) {
            return res.status(401).send("Required todo doesn't exist");
        }

        //type key in the postman word to word
        const {taskIndex,newTaskText} = req.body;
       
        targetTodo.Tasks.splice(taskIndex,1,newTaskText);
        await targetTodo.save();
        return res.status(200).json({
            success : true,
            message : "Task edited!",
            targetTodo
        })}
    } catch (error) {
        console.log(error);
        console.log("Failed to edit task for required todo!");
        res.status(401).json({
            success : false,
            message : "Failed to edit task for required todo!"
        })
    }
}

//delete a task for a specific todo
exports.deleteTaskForATodo = async (req, res) => {
    try {
        const uID = req.user.id;
        console.log(uID);
        const uniqueUser = await Todo.find({userID : uID});

        if (uniqueUser) {
        const targetTodo = await Todo.findById(req.params._id);
    if (!targetTodo) {
        return res.status(401).send("Required todo doesn't exist");
    }
    const {taskToBeDeleted} = req.body;

    targetTodo.Tasks.splice(taskToBeDeleted,1); // index will be removed and entering nothing
    await targetTodo.save();
    console.log(targetTodo);
    return res.status(200).json({
        success :true,
        message :"Task got deleted",
        targetTodo
    })}

    } catch (error) {
        console.log(error);
        console.log("Failed to delete!");
        res.status(401).json({
            success : false,
            message : "Failed to delete!"
        })
    }
}

//to search task or title
exports.toSearch = async (req, res) =>{

    try {

        const uID = req.user.id;
        console.log(uID);
        const uniqueUser = await Todo.find({userID : uID});

        if (uniqueUser) {
        const {search} = req.query;
        console.log("-->",search);
        if (!search) {
          return  res.status(400).send("Please enter text to search!")
        }
    
        const searchedTodos = await Todo.find(  {  $and :[ {userID : uID},{$or : [{"Title": {$regex: search, $options:'i'}},{"Tasks": {$regex: search, $options:'i'}}]}]})
                console.log(searchedTodos);
                if (searchedTodos.length>0) {
                  return  res.status(200).json({
                        success :true,
                        searchedTodos
                    })
                } else {
                  return  res.status(200).json({
                        success :false,
                        message : "No such todo or task exist!"
                    })
                }
       }

    } catch (error) {
        console.log(error);
        console.log("Failed search");
        res.status(401).json({
            success : false,
            message : "Failed to search"
        })
    }
   


}


//to Sort according to date and time

exports.sortDateAndTime = async (req, res) =>{
    const uID = req.user.id;
    console.log(uID);
    const uniqueUser = await Todo.find({userID : uID});

    if (uniqueUser) {
    const sortedTodosAtCreation = await Todo.find({userID : uID}).sort({createdAt: -1});
    const sortedTodosAtUpdation = await Todo.find({userID : uID}).sort({updatedAt: -1});
        

    res.status(200).json({
        sortedTodosAtCreation,
        sortedTodosAtUpdation
    })}
}