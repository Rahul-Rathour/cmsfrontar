// rahul 23/8/2024 09:14
import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import {  BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ChooseUser from './components/ChooseUser';
import Sidebar from './pages/Admin/Sidebar';
import Attendence from './pages/Admin/Attendence';
import Announcement from './pages/Admin/Announcement';
import AdminDashboard from './pages/Admin/Dashboard'
import './dash.css';
import Students from './pages/Admin/Students';
import Classes from './pages/Admin/Classes';
import TeacherClasses from './pages/Teachers/classes';
import Teachers from './pages/Admin/Teachers';
import EventCalender from './pages/Admin/EventCalender';
import './calender.css';
import SettingsProfile from './pages/Admin/SettingsProfile';
import AdminLibrary from './pages/Admin/Library';
import AdminSignin from './components/AdminSignin';
import StudentSignin from './components/StudentSignin';
import TeacherSignin from './components/TeacherSignin'

import StudentDashboard from './pages/Student/StudentDashboard';
import StudentSidebar from './pages/Student/StudentSidebar';
import Assignments from './pages/Student/Assignments';
import StudentAnnouncement from './pages/Student/StudentAnnouncement';
import StudentProfile from './pages/Student/StudentProfile';
import StudentLibrary from './pages/Student/StudentLibrary';
import Exam from './pages/Student/Exam';


import TeacherSidebar from './pages/Teachers/TeacherSidebar';
import TeacherDashboard from './pages/Teachers/TeacherDashboard';
import TeacherAnnouncement from './pages/Teachers/TeacherAnnouncement';
import TeacherAttendence from './pages/Teachers/TeacherAttendence';
import TeacherAssignment from './pages/Teachers/TeacherAssignment';
import TeacherProfile from './pages/Teachers/TeacherProfile';
import TeacherLibrary from './pages/Teachers/TeacherLibrary';
import TeacherEventCalender from './pages/Teachers/TeacherEvents';
import Landingpage from './components/Home';
import Exams from './pages/Admin/Exams';
import TeacherExams from './pages/Teachers/TeacherExams';
import AddCourse from './pages/Admin/AddCourse';
import StudentAttendance from './pages/Student/StudentAttendence';

function App() {
  return (
    <div className="App">
       <Router>
        <Routes>
          <Route path="/admin/students" element={<Students/>}/>
          <Route path="/admin/addteacher" element={<Teachers/>}/>
          <Route path="/admin/addcourse" element={<AddCourse/>}/>
         
          <Route path="/" element={<Landingpage/>}/>
          <Route path="/admin/choose" element={<ChooseUser/>}/>
          <Route path="/admin/dashboard" element={<AdminDashboard/>}/> 
          <Route path="/admin/sidebar" element={<Sidebar/>}/>
          <Route path="/admin/announcement" element={<Announcement/>}/>
          <Route path="/admin/classes" element={<Classes/>}/>
          <Route path="/admin/event" element={<EventCalender/>}/>
          <Route path="/admin/profile" element={<SettingsProfile/>}/>
          <Route path="/admin/library" element={<AdminLibrary/>}/>
          <Route path="/admin/exam" element={<Exams/>}/>



          <Route path="/teacher/dashboard" element={<TeacherDashboard/>}/>
          <Route path="/teacher/sidebar" element={<TeacherSidebar/>}/>
          <Route path="/teacher/announcement" element={<TeacherAnnouncement/>}/>
          <Route path="/teacher/attendance" element={<TeacherAttendence/>}/>
          <Route path="/teacher/assignment" element={<TeacherAssignment/>}/>
          <Route path="/teacher/profile" element={<TeacherProfile/>}/>
          <Route path="/teacher/library" element={<TeacherLibrary/>}/>
          <Route path="/teacher/event" element={<TeacherEventCalender/>}/>
          <Route path="/teacher/classes" element={<TeacherClasses/>}/>
          <Route path="/teacher/exam" element={<TeacherExams/>}/>




          <Route path="/component/chooseuser" element={<ChooseUser/>}/>
          <Route path="/admin/signin" element={<AdminSignin/>}/>
          <Route path="/teacher/signin" element={<TeacherSignin/>}/>
          <Route path="/student/signin" element={<StudentSignin/>}/>




          <Route path="/student/attendance" element={<StudentAttendance/>}/>
          <Route path="/student/dashboard" element={<StudentDashboard/>}/>
          <Route path="/student/sidebar" element={<StudentSidebar/>}/>
          <Route path="/student/assignment" element={<Assignments/>}/>
          <Route path="/student/announcement" element={<StudentAnnouncement/>}/>
          <Route path="/student/profile" element={<StudentProfile/>}/>
          <Route path="/student/library" element={<StudentLibrary/>}/>
          <Route path="/student/exam" element={<Exam/>}/>
          





        </Routes>
       </Router>
    </div>
  );
}

export default App;



// Other Teacher Components (AddAssignment.js, ManageExams.js, etc.)