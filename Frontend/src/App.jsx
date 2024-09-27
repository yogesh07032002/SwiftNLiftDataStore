import React from 'react'
import Home from './Home/Home'
import { Route, Routes } from "react-router-dom"
import Courses from './courses/Courses'
import Signup from './components/Signup'
import Contact from './components/Contact'


const App = () => {
  return (
    <>
   <div >
     
   <Routes >
      <Route path='/' element={<Home/>}></Route>
      <Route path='/course' element={<Courses/>}></Route>
      <Route path='/signup' element={<Signup/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>

    </Routes>
   </div>
    
    </>
  )
}

export default App
