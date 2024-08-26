import React from 'react'
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';

const Card = () => {
  const navigate = useNavigate();
  return (
    <>
     {/* Cards Section */}
     <div className="flex justify-evenly space-x-8 mt-1">
          {/* Admin Card */}
          <Link to="/admin/signin" className="w-1/4" >
            <motion.div
              className="p-6 bg-white border border-blue-100 rounded-lg shadow-lg h-48"
              whileHover={{ scale: 1.1, boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.5)' }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold text-blue-900 mb-4">Admin Login</h3>
              <p className="text-gray-600">Manage students, faculty, and system settings.</p>
            </motion.div>
          </Link>

          {/* Student Card */}
          <Link to="/student/signin" className="w-1/4" >
            <motion.div
              className="p-6 bg-white border border-blue-100 rounded-lg shadow-lg h-48"
              whileHover={{ scale: 1.1, boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.5)' }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold text-blue-900 mb-4">Student Login</h3>
              <p className="text-gray-600">Access your classes, assignments, and announcements.</p>
            </motion.div>
          </Link>

          {/* Faculty Card */}
          <Link to="/teacher/signin" className="w-1/4">
            <motion.div
              className="p-6 bg-white border border-blue-100 rounded-lg shadow-lg h-48"
              whileHover={{ scale: 1.1, boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.5)' }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold text-blue-900 mb-4">Faculty Login</h3>
              <p className="text-gray-600">Manage your classes, assignments, and announcements.</p>
            </motion.div>
          </Link>
        </div>
    </>
  )
}

export default Card