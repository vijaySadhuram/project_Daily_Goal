import React from 'react'
import Header from './Components/Header'
import './Components/Header.css'
import Home from './Components/Home'
import './App.css'
import {BrowserRouter} from "react-router-dom"
function App() {
  return (
   < BrowserRouter>
    <div>

    <Header/>
     <Home/>
    </div>
    </BrowserRouter>
  )
}

export default App