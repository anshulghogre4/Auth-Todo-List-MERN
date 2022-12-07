import React from 'react'
import TodoForm from './todos/TodoForm'
import TodoLists from './todos/TodoLists'
function Dashboard() {
  return (
    <div className='flex flex-col items-center justify-center min-h-full mb-[3rem]'>
 
        <TodoForm/>
        <TodoLists/>
    </div>
  )
}

export default Dashboard