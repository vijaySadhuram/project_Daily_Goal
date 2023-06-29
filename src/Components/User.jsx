import React from 'react'
import {useParams,useNavigate} from 'react-router-dom'

// use useParams& useNavigate react hook
const User = () => {
    const para=useParams();
    console.log(para.id)//to dynamic value of user
    // navigate to about page
    const navigation=useNavigate();
    // navigation("about");
  return (
    <div className='user'>User
    <br />
    <button onClick={(e)=>{
    navigation("/about")
    }}>Click Here</button>
    </div>
  )
}

export default User