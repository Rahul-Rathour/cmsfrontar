import React, { useEffect, useState } from 'react';

function Assignments() {
  const [assignments, setAssignments] = useState([]);

  const fetchAssignments = async () => {
    const response = await fetch('/api/student/assignments');
    const data = await response.json();
    setAssignments(data.assignments);
  };

  useEffect(() => {
    fetchAssignments();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl mb-6">Assignments</h2>
      <ul>
        {assignments.map((assignment, index) => (
          <li key={index} className="border p-2 rounded mb-2">
            {assignment.title} - Due: {assignment.dueDate}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Assignments;
