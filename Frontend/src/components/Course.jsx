import React from 'react'
import Cards from '../components/Cards'
import list from '../../public/list.json'
import {Link} from 'react-router-dom'

const Course = () => {
  return (
    <>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 '>
        <div className='mt-28 items-center justify-center text-center'>
            <h1 className='text-2xl font-semibold md:text-4xl'>We Are Delighted To have You Here!:)</h1>
            <p className='mt-12'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, facilis cumque. Illum sapiente, provident quasi veniam voluptate rerum quidem omnis non inventore iste id dolor voluptates itaque voluptas, quas molestiae!</p>
           <Link to={'/'}><button className='mt-6 bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-700 duration-300'>Back</button></Link>

        </div>
        <div className='mt-12 grid grid-cols-1 md:grid-cols-4'>
            {list.map((item)=>(
                    <Cards key={item.id} item={item}/>
                ))
            }
        </div>
    </div>
    </>
  )
}

export default Course
