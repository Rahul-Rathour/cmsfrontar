import React, { useState, useEffect } from 'react';

function TeacherAttendence() {
  const [students, setStudents] = useState([]);
  const [attendance, setAttendance] = useState({});

  const fetchStudents = async () => {
    const response = await fetch('http://localhost:5000/api/teacher/students'); 
    const data = await response.json();
    setStudents(data.students);
  };

  const handleAttendanceChange = (studentId, status) => {
    setAttendance({ ...attendance, [studentId]: status });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('/api/teacher/mark-attendance', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(attendance),
    });
    const data = await response.json();
    if (data.success) {
      alert('Attendance marked successfully');
    } else {
      alert('Error marking attendance');
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl mb-6">Mark Attendance</h2>
      <form onSubmit={handleSubmit}>
        {students.map((student) => (
          <div key={student._id} className="mb-2">
            <label className="block">{student.name}</label>
            <div>
              <input
                type="radio"
                name={student.reregistrationNumber}
                value="Present"
                onChange={() => handleAttendanceChange(student.registrationNumber, true)}
              /> Present
              <input
                type="radio"
                name={student._id}
                value="Absent"
                onChange={() => handleAttendanceChange(student.registrationNumber, false)}
              /> Absent
            </div>
          </div>
        ))}
        <div>
          <button type="submit" className="bg-blue-500 text-white p-2 rounded">
            Mark Attendance
          </button>
        </div>
      </form>
    </div>
  );
}

export default TeacherAttendence;
