import axios from 'axios';
import React, { useEffect, useState } from 'react'

function TodoLists({fetchUserTodos , userTodos, setUserTodos, BASE_URL}) {

  
  const [tasks, setTasks] = useState("");
  const [search, setSearch] = useState("");
  const token = sessionStorage.getItem("token");
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`


  useEffect(()=>{
    if ( search.length===0 ) {
     fetchUserTodos()
      return
       }

  }, [search]);

      
  
       

      //for Title edit 

      const handleEditTitle = async (user) => {
        const newTitle = prompt("Enter New Title");

        if(!newTitle){
          alert("Please enter new tile to change current title.")
        }else{
          const resp = await axios.put(`${BASE_URL}/api/editATodo/${user._id}`,{
            Title : newTitle
          } )
          fetchUserTodos();
          console.log(resp);
        }

      }

        // to delete title

          const handleDeleteTitle= async (user) => {
              const resp = await axios.delete(`${BASE_URL}/api/deleteATodo/${user._id}`)
              console.log(resp);
              fetchUserTodos();
          };

            //to create a task inside the specific todo
           
                
            console.log(tasks)
            const  handdleTasksForTitle = async (title) =>{
                 

                    if (tasks === "")
                     {return alert("enter a task")}

                  
                  
                    const data = {
                    Tasks:tasks
                  }

                  const resp = await axios.put(`${BASE_URL}/api/insertTaskInTodo/${title}`,data)
                    console.log(resp.data.todo.Tasks);
                    setTasks("");
                    fetchUserTodos()
            }

            // //getting all tasks for the title
            //   const [titleTasks, setTitleTasks] = useState(null)

            // const getTasksForTitle  = async (props) =>{

            //   const resp = await axios.get(`/api/TaskInTodo/${props}`)

            //     console.log("checking all tasks",resp)
               
            //   if (resp.data.todo.Tasks.length >0) {
            //     setTitleTasks(resp.data.todo);
            //   }
            // }
            

            //editing a task in todo title
            const handleEditTaskForTitle = async (user,index) => {
              const newTask = prompt("Enter New task");
      
              if(!newTask){
                alert("Please enter new task to change current task.")
              }else{
                const resp = await axios.put(`${BASE_URL}/api/editTaskInTodo/${user._id}`,{
                  taskIndex:index,
                  newTaskText : newTask
                } )
                console.log(resp);
                fetchUserTodos()

              }
      
            }


              //deleting a task for a specific todo title
              const handleDeleteTaskForTitle= async (user,index) => {
                const resp = await axios.put(`${BASE_URL}/api/deleteTaskInTodo/${user._id}`,{
                  taskToBeDeleted : index
                })
                console.log(resp);
                fetchUserTodos()
            };

                //Searching todo or title

      

      
         const submitSearch = async () =>{

          try {
            const resp = await axios.get(`${BASE_URL}/toSearch`,{
              params:{
                search
              } }   )
  
              console.log("searching... " ,resp);
  
                //this is not working
              if (resp.data.message=== "No such todo or task exist!" ) {
               
                   alert("Searched todo or task dosen't exist!")
                   setSearch("");
                   fetchUserTodos();
              }
  
              if (search === "" ) {
                alert("please type to search")
                
           }
  
             setUserTodos(resp.data.searchedTodos)
          } catch (error) {
            console.log(error);
            alert("please type to search");
          }
         

         }

       const handleSearch = async (e) => {
                e.preventDefault()
                submitSearch();
                


       }

      //sort by creation

       const [creationDate, setCreationDate] = useState(null);

       const todoCreationDate = async () => {

        const resp = await axios.get(`${BASE_URL}/sortByDateAndTime`);
        console.log("sort by creation",resp.data.sortedTodosAtCreation);
          setUserTodos(resp.data.sortedTodosAtCreation);
          setCreationDate(resp.data.sortedTodosAtCreation)
       }

    

       const [updationDate, setUpdationDate] = useState(null);
        //sort by updation
       const todoUpdationDate = async () => {

        const resp = await axios.get(`${BASE_URL}/sortByDateAndTime`);
        console.log("sort by updation",resp.data.sortedTodosAtUpdation);
          setUserTodos(resp.data.sortedTodosAtUpdation);
          setUpdationDate(resp.data.sortedTodosAtUpdation);
       }

           


  return (

    <div>
      <form className='todoForm flex flex-row items-center justify-between border-sold border-2 w-[50rem] h-[5rem] rounded-[1rem] bg-[white] mb-[1rem]  'onSubmit={handleSearch} >
    <div>
  <input type="text" placeholder="Enter to search" className='w-[10rem] m-[1rem] px-[1rem] rounded-[0.5rem] border-sold border-2 placeholder:italic  placeholder:relative placeholder:left-[0.1rem] placeholder:ml-4 h-[3rem] focus:outline-none focus:ring-[0.3rem] focus:ring-violet-700 '
    value={search}
  onChange={(e)=>{setSearch(e.target.value)}}
  ></input>
  <button type='submit' className='text-[#242B2E] bg-[#CAD5E2] px-[3rem] py-[0.5em] rounded-[0.5rem] pointer-cursor font-bold active:bg-violet-700 active:text-white'  >Search</button>
  </div>

  <div className='flex flex-row items-center justify-center space-x-4 mr-[1rem]'>
    <p>
      Sort 
    </p> 
    {/* <select onChange={}  value={}  className=' rounded-[0.5rem]   border-solid border-2 border-bg-gray-300' name="sorting" id="sort">
<option   value="">Select Option</option>
<option value="creation"   > By Creation</option>
<option value="updation">By Updation</option>
</select> */}
    <button type='button' className='text-[#242B2E] bg-[#CAD5E2] px-[1rem] py-[0.5em] rounded-[0.5rem] pointer-cursor font-bold active:bg-violet-700 active:text-white'  onClick={todoCreationDate}  >by creation</button>
    <button type='button' className='text-[#242B2E] bg-[#CAD5E2] px-[1rem] py-[0.5em] rounded-[0.5rem] pointer-cursor font-bold active:bg-violet-700 active:text-white'  onClick={todoUpdationDate}  >by updation</button>
  </div>


  </form>



    <div className='shadow-md bg-slate-100/50  w-[50rem] mx-auto mt-[1rem]'>

      
      {userTodos && userTodos.map((user)=>{
          
       return <div className='overflow-hidden '>
      {/* title bar */}
      
      <label>
        <input className='opacity-0 peer' type="checkbox"/>
        <div className='flex flex-row items-center justify-between  mx-[1rem]'>
        <div  className='flex flex-row items-center justify-between  '>
      <p className='p-[1.2rem] inline-block cursor-pointer' key={user._id} >{user.Title}</p>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className=" cursor-pointer w-4 h-4 float-right peer-checked:rotate-180 ">
      <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
      </svg>
      </div>

          <div  className='flex flex-row items-center justify-between mx-[1rem] space-x-[2rem]'>
        <button className='bg-gray-300 active:bg-gray-400 px-[0.8rem] rounded-[0.3rem]'
              
          onClick={()=>{handleEditTitle(user)}}
         
        >Edit</button>
        <button className='bg-red-300 active:bg-red-400 px-[0.8rem] rounded-[0.3rem]' 
          onClick={()=>{
            handleDeleteTitle(user)
          }}
        
        >Delete</button>
        </div>
      </div>


          {/* task Section under title */}
      <div className='arrayTasks bg-slate-200/50 max-h-0 peer-checked:max-h-screen '>

                  {/* Adding Tasks inside title */}
          <div className='flex flex-row items-center justify-start ml-[1rem] h-[2.5] space-x-[1.5rem] '>
            <div>
            <input type="text" placeholder='Enter tasks' className='mt-[1.5rem] w-[30rem] h-[2.5rem] rounded-[0.3rem]  px-[1rem] focus:outline-none focus:ring-[0.1rem] focus:ring-gray-500 placeholder:italic  '
            value={tasks}
            onChange={(e)=>{setTasks(e.target.value)}}
            
            />
            </div>
            <div>
            <button   type='button' onClick={()=>handdleTasksForTitle(user._id)}   className=' relative bg-gray-300 active:bg-gray-400 px-[0.8rem] rounded-[0.3rem] top-[0.8rem] ' >Add</button>
            </div>
          </div>
            {/* Tasks inside title */}
                   
                   { user.Tasks.map((tasks,index)=>{
                return (<div className=' flex flex-row items-center justify-between'>
             <div>
             <p className="p-[1.2rem]" key={user._id} >{tasks}</p>
             </div>
             <div  className='flex flex-row items-center justify-between mr-[2rem] space-x-[2rem]'>
             <button className='bg-gray-300 active:bg-gray-400 px-[0.8rem] rounded-[0.3rem]' onClick={()=>{handleEditTaskForTitle(user,index)}}  >Edit</button>
             <button className='bg-red-300  active:bg-red-400 px-[0.8rem] rounded-[0.3rem]' onClick={()=>{
              handleDeleteTaskForTitle(user,index)}}  >Delete</button>
             </div>
             </div>)
                })}
             
          
      

        </div>
      </label>
    </div>
    
      })}
      



       
      </div>
    </div>
  )
}

export default TodoLists