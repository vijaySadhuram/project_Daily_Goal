import React, { useEffect, useState } from 'react'
import Task from './Task'

function Home() {
  const initiArray=localStorage.getItem("tasks") ? JSON.parse(localStorage.getItem("tasks")) :
 [];  
const[tasks,setTasks]=useState(initiArray);
  const[title,setTitle]=useState("");
  const[description,setDescription]=useState("");
  // console.log(description);
console.log(tasks);
  
const submitHandler=(e)=>{
  e.preventDefault();
  setTasks([...tasks,{ title,description }]);
  // localStorage.setItem("tasks",JSON.stringify(tasks));
  setTitle("");
  setDescription("")


}

const deletetask=(index)=>{
  const filterArray=tasks.filter((item,ind)=>{
    return ind!==index;

  })
  console.log(filterArray);
  setTasks(filterArray)
}
// console.log(Title);

useEffect(() => {
  
  localStorage.setItem("tasks",JSON.stringify(tasks))
 
}, [tasks])

    
  return (
    <div className='mainContainer'>
      <h1>DAILY GOALS</h1>
      <form onSubmit={
        submitHandler
      }>
      <input type="text" name="" id="" placeholder='Enter Title Here' value={title} onChange={(e)=>setTitle(e.target.value)}
   />
      <textarea name="" id="" placeholder='Add Description Here' value={description} onChange={(e)=>setDescription(e.target.value)}></textarea>

      <button type="submit">ADD</button>

      </form>
     
      {
        tasks.map((item,index)=>(
         <Task key={index}  title={item.title} description={item.description} deletetask={deletetask} index={index} />
        ))
      }
        
     {/* <Task/> */}
      
  
     </div>   
  )
}

export default Home