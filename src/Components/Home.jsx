import React, { useState } from 'react'
// import { useState } from 'react';
function Home() {
    const [color,setColor]=useState(0);
    // let inputValue=0;
    function incrementFun(){
       setColor(color + 1);
        
        console.log(color);

    }
    function decrementFun(){
        
        setColor(color - 1 );
        console.log(color);

    }
  
    
  return (

    
    <div className='mainContainer'>
   
   <form action="">
       <input type="text" name="" id="inputField"  
      //  onChange={
      //   (e)=>{
      //     // color=e.target.value
      //     console.log(e.target.value)

      //   }
      //  }
      value={color}
      readOnly
       />
    
         <button type="button" onClick={incrementFun} >+</button>
        <button type="button" onClick={decrementFun}>-</button> 
    </form>
     </div>   
    
  )
}

export default Home