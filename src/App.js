import React from 'react'
import Header from './Components/Header'
import './Components/Header.css'
import Home from './Components/Home'
import './App.css'
import About from './Components/About'
import Contact  from './Components/Contact'
import {BrowserRouter,Route,Routes} from "react-router-dom"
import Footer  from './Components/Footer'
import User from './Components/User'
function App() {
  return (
   < BrowserRouter>
     
     <Header/>
     <Routes>
 
     <Route path='/' element={<Home/>}/>

     <Route path='/about12' element={<About/>}/>
     <Route path='/contact' element={<Contact/>}/>
     <Route path='/user/:123' element={<User/>}/>
     <Route path='/user/:asd' element={<Contact/>}/>
     


     </Routes>


    <Footer/>
     {/* <Home/>
     <About/>
     <Contact/>
      */}
    
    </BrowserRouter>
  )
}

export default App