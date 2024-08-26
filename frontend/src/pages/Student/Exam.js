// frontend/src/components/Student/ViewExams.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Exam = () => {
  const [exams, setExams] = useState([]);
  const course = localStorage.getItem("Course")

  useEffect(() => {
    const fetchExams = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/student/exams?course=${course}`);
        setExams(response.data);
    }catch (error) {    
        console.error(error);
      }
    };

    fetchExams();
  }, []);

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Exams</h2>
      <ul className="space-y-4">
        {exams.map((exam) => (
          <li key={exam._id} className="p-4 border rounded-lg shadow">
            <h3 className="text-xl font-semibold">{exam.subject}</h3>
            <p>Date: {new Date(exam.date).toLocaleDateString()}</p>
            <p>Subject: {exam.title}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Exam;
