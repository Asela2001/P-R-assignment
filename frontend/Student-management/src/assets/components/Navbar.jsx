import React from 'react'
import { IoIosSearch, IoMdAddCircleOutline } from "react-icons/io";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="flex mx-auto p-4 h-16 justify-between items-center bg-white shadow-md">
        {/*Nav bar left hand */}
      <div><p className='text-2xl font-bold'>Student Admin</p></div>
      {/*Nav bar middle */}
      <div className="relative flex items-center w-70 max-w-md mx-auto">
        <IoIosSearch className="absolute left-3 text-gray-400" size={20} />
        <input
          type="text"
          placeholder="Search students..."
          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>
      {/*Nav bar right hand */}
      <div>
        <Link to="/create" className='flex gap-3 items-center p-2 rounded-md bg-blue-500 hover:bg-blue-600 border border-blue-700 text-white cursor-pointer'>
            <IoMdAddCircleOutline className='size-5' />
            <p className='text-base font-bold tracking-tight'>Add Student</p>
        </Link>
      </div>
    </div>
  )
}

export default Navbar
