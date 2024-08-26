import React from 'react';
import { useNavigate } from 'react-router-dom';

const ChooseUser = () => {
    const navigate = useNavigate();

    return (
        <div className="bg-gradient-to-r from-white to-blue-50">
            <div>
                <div className="flex ml-8 mt-9 justify-around">
                    <span>
                        <h1 className="text-xl font-semibold text-gray-900 dark:text-white">
                            ADMIN LOGIN
                        </h1>
                    </span>
                    <span>
                        <h1 className="text-xl font-semibold text-gray-900 dark:text-white">
                            TEACHER LOGIN
                        </h1>
                    </span>
                    <span>
                        <h1 className="text-xl font-semibold text-gray-900 dark:text-white">
                            STUDENT LOGIN
                        </h1>
                    </span>
                </div>
                <div className="flex ml-5 mt-5 justify-around">
                    <button
                        onClick={() => navigate('/admin/signin')}
                        className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 ml-4 mt-5"
                    >
                        LOGIN
                    </button>
                    <button
                        onClick={() => navigate('/teacher/signin')}
                        className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 ml-4 mt-5"
                    >
                        LOGIN
                    </button>
                    <button
                        onClick={() => navigate('/student/signin')}
                        className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 ml-4 mt-5"
                    >
                        LOGIN
                    </button>
                </div>
                <div className="flex align-middle justify-center h-96 mt-3">
                    <img src="/images/login1.jpg" alt="Login visual" />
                </div>
            </div>
        </div>
    );
};

export default ChooseUser;