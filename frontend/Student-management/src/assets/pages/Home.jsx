import React, { useCallback, useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Stlist from '../components/Stlist'
import api from "../lib/axios.js";
import toast from 'react-hot-toast';
import { debounce } from 'lodash';

const Home = () => {
    const [students, setStudents] = useState([]);
    const [loading, setLoading] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');


    const fetchStudents = async (query = '') =>{
    try {
        const res = await api.get('/student', {
        params: { search: query },
      });
        console.log(res.data);
        setStudents(res.data);
        toast.success(query ? 'Search results loaded!' : 'Student data loaded!');
    } catch (error) {
        console.log("Error fetching studentData")
        toast.error("Error Loading student!");
    }
    finally{
        setLoading(false);
    }
    };
    
    const debouncedSearch = useCallback(
    debounce((value) => {
      setSearchQuery(value);
    }, 300),
    []
  );

    useEffect(() =>{
    fetchStudents(searchQuery);
    },[searchQuery])

    const handleDelete = async (id) => {
      if (!window.confirm("Are you sure you want to delete this student?")) return;
      try {
        await api.delete(`/student/${id}`);
        toast.success("student deleted successfully");
        fetchStudents();
    } catch (error) {
        console.error("Error deleting note:", error);
        toast.error("Fail to delete note");
    }
    }

  return (
    <div>
      <Navbar onSearch={debouncedSearch} />
      <div className='flex items-center justify-center p-5'>
        <p className='text-2xl font-bold'>Student List</p>
      </div>
        <Stlist students={students} ondelete={handleDelete} />
    </div>
  )
}

export default Home
