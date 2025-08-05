import React from 'react'
import { CiEdit, CiTrash } from 'react-icons/ci';
import { Link } from 'react-router-dom';
import api from '../lib/axios';

const Stlist = ({students, ondelete}) => {

    
    
    return (
        <div className='overflow-x-auto px-10'>
            <table className='min-w-full bg-white shadow-md rounded'>
                <thead>
                    <tr className="bg-gray-100 text-gray-600 uppercase text-sm leading-normal">
                        <th className="py-3 px-6 text-left">Name</th>
                        <th className="py-3 px-6 text-left">Email</th>
                        <th className="py-3 px-6 text-left">Telephone</th>
                        <th className="py-3 px-6 text-left">Stream</th>
                        <th className="py-3 px-6 text-left">Course</th>
                        <th className="py-3 px-6 text-left">Grade</th>
                        <th className="py-3 px-6 text-center">Actions</th>
                    </tr>
                </thead>
                <tbody className="text-black-200 text-sm font-light">
                    {students && students.map((student) => (
                        <tr key={student._id} className="border-b border-gray-200 hover:bg-gray-100">
                            <td className="py-3 px-6 text-left">{student.name}</td>
                            <td className="py-3 px-6 text-left">{student.email}</td>
                            <td className="py-3 px-6 text-left">{student.telephone}</td>
                            <td className="py-3 px-6 text-left">{student.stream}</td>
                            <td className="py-3 px-6 text-left">{student.course}</td>
                            <td className="py-3 px-6 text-left">{student.grade}</td>
                            <td className="py-2">
                                <div className='flex justify-center items-center gap-5 '>
                                    <div className='flex justify-center items-center p-2 gap-2 text-white font-bold rounded mr-2 bg-red-500 hover:bg-red-600 cursor-pointer' onClick={() =>ondelete(student._id)} >
                                        <CiTrash />
                                        <p>DELETE</p>
                                    </div>
                                    <Link to={`/student/${student._id}`} className='flex justify-center items-center p-2 gap-2 rounded mr-2 text-white font-bold bg-green-500 hover:bg-green-600 cursor-pointer'>
                                        <CiEdit />
                                        <p>EDIT</p>
                                    </Link>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Stlist