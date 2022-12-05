import React from 'react'

function TodoForm() {
  return (
    <div className='flex flex-col items-center justify-center mt-[10rem]'>
       
       <form className='todoForm flex flex-col items-center justify-center  w-[50rem] h-[10rem] rounded-[1rem] bg-[#313131] mb-[3rem] '>
          
        <input type="text" placeholder="Enter your todo title" className='w-[30rem] m-[1rem] px-[1rem] rounded-[0.5rem] placeholder:italic  placeholder:relative placeholder:left-[0.1rem] placeholder:ml-4 h-[3rem] focus:outline-none focus:ring-[0.3rem] focus:ring-violet-700 '  ></input>
        <button type='submit' className='text-[#242B2E] bg-[#CAD5E2] px-[3rem] py-[0.5em] rounded-[0.5rem] pointer-cursor font-bold active:bg-violet-700 active:text-white' >Submit</button>
       </form>

        <form className='todoForm flex flex-row items-center justify-between border-sold border-2 w-[50rem] h-[5rem] rounded-[1rem] bg-[white] mb-[1rem] ' >
          <div>
        <input type="text" placeholder="Enter to search" className='w-[10rem] m-[1rem] px-[1rem] rounded-[0.5rem] border-sold border-2 placeholder:italic  placeholder:relative placeholder:left-[0.1rem] placeholder:ml-4 h-[3rem] focus:outline-none focus:ring-[0.3rem] focus:ring-violet-700 '  ></input>
        <button type='submit' className='text-[#242B2E] bg-[#CAD5E2] px-[3rem] py-[0.5em] rounded-[0.5rem] pointer-cursor font-bold active:bg-violet-700 active:text-white' >Search</button>
        </div>

        <div className='flex flex-row items-center justify-center space-x-4 mr-[1rem]'>
          <p>
            Sort 
          </p> 
          <select  className=' rounded-[0.5rem]  border-solid border-2 border-bg-gray-300' name="sorting" id="sort">
    <option   value="">Select Option</option>
    <option value="creation"> By Creation</option>
    <option value="updation">By Updation</option>
    </select>
        </div>


        </form>
       


    </div>
  )
}

export default TodoForm