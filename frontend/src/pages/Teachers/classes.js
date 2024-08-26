// frontend/src/components/Teacher/ViewCourses.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TeacherClasses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/teacher/courses');
        setCourses(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCourses();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Courses</h2>
      <ul className="space-y-4">
        {courses.map((course) => (
          <li key={course._id} className="p-4 border rounded shadow">
            <h3 className="text-xl font-semibold">{course.name}</h3>
            <p>{course.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TeacherClasses;
