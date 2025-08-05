import React from 'react'
import { IoMdAddCircleOutline } from "react-icons/io";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="flex mx-auto p-4 h-16 justify-between items-center bg-white shadow-md">
        {/*Nav bar left hand */}
      <div><a className='text-2xl font-bold'>Student Admin</a></div>
      {/*Nav bar right hand */}
      <div>
        <Link to="/create" className='flex gap-3 items-center p-2 rounded-md bg-blue-500 hover:bg-blue-600 border border-blue-700 text-white cursor-pointer' onClick={'/create'}>
            <IoMdAddCircleOutline className='size-5' />
            <p className='text-base font-bold tracking-tight'>Add Student</p>
        </Link>
      </div>
    </div>
  )
}

export default Navbar
