import React, { useEffect, useState } from 'react'
import { TiArrowBackOutline } from "react-icons/ti";
import { GoTrash } from "react-icons/go";
import api from '../lib/axios';
import { Link, useNavigate, useParams } from 'react-router-dom';
import toast from 'react-hot-toast';

const Student = () => {
  const [student, setStudent] = useState([]);
  const [loading, setLoading] = useState(false);

  const {id} = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchStudent = async () => {
      try {
        const res = await api.get(`/student/${id}`);
        setStudent(res.data);
        toast.success("Student Load Successfully!");
      } catch (error) {
        console.log("Error Get student Details");
        toast.error("Error Loading Student!");
      } finally {
        setLoading(false);
      }
    }
    fetchStudent();
  }, [id])

  const handleUpdate = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await api.put(`/student/${id}`, student);
      toast.success("Student Update Successfully!");
      navigate('/');
    } catch (error) {
      console.log("Error update Student");
      toast.error("Error Updating Student!");
    }finally {
      setLoading(false);
    }
  }

  const handleDelete = async (id) => {
      if (!window.confirm("Are you sure you want to delete this student?")) return;
      try {
        await api.delete(`/student/${id}`);
        toast.success("student deleted successfully");
        navigate('/');
    } catch (error) {
        console.error("Error deleting note:", error);
        toast.error("Fail to delete note");
    }
    }

  return (
    <div>
          <div className='flex justify-between px-10 py-5 bg-white shadow-md'>
            <Link to="/" className='flex justify-center items-center gap-2 p-1 bg-blue-500 hover:bg-blue-600 border border-blue-700 text-white cursor-pointer'>
              <TiArrowBackOutline />
              <p>HOME</p>
            </Link>
            <div className='flex justify-center items-center gap-2 p-1 bg-red-500 hover:bg-red-600 border border-blue-700 text-white font-bold cursor-pointer' onClick={() => handleDelete(student._id)}>
              <GoTrash />
              <p>DELETE</p>
            </div>
          </div>
          <div className='flex justify-center items-center py-5 font-bold text-2xl'>
            <p>Student Details</p>
          </div>
          <div className='bg-white rounded-lg shadow-md border border-gray-200 p-10 mx-auto max-w-4xl my-10'>
            <form className='space-y-3' onSubmit={handleUpdate} >
          <label className='block text-sm font-medium text-gray-700 mb-1'>
            Name
          </label>
          <input type='text' className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500' placeholder='Enter Student name' onChange={(e) => setStudent({...student, name : e.target.value})} value={student.name} />
          <label className='block text-sm font-medium text-gray-700 mb-1'>
            Email
          </label>
          <input type='email' className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder='Enter Student email' onChange={(e) => setStudent({...student, email : e.target.value})} value={student.email} />
          <label className='block text-sm font-medium text-gray-700 mb-1'>
            Telephone
          </label>
          <input type='text' className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder='Enter Student Telephone' onChange={(e) => setStudent({...student, telephone : e.target.value})} value={student.telephone} />
          <label className='block text-sm font-medium text-gray-700 mb-1'>
            Stream
          </label>
          <input type='text' className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" onChange={(e) => setStudent({...student, stream : e.target.value})} value={student.stream} />
          <label className='block text-sm font-medium text-gray-700 mb-1'>
            Course
          </label>
          <input type='text' className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" onChange={(e) => setStudent({...student, course : e.target.value})} value={student.course} />
          <label className='block text-sm font-medium text-gray-700 mb-1'>
            Grade
          </label>
          <input type='number' min="12" max="13" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" onChange={(e) => setStudent({...student, grade : e.target.value})} value={student.grade} />
          <button type='submit' className='w-full px-2 py-2 mt-5 border border-gray-300 rounded-md bg-blue-400 text-white cursor-pointer' disabled={loading} >{loading ? 'Updating Student...' : 'Update Student'}</button>
        </form>
          </div>
        </div>
  )
}

export default Student