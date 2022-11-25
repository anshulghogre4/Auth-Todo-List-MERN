const Todo = require("../Model/todoSchema");


//for home route
exports.home =  (req, res) =>{

    res.status(200).send("Welcome you all");
}

//to created Todo

exports.createTodo = async  (req, res) => {

    try {
        const {Title} = req.body;
 

        if (!Title) {
            alert("Please type the title!");
        }
        const todo = await Todo.create({
            Title
        });
        res.status(200).send(todo);
    } catch (error) {
        console.log(error)
        console.log("Error in ToDo Creation")
        res.send("Error in todo creation")
    }
}

