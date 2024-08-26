import React, { useState, useEffect } from 'react';
import axios from 'axios';

function TeacherAssignment() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [course, setCourse] = useState('');
    const [teacher, setTeacher] = useState('');
    const [assignments, setAssignments] = useState([]);
    const [dueDate, setdueDate] = useState([]);

    useEffect(() => {
        // Fetch assignments from the server
        axios.get('http://localhost:5000/assignments')
            .then(response => setAssignments(response.data))
            .catch(error => console.error('Error fetching assignments:', error));
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();

        const newAssignment = {
            title,
            description,
            course,
            teacher,
            dueDate
        };

        axios.post('http://localhost:5000/api/teacher/add-assignment', newAssignment)
            .then(response => {
                setAssignments([...assignments, response.data]);
                setTitle('');
                setDescription('');
                setCourse('');
                setTeacher('');
                setdueDate('');
            })
            .catch(error => console.error('Error adding assignment:', error));
    };

    return (
        <div className="container mx-auto p-4">
            {/* Add Assignment Form */}
            <div className="bg-white p-6 rounded-lg shadow-md mb-8">
                <h2 className="text-xl font-semibold mb-4">Add New Assignment</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="title" className="block text-gray-700">Title</label>
                        <input
                            type="text"
                            id="title"
                            name="title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="w-full p-2 border border-gray-300 rounded"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="description" className="block text-gray-700">Description</label>
                        <textarea
                            id="description"
                            name="description"
                            rows="4"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            className="w-full p-2 border border-gray-300 rounded"
                            required
                        ></textarea>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="course" className="block text-gray-700">Course</label>
                        <select
                            // type="text"
                            id="course"
                            name="course"
                            value={course}
                            onChange={(e) => setCourse(e.target.value)}
                            className="w-full p-2 border border-gray-300 rounded"
                            required
                        >
                            <option>B.Tech</option>
                            <option>M.Tech</option>
                        </select>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="teacher" className="block text-gray-700">Teacher</label>
                        <input
                            type="text"
                            id="teacher"
                            name="teacher"
                            value={teacher}
                            onChange={(e) => setTeacher(e.target.value)}
                            className="w-full p-2 border border-gray-300 rounded"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="dueDate" className="block text-gray-700">Due Date</label>
                        <input
                            type="date"
                            id="teacher"
                            name="teacher"
                            value={dueDate}
                            onChange={(e) => setdueDate(e.target.value)}
                            className="w-full p-2 border border-gray-300 rounded"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="bg-blue-500 text-white p-2 rounded"
                    >
                        Add Assignment
                    </button>
                </form>
            </div>

            {/* Assignments List */}
            <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold mb-4">Assignments</h2>
                <ul className="space-y-4">
                    {assignments.map((assignment) => (
                        <li key={assignment._id} className="p-4 border border-gray-300 rounded shadow-sm">
                            <h3 className="text-lg font-semibold">{assignment.title}</h3>
                            <p className="text-gray-700">{assignment.description}</p>
                            <p className="text-gray-500">Course: {assignment.course}</p>
                            <p className="text-gray-500">Teacher: {assignment.teacher}</p>
                            <p className="text-gray-500">Due Date: {assignment.dueDate}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default TeacherAssignment;
