// frontend/src/components/Admin/AddStudent.js
import React, { useState } from 'react';
import axios from 'axios';

const Students = () => {
  const [formData, setFormData] = useState({
    name: '',
    registrationNumber: '',
    course: '',
    branch: '',
    email: '',
    father_name: '',
    mother_name: '',
    category: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/admin/add-student', formData);
      alert('Student added successfully!');
    } catch (error) {
      console.error(error);
      alert('Error adding student.');
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Add Student</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Student Name"
          className="w-full p-3 border rounded"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="registrationNumber"
          placeholder="Registration Number"
          className="w-full p-3 border rounded"
          value={formData.registrationNumber}
          onChange={handleChange}
        />
        <input
          type="text"
          name="course"
          placeholder="Course"
          className="w-full p-3 border rounded"
          value={formData.course}
          onChange={handleChange}
        />
        <input
          type="text"
          name="branch"
          placeholder="Branch"
          className="w-full p-3 border rounded"
          value={formData.branch}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="w-full p-3 border rounded"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          type="text"
          name="father_name"
          placeholder="Father's Name"
          className="w-full p-3 border rounded"
          value={formData.father_name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="mother_name"
          placeholder="Mother's Name"
          className="w-full p-3 border rounded"
          value={formData.mother_name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="category"
          placeholder="Category"
          className="w-full p-3 border rounded"
          value={formData.category}
          onChange={handleChange}
        />
        <button type="submit" className="w-full bg-blue-500 p-3 text-white rounded">
          Add Student
        </button>
      </form>
    </div>
  );
};

export default Students;
