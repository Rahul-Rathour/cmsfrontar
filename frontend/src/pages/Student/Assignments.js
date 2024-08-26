// frontend/src/components/Student/ViewAssignments.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Assignments = () => {
  const [assignments, setAssignments] = useState([]);
  const course = localStorage.getItem("Course")
  useEffect(() => { 
    const fetchAssignments = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/student/assignments?course=${course}`);
        setAssignments(response.data);
    }catch (error) {    
        console.error(error);
      }
    };

    fetchAssignments();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Assignments</h2>
      <ul className="space-y-4">
        {assignments.map((assignment) => (
          <li key={assignment._id} className="p-4 border rounded shadow">
            <h3 className="text-xl font-semibold">{assignment.title}</h3>
            <p>{assignment.description}</p>
            <b>Due Date:</b> <span>{assignment.dueDate}</span> 
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Assignments;
