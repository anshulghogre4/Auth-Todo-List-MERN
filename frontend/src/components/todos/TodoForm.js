import axios from 'axios';
import React, { useState } from 'react'

function TodoForm( {fetchUserTodos, BASE_URL} ) {

      const [title, setTitle] = useState("")
      const token = sessionStorage.getItem("token");
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`  
      console.log(title);

          

     const handleTitleSubmit = async (e) => {
      e.preventDefault();

      const data = {
        Title: title
      }

      const resp = await axios.post(`${BASE_URL}/api/todo/`, data)
        console.log(resp);
        setTitle("");
        fetchUserTodos();

     }


     





  return (
    <div className='flex flex-col items-center justify-center mt-[10rem]'>
       
       <form  onSubmit={handleTitleSubmit}   className='todoForm flex flex-col items-center justify-center  w-[50rem] h-[10rem] rounded-[1rem] bg-[#313131] mb-[3rem] '>
          
        <input type="text" placeholder="Enter your todo title" className='w-[30rem] m-[1rem] px-[1rem] rounded-[0.5rem] placeholder:italic  placeholder:relative placeholder:left-[0.1rem] placeholder:ml-4 h-[3rem] focus:outline-none focus:ring-[0.3rem] focus:ring-violet-700 ' 
        
        value={title}
        onChange= {(e)=> setTitle(e.target.value)}
        
        
        ></input>
        <button type='submit' className='text-[#242B2E] bg-[#CAD5E2] px-[3rem] py-[0.5em] rounded-[0.5rem] pointer-cursor font-bold active:bg-violet-700 active:text-white' >Submit</button>
       </form>

        
       


    </div>
  )
}

export default TodoForm