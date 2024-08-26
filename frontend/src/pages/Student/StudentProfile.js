import React, { useEffect, useState } from 'react';

function StudentProfile() {
  const [profile, setProfile] = useState({});

  const fetchProfile = async () => {
    const response = await fetch('/api/student/profile');
    const data = await response.json();
    setProfile(data.profile);
  };

  useEffect(() => {
    fetchProfile();
  }, []);
const studentName = localStorage.getItem("name")
const RegistrationNumber = localStorage.getItem("Registration Number")
const Course = localStorage.getItem("Course")
const Branch = localStorage.getItem("Branch")
const Email = localStorage.getItem("Email")
  return (
    <div className="p-6">
      <h2 className="text-2xl mb-6">Profile</h2>
      <div className="border p-4 rounded">
        <p>Name: {studentName}</p>
        <p>Registration Number: {RegistrationNumber}</p>
        <p>Course: {Course}</p>
        <p>Branch: {Branch}</p>
        <p>Email: {Email}</p>
      </div>
    </div>
  );
}

export default StudentProfile;
