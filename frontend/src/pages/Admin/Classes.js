import React from 'react'
// import Sidebar from './Sidebar'
import { useState, useEffect } from 'react'
import axios from 'axios'

const Classes = () => {
  const [newClassName, setNewClassName] = useState('')
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    fetchClasses();
  }, []);

  const fetchClasses = async () => {
    try {
      const response = await axios.get('http://localhost:4000/api/vi/class/getall');
      if (response.data && Array.isArray(response.data.classes)) {
        setClasses(response.data.classes);
      } else {
        console.error('Error fetching classes: Invalid data format', response.data);
      }
    } catch (error) {
      console.error('Error fetching classes:', error.message);
    }
  };

  const handleAddClass = async (e) => {
    e.preventDefault();
    if (newClassName.trim() !== '') {
      try {
        const response = await axios.post('http://localhost:4000/api/vi/class', { course: newClassName });
        console.log('Response data:', response.data); // Log the response data

        setClasses(prevClasses => {
          if (Array.isArray(prevClasses)) {
            return [...prevClasses, response.data]; // Use callback function to update state
          } else {
            console.error('Error adding class: Invalid state for classes:', prevClasses);
            return []; // Reset classes state to an empty array
          }
        });

        setNewClassName('');
      } catch (error) {
        console.error('Error adding class:', error);
      }
    }
  };

  return (
    <>
      <div className='flex'>
        <div className='fixed'>
        {/* <Sidebar /> */}
        </div>
        <div className='ml-80'>
          <div>
            <h1 className="text-xl font-semibold text-gray-900 dark:text-white mt-4">ADD CLASSES</h1>
          </div>
          <form onSubmit={handleAddClass}>
            <div className='mt-3'>
              <span><input type='text' placeholder='ENTER CLASS' value={newClassName} onChange={(e) => setNewClassName(e.target.value)} name='class' className='mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500' ></input></span>
              <button type='submit' className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 ml-4 mt-5">ADD COURSE</button>
            </div>
          </form>

          <div className='mt-10'>

            {/* Display Announcements */}
            <div className='text-center font-bold text-2xl mb-5 text-gray-500'>
              <h1>AVAILABLE COURSES</h1>
            </div>
            
            <div>
              {classes.map((newClassName) => {
                return (
                  <div className='flex bg-blue-700 p-3 pl-5 mt-4 border border-blue-900 rounded-lg'>
                    <div key={newClassName.id} className=" text-white">
                      {newClassName.course}
                    </div>
                  </div>
                );
              })}
            </div>
            

          </div>

        </div>
      </div>




    </>
  )
}



export default Classes;