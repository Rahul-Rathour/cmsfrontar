import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TeacherExams = () => {
  const [exams, setExams] = useState([]);
  const [newExam, setNewExam] = useState({
    title: '',
    date: '',
    course: '',
  });

  useEffect(() => {
    const fetchExams = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/teacher/exams');
        setExams(response.data);
      } catch (error) {
        console.error('Error fetching exams:', error);
        alert('Failed to fetch exams. Please try again later.');
      }
    };

    fetchExams();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewExam((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/teacher/add-exam', newExam);
      alert('Exam added successfully!');
      setNewExam({
        title: '',
        date: '',
        course: '',
      });
      const response = await axios.get('http://localhost:5000/api/teacher/exams');
      setExams(response.data);
    } catch (error) {
      console.error('Error adding exam:', error);
      alert('Failed to add exam.');
    }
  };

  return (
    <div className="max-w-4xl mx-auto my-8 p-4 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Manage Exams</h2>
      
      <form onSubmit={handleSubmit} className="space-y-4 mb-8">
        <div>
          <label className="block text-gray-700">Subject</label>
          <input
            type="text"
            name="title"
            value={newExam.title}
            onChange={handleChange}
            className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        
        <div>
          <label className="block text-gray-700">Date</label>
          <input
            type="date"
            name="date"
            value={newExam.date}
            onChange={handleChange}
            className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700">Course</label>
          <input
            type="text"
            name="course"
            value={newExam.course}
            onChange={handleChange}
            className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        
        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Add Exam
        </button>
      </form>

      <div>
        <h3 className="text-xl font-semibold mb-4">Existing Exams</h3>
        <ul>
          {exams.length > 0 ? (
            exams.map((exam) => (
              <li key={exam._id} className="mb-4 p-4 border rounded-md shadow-sm">
                <h4 className="text-lg font-semibold">{exam.title}</h4>
                <p className="text-gray-600">Course: {exam.course}</p>
                <p className="text-gray-600">Date: {new Date(exam.date).toLocaleDateString()}</p>
              </li>
            ))
          ) : (
            <p className="text-gray-600">No exams available.</p>
          )}
        </ul>
      </div>
    </div>
  );
};

export default TeacherExams;
