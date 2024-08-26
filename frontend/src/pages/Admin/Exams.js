// AddTeacher.js
import React, { useState } from 'react';
import axios from 'axios';

const Teachers = () => {
  const [exams, setExams] = useState({
    title: '',
    date: '',
    course: ''
  });

  const handleChange = (e) => {
    setExams({
      ...exams,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/admin/add-exam', exams);
      alert('Exam added successfully!');
    } catch (error) {
      console.error('There was an error adding the exam!', error);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-6">Add Exam</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Exam Name</label>
          <input
            type="text"
            name="title"
            value={exams.title}
            onChange={handleChange}
            className="mt-1 p-2 block w-full border rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Date</label>
          <input
            type="date"
            name="date"
            value={exams.date}
            onChange={handleChange}
            className="mt-1 p-2 block w-full border rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Course</label>
          <input
            type="text"
            name="course"
            value={exams.course}
            onChange={handleChange}
            className="mt-1 p-2 block w-full border rounded-md"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
        >
          Add Teacher
        </button>
      </form>
    </div>
  );
};

export default Teachers;
