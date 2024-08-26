import React from 'react'
import TeacherSidebar from './TeacherSidebar'
const TeacherLibrary = () => {
    return (
        <div>
            <div className='flex'>
                <TeacherSidebar/>
                <div>
                    <div>
                        <h1 className="text-xl font-semibold text-gray-900 dark:text-white mt-4">LIBRARY</h1>
                    </div>
                    <div className='mt-3'>
                        <h3 className='font-semibold mt-9'>Computer Technology</h3>
                        <label>Author:'RAM SINGH'</label>
                         <button className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 ml-28 mt-4">Borrow</button>
    
        <h3 className='font-semibold mt-8'>Web Technology</h3>
                        <label>Author:'NARAYAN SINHA'</label>
                        <button className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 ml-20 mt-4">Borrow</button>
                        <h3 className='font-semibold mt-9'>Object-Orientation programming</h3>
                        <label>Author:'JAY NARAYAN'</label>
                         <button className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 ml-24 mt-4">Borrow</button>
                    </div>
                </div>
            </div>
        </div>
      )
    }
    

export default TeacherLibrary