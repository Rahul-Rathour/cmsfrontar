// AddAnnouncement.js
import React, { useState } from 'react';
import axios from 'axios';

const Announcement = () => {
  const [announcementData, setAnnouncementData] = useState({
    title: '',
    description: '',
    pdf: null
  });

  const handleChange = (e) => {
    setAnnouncementData({
      ...announcementData,
      [e.target.name]: e.target.value
    });
  };

  const handleFileChange = (e) => {
    setAnnouncementData({
      ...announcementData,
      pdf: e.target.files[0]
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('title', announcementData.title);
    formData.append('description', announcementData.description);
    formData.append('pdf', announcementData.pdf);

    try {
      const response = await axios.post('http://localhost:5000/api/admin/add-announcement', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      alert('Announcement added successfully!');
    } catch (error) {
      console.error('There was an error adding the announcement!', error);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-6">Add Announcement</h2>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Title</label>
          <input
            type="text"
            name="title"
            value={announcementData.title}
            onChange={handleChange}
            className="mt-1 p-2 block w-full border rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Description</label>
          <textarea
            name="description"
            value={announcementData.description}
            onChange={handleChange}
            className="mt-1 p-2 block w-full border rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Upload PDF</label>
          <input
            type="file"
            name="pdf"
            onChange={handleFileChange}
            className="mt-1 p-2 block w-full border rounded-md"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
        >
          Add Announcement
        </button>
      </form>
    </div>
  );
};

export default Announcement;
