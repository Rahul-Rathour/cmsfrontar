import React, { useState } from 'react';

function TeacherAnnouncement() {
  const [announcement, setAnnouncement] = useState('');

  const handleInputChange = (e) => {
    setAnnouncement(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('/api/teacher/addAnnouncement', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ announcement }),
    });
    const data = await response.json();
    if (data.success) {
      setAnnouncement('');
      alert('Announcement added successfully');
    } else {
      alert('Error adding announcement');
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl mb-6">Add Announcement</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block">Announcement</label>
          <input
            type="text"
            value={announcement}
            onChange={handleInputChange}
            className="border p-2 w-full rounded"
          />
        </div>
        <div>
          <button type="submit" className="bg-blue-500 text-white p-2 rounded">
            Add Announcement
          </button>
        </div>
      </form>
    </div>
  );
}

export default TeacherAnnouncement;
