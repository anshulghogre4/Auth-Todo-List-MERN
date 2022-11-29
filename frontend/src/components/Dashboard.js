import React from 'react'
import TodoForm from './todos/TodoForm'
import TodoLists from './todos/TodoLists'
function Dashboard() {
  return (
    <div>
        <TodoForm/>
        <TodoLists/>
    </div>
  )
}

export default Dashboard