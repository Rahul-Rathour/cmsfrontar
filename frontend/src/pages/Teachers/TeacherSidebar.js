import React, { useState } from 'react';
import {
    FaTh,
    FaBars,
    FaCalendarCheck,
    FaThList,
    FaClipboard,
    FaUserGraduate,
    FaPen,
    FaPenSquare,
    FaDesktop,
    FaChalkboardTeacher,
    FaCheck,
    FaBook
}from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";

import { NavLink } from 'react-router-dom';


const TeacherSidebar = ({children}) => {
    const[isOpen ,setIsOpen] = useState(true);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path:"/teacher/dashboard",
            name:"Dashboard",
            icon:<FaTh/>
        },
       
       
        {
            path:"/teacher/assignment",
            name:"Assignments",
            icon:<FaPen/>
        },
        {
            path:"/teacher/exam",
            name:"Exams",
            icon:<FaPenSquare/>
        },
       
        {
            path:"/teacher/attendence",
            name:"Attendence",
            icon:<FaCheck/>
        },
        
     {
            path:"/teacher/announcement",
            name:"Announcements",
            icon:<FaMessage/>
        },
        {
            path:"/teacher/event",
            name:"Events and Calender",
            icon:<FaCalendarCheck/>
        },
        {
            path:"/teacher/library",
            name:"Library",
            icon:<FaCalendarCheck/>
        },
        {
            path:"/teacher/profile",
            name:"Settings and Profile",
            icon:<FaThList/>
        },
    ]
    return (
        <div className="container w-1/4">
           <div style={{width: isOpen ? "200px" : "50px"}} className="sidebar">
               <div className="top_section">
                   <h1 style={{display: isOpen ? "block" : "none"}} className="logo">Teacher</h1>
                   <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars">
                       <FaBars onClick={toggle}/>
                   </div>
               </div>
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" activeclassName="active">
                           <div className="icon">{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                       </NavLink>
                   ))
               }
           </div>
           <main>{children}</main>
        </div>
    );
};

export default TeacherSidebar;