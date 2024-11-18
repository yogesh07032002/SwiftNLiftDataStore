import { Navigate, Route, Routes } from "react-router-dom"

import About from "./About/About.jsx"
import Contact from './components/Contact'
import Courses from './courses/Courses'
import Home from './home/Home.jsx'
// eslint-disable-next-line no-unused-vars
import React from 'react'
import Signup from './components/Signup'
import { Toaster } from 'react-hot-toast';
import Why from "./Why/why.jsx"
import { useAuth } from './components/context/AuthProvider'

const App = () => {
  const [authUser,setAuthUser]=useAuth();
        console.log(authUser)
  return (
    <>
   <div className='dark:bg-slate-900 dark:text-white' >
     
   <Routes >
      <Route path='/' element={<Home/>}></Route>
      <Route path='/course' element={authUser?<Courses/>:<Navigate to="/signup"/>}/>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/signup' element={<Signup/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>
      <Route path='/why' element={<Why/>}></Route>

    </Routes>
    <Toaster/>
   </div>
    
    </>
  )
}

export default App
