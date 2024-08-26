// frontend/src/components/Student/ViewAnnouncements.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const StudentAnnouncement = () => {
  const [announcements, setAnnouncements] = useState([]);

  useEffect(() => {
    const fetchAnnouncements = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/student/announcements');
        setAnnouncements(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchAnnouncements();
  }, []);

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Announcements</h2>
      <ul className="space-y-4">
        {announcements.map((announcement) => (
          <li key={announcement._id} className="p-4 border rounded-lg shadow">
            <h3 className="text-xl font-semibold">{announcement.title}</h3>
            <p>{announcement.description}</p>
            {announcement.pdfUrl && (
              <a
                href={announcement.pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline"
              >
                View PDF
              </a>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentAnnouncement;
