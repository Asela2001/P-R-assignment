import React, { useState } from 'react'
import api from "../lib/axios.js";
import { TiArrowBackOutline } from "react-icons/ti";
import {Link, useNavigate} from "react-router-dom"
import toast from 'react-hot-toast';

const Create = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [telephone, setTelephone] = useState("");
  const [stream, setStream] = useState("");
  const [course, setCourse] = useState("");
  const [grade, setGrade] = useState("");
  const [loading, SetLoading] = useState(false);

  const navigate = useNavigate();

  const streamOptions = ['Maths', 'Science', 'Tech', 'Commerce', 'Art'];
  const courseOptions = {
    Maths: ['Chemistry', 'Physics', 'Combined Maths', 'ICT'],
    Science: ['Chemistry', 'Physics', 'Bilogy', 'Agree'],
    Tech: ['ET', 'BST', 'SFT', 'ICT', 'Agriculture'],
    Commerce: ['Accounting', 'Economics', 'Business Studies', 'ICT'],
    Art: ['History', 'Geography', 'Literature', 'ICT', 'Agree']
  };

  const createStudent = async (e) => {
    e.preventDefault();
    if(!name.trim() || !email.trim() || !telephone.trim()){
      console.log("All field required");
      return;
    }
    SetLoading(true);
    try {
      await api.post('/student', {
        name,
        email,
        telephone,
        stream,
        course,
        grade
      });
      console.log("Student Add successfully!");
      toast.success("Student Add Successfully!");
      navigate("/");
    } catch (error) {
      console.log("Error add user!", error);
      toast.error("Error Add Student!");
    }finally{
      SetLoading(false);
    }
  }


  return (
    <div>
      <div className='flex px-10 py-5 bg-white shadow-md'>
        <Link to="/" className='flex justify-center items-center gap-2 p-1 bg-blue-500 hover:bg-blue-600 border border-blue-700 text-white cursor-pointer'>
          <TiArrowBackOutline />
          <p>HOME</p>
      </Link>
        </div>
        <div className='flex justify-center items-center py-5 font-bold text-2xl'>
          <p>Add New Student</p>
        </div>
      <div className='bg-white rounded-lg shadow-md border border-gray-200 p-10 mx-auto max-w-4xl my-10'>
        <div>
          <form className='space-y-3' onSubmit={createStudent} >
          <label className='block text-sm font-medium text-gray-700 mb-1'>
            Name
          </label>
          <input type='text' className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500' placeholder='Enter Student name' onChange={(e) => setName(e.target.value)} value={name} />
          <label className='block text-sm font-medium text-gray-700 mb-1'>
            Email
          </label>
          <input type='email' className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder='Enter Student email' onChange={(e) => setEmail(e.target.value)} value={email} />
          <label className='block text-sm font-medium text-gray-700 mb-1'>
            Telephone
          </label>
          <input type='text' className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder='Enter Student Telephone' onChange={(e) => setTelephone(e.target.value)} value={telephone} />
          <label className='block text-sm font-medium text-gray-700 mb-1'>
            Stream
          </label>
          <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" onChange={(e) => {
                setStream(e.target.value);
                setCourse(''); // Reset course when stream changes
              }} value={stream} >
                {streamOptions.map((option) => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
          <label className='block text-sm font-medium text-gray-700 mb-1'>
            Course
          </label>
          <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" onChange={(e) => setCourse(e.target.value)} value={course} disabled={!stream} >
            <option value="">Select Course</option>
              {stream && courseOptions[stream]?.map((courseOption) => (
                <option key={courseOption} value={courseOption}>
                  {courseOption}
                </option>
              ))}
            </select>
          <label className='block text-sm font-medium text-gray-700 mb-1'>
            Grade
          </label>
          <select min="12" max="13" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" onChange={(e) => setGrade(e.target.value)} value={grade} >
            <option value="">Select Grade</option>
            <option value="12">Grade 12</option>
              <option value="13">Grade 13</option>
            </select>
          <button type='submit' className='w-full px-2 py-2 mt-5 border border-gray-300 rounded-md bg-blue-400 text-white cursor-pointer' disabled={loading} >{loading ? 'Adding Student...' : 'Add Student'}</button>
        </form>
        
        </div>
      </div>
    </div>
  )
}

export default Create
