import React, { useState } from 'react'
import { IoIosSearch, IoMdAddCircleOutline, IoMdClose } from "react-icons/io";
import { Link } from 'react-router-dom';

const Navbar = ({ onSearch }) => {
  const [searchValue, setSearchValue] = useState('');

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchValue(value);
    onSearch(value);
  };

  const handleClearSearch = () => {
    setSearchValue('');
    onSearch('');
  };

  return (
    <div className="flex mx-auto p-4 h-16 justify-between items-center bg-white shadow-md">
        {/*Nav bar left hand */}
      <div><p className='text-2xl font-bold'>Student Admin</p></div>
      {/*Nav bar middle */}
      <div className="relative flex items-center w-70 max-w-md mx-auto">
        <IoIosSearch className="absolute left-3 text-gray-400" size={20} />
        <input
          type="text"
          value={searchValue}
          onChange={handleSearchChange}
          placeholder="Search students..."
          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        {searchValue && (
          <button
            onClick={handleClearSearch}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
            aria-label="Clear search"
          >
            <IoMdClose size={20} />
          </button>
        )}
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
