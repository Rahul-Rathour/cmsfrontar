import React from 'react'
import StudentSidebar from './StudentSidebar';

// import EventCalender from './EventCalender';
import axios from 'axios';
import { BsPersonWorkspace, BsPeopleFill }
  from 'react-icons/bs'
import { GiTeacher } from "react-icons/gi";
import { useNavigate } from 'react-router-dom';
const StudentDashboard = () => {

  const navigate= useNavigate();
  return (
    <>
      {/* <div className='flex'>
        <StudentSidebar />

        <div className='main-container'>
          <div className='main-title'>
            <h3 className='text-xl font-semibold text-gray-900 dark:text-white'> STUDENT DASHBOARD</h3>
          </div>

          <div className='main-cards'>
            <div className='card'>
              <div className='card-inner'>
                <h3>Assignment</h3>
                <BsPeopleFill className='card_icon' />
              </div>
              <h1>5</h1>
            </div>
            <div className='card'>
              <div className='card-inner'>
                <h3>Performance</h3>
                <BsPersonWorkspace className='card_icon' />
              </div>
              <h1>30</h1>
            </div>
            <div className='card'>
              <div className='card-inner'>
                <h3>Terms</h3>
                <GiTeacher className='card_icon' />
              </div>
              <h1>1</h1>

            </div>

          </div>

        </div>
      </div> */}
       <div className="p-6 bg-blue-50">
      <h1 className="text-2xl font-bold text-blue-600">Student Dashboard</h1>
      <div className="grid grid-cols-3 gap-4 mt-6">
        <div className="bg-white p-4 rounded-lg shadow-md" onClick={()=>navigate('/student/assignment')}>Assignments</div>
        <div className="bg-white p-4 rounded-lg shadow-md" onClick={()=>navigate('/student/exam')}>Upcoming Exams</div>
        <div className="bg-white p-4 rounded-lg shadow-md" onClick={()=>navigate('/student/attendance')}>Attendance</div>
        <div className="bg-white p-4 rounded-lg shadow-md" onClick={()=>navigate('/student/announcement')}>Announcements</div>
        <div className="bg-white p-4 rounded-lg shadow-md"onClick={()=>navigate('/student/profile')}>Profile</div>
      </div>
    </div>
    </>
  )
}

export default StudentDashboard