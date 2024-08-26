
import React, { useState, useEffect } from 'react';
// import Sidebar from './Sidebar'
import Announcement from './Announcement';
import EventCalender from './EventCalender';
import axios from 'axios';
import { BsPersonWorkspace, BsPeopleFill }
  from 'react-icons/bs'
import { GiTeacher } from "react-icons/gi";
import { useNavigate } from 'react-router-dom';
import Navbar from '../../assets/navbar';


const AdminDashboard = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [events, setEvents] = useState([]);
  const [announcements, setAnnouncements] = useState([]);
  const [studentPerformance, setStudentPerformance] = useState([]);

  useEffect(() => {
    fetchEvents();
    fetchAnnouncements();
    
  }, []);

  const fetchEvents = async()=>{
    try {
      const response = await axios.get('http://localhost:4000/api/vi/events/getall');
      setEvents(response.data.events ||[]);
    } 
    catch (error) {
      console.error('Error fetching events:', error);
    }
  };

  const fetchAnnouncements = async () => {
    try {
      const response = await axios.get('http://localhost:4000/api/vi/announcements/getall');
      setAnnouncements(response.data.announcements || []);
    } catch (error) {
      console.error('Error fetching announcements:', error);
    }
  };
const navigate = useNavigate();


  return (
    <>
    <Navbar/>
    <div className="p-6 bg-blue-50 mt-16">
      <h1 className="text-2xl font-bold text-blue-600">Admin Dashboard</h1>
      <div className="grid grid-cols-3 gap-4 mt-6">
        <div className="bg-white p-4 rounded-lg shadow-md" onClick={()=>navigate('/admin/students')}>Add Student</div>
        {/* <div className="bg-white p-4 rounded-lg shadow-md" onClick={()=>navigate('/admin/classes')}>Add Class</div> */}
        <div className="bg-white p-4 rounded-lg shadow-md" onClick={()=>navigate('/admin/addteacher')}>Add Teacher</div>
        <div className="bg-white p-4 rounded-lg shadow-md" onClick={()=>navigate('/admin/addcourse')}>Add Course</div>
        <div className="bg-white p-4 rounded-lg shadow-md" onClick={()=>navigate('/admin/announcement')}>Announcements</div>
        <div className="bg-white p-4 rounded-lg shadow-md" onClick={()=>navigate('/admin/exam')}>Exams</div>
        <div className="bg-white p-4 rounded-lg shadow-md" onClick={()=>navigate('/admin/profile')}>Profile</div>
        <div className="bg-white p-4 rounded-lg shadow-md" onClick={()=>navigate('/admin/setting')}>Settings</div>
      </div>
    </div>
      {/* <div className='flex'>
        <Sidebar />
        
        <div className='main-container'>
          <div className='main-title'>
            <h3 className='text-xl font-semibold text-gray-900 dark:text-white'> DASHBOARD</h3>
          </div>

          <div className='main-cards'>
            <div className='card'>
              <div className='card-inner'>
                <h3>Total Students</h3>
                <BsPeopleFill className='card_icon' />
              </div>
              <h1>300</h1>
            </div>
            <div className='card'>
              <div className='card-inner'>
                <h3>Total Faculties</h3>
                <BsPersonWorkspace className='card_icon' />
              </div>
              <h1>30</h1>
            </div>
            <div className='card'>
              <div className='card-inner'>
                <h3>Total Classes</h3>
                <GiTeacher className='card_icon' />
              </div>
              <h1>20</h1>
              
            </div>

          </div>
          
        </div>
      </div> */}
      
    </>
  )
}

export default AdminDashboard