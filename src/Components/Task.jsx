import React from 'react'

const Task = ({title,description}) => {
  return (
    <div className='task'>
        <div>
        <p>{title}</p>
        <span>{description}</span>
        
        </div>
        <button type="button" id ="deletbtn">-</button>

    </div>
  )
}

export default Task