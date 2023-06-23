import React from 'react'

const Task = ({title,description,deletetask,index}) => {
  return (
    <div className='task'>
        <div>
        <p>{title}</p>
        <span>{description}</span>
        
        </div>
        <button type="button" id ="deletbtn" onClick={()=>deletetask(index)
        }>-</button>

    </div>
  )
}

export default Task