import React, { useEffect, useState } from 'react';

function TeacherProfile() {
  const [profile, setProfile] = useState({});

  const fetchProfile = async () => {
    const response = await fetch('/api/teacher/profile');
    const data = await response.json();
    setProfile(data.profile);
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl mb-6">Profile</h2>
      <div className="border p-4 rounded">
        <p>Name: {profile.name}</p>
        <p>Email: {profile.email}</p>
        <p>Subject: {profile.subject}</p>
      </div>
    </div>
  );
}

export default TeacherProfile;
