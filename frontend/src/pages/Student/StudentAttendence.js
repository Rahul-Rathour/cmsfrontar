// frontend/src/components/Student/ViewAttendance.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const StudentAttendance = () => {
  const [attendance, setAttendance] = useState([]);

  useEffect(() => {
    const fetchAttendance = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/student/attendance');
        setAttendance(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchAttendance();
  }, []);

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Attendance</h2>
      <ul className="space-y-4">
        {attendance.map((record) => (
          <li key={record._id} className="p-4 border rounded-lg shadow">
            <h3 className="text-xl font-semibold">{record.subject}</h3>
            <p>Date: {new Date(record.date).toLocaleDateString()}</p>
            <p>Status: {record.status}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentAttendance;
