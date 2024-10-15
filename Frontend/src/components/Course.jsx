import React, { useEffect, useState } from 'react'
import Cards from '../components/Cards'
import axios from 'axios'

import {Link} from 'react-router-dom'

const Course = () => {
  const [book,setBook]=useState([])
  useEffect(()=>{
    const getBook=async()=>{
      try {
        const res= await axios.get("http://localhost:4001/book");
        console.log(res.data)
        setBook(res.data)
      } catch (error) {
        console.log(error)
        
      }
    }
    getBook()

  },[])
  

  return (
    <>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4  '>
        <div className='mt-28 items-center justify-center text-center '>
            <h1 className='text-2xl font-semibold md:text-4xl mt-0'>We Are Delighted To have You Here!:)</h1>
            <p className='mt-12'>"At Swiftnlift IT TECH Training Institute, we offer comprehensive courses in <b>Java Full Stack, MERN, MEAN, Python Full Stack, Cloud Computing, Data Science, Machine Learning, Artificial Intelligence, and AWS </b> designed to equip you with the skills needed to thrive in the evolving tech landscape."</p>
           <Link to={'/'}><button className='mt-6 bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-700 duration-300'>Back</button></Link>

        </div>
        <div className='mt-12 grid grid-cols-1 md:grid-cols-4'>
            {book.map((item)=>(
                    <Cards key={item.id} item={item}/>
                ))
            }
        </div>
    </div>
    </>
  )
}

export default Course
