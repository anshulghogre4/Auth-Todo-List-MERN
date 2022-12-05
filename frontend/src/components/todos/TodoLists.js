import React from 'react'

function TodoLists() {
  return (
    <div className='shadow-md bg-slate-100/50  w-[50rem] mx-auto mt-[1rem]'>
      
      {/* TAB-1 */}
      <div className='overflow-hidden '>
        {/* title bar */}
        <label>
          <input className='opacity-0 peer' type="checkbox"/>
          <div className='flex flex-row items-center justify-between mx-[1rem]'>
          <div  className='flex flex-row items-center justify-between  '>
        <p className='p-[1.2rem] inline-block cursor-pointer'>Label One</p>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className=" cursor-pointer w-4 h-4 float-right peer-checked:rotate-180 ">
        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
        </div>

            <div  className='flex flex-row items-center justify-between mx-[1rem] space-x-[2rem]'>
          <button className='bg-gray-300 active:bg-gray-400 px-[0.8rem] rounded-[0.3rem]' >Edit</button>
          <button className='bg-red-300 active:bg-red-400 px-[0.8rem] rounded-[0.3rem]'>Delete</button>
          </div>
        </div>


              
        <div className='arrayTasks bg-slate-200/50 max-h-0 peer-checked:max-h-screen '>

                    {/* Adding Tasks inside title */}
            <div className='flex flex-row items-center justify-start ml-[1rem] h-[2.5] space-x-[1.5rem] '>
              <div>
              <input type="text" placeholder='Enter tasks' className='mt-[1.5rem] w-[30rem] h-[2.5rem] rounded-[0.3rem]  px-[1rem] focus:outline-none focus:ring-[0.1rem] focus:ring-gray-500 placeholder:italic  '/>
              </div>
              <div>
              <button className=' relative bg-gray-300 active:bg-gray-400 px-[0.8rem] rounded-[0.3rem] top-[0.8rem] '>Add</button>
              </div>
            </div>
              {/* Tasks inside title */}
         <div className=' flex flex-row items-center justify-between'>
          <div>
          <p className="p-[1.2rem]">This is the test content</p>
          </div>
          <div  className='flex flex-row items-center justify-between mr-[2rem] space-x-[2rem]'>
          <button className='bg-gray-300 active:bg-gray-400 px-[0.8rem] rounded-[0.3rem]' >Edit</button>
          <button className='bg-red-300  active:bg-red-400 px-[0.8rem] rounded-[0.3rem]'>Delete</button>
          </div>
          </div>

          </div>
        </label>
      </div>
      {/* TAB-1 Ended */}



       

    </div>
  )
}

export default TodoLists