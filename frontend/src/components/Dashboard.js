import React, {useEffect, useState} from 'react'
import axios from 'axios';
import TodoForm from './todos/TodoForm'
import TodoLists from './todos/TodoLists'
function Dashboard() {
  
  
  
  const [userTodos, setUserTodos] = useState(null);
  //to get all todos

  const fetchUserTodos = async () => {
    const resp = await axios.get("/api/todo")

      if (resp.data.todos.length >0) {
        setUserTodos(resp.data.todos);
       
      }
}

useEffect(()=>{

  fetchUserTodos()
  return


}, []);

  
  return (
    <div className='flex flex-col items-center justify-center min-h-full mb-[3rem]'>
 
        <TodoForm fetchUserTodos={fetchUserTodos}  />
        <TodoLists fetchUserTodos={fetchUserTodos} setUserTodos ={setUserTodos} userTodos={userTodos} />
    </div>
  )
}

export default Dashboard