import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';

const StudentSignin = () => {
    const[email,setEmail] = useState('')
    const[password,setPassword] = useState('')
    const[isopen,setIsopen] = useState('true')
    const navigate = useNavigate(); 
    // 

    const handleSignIn = async (e) => {
        e.preventDefault();
      
        try {
          const response = await axios.post('http://localhost:5000/api/student/login', { email:email, registrationNumber:password }); 
          console.log(response)
          if (response.status === 200) {
            // Sign-in successful, redirect to admin dashboard
            
            localStorage.setItem("token",response.data.token)
            localStorage.setItem("name",response.data.StudentDetail.name)
            localStorage.setItem("Registration Number",response.data.StudentDetail.registrationNumber)
            localStorage.setItem("Course",response.data.StudentDetail.course)
            localStorage.setItem("Branch",response.data.StudentDetail.branch)
            localStorage.setItem("Email",response.data.StudentDetail.email)

            
            navigate('/student/dashboard');
          } else {
            // Handle sign-in errors
            alert('Sign-in failed');
          }
        } catch (error) {
          alert('Error during sign-in:', error);
        }
      };
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
    return (
        <>
            <div>
                <div className="bg-white relative">
                    <div
                        className="flex flex-col items-center justify-between pt-0 pr-10 pb-0 pl-10 mt-0 mr-auto mb-0 ml-auto max-w-7xl
xl:px-5 lg:flex-row"
                    >
                        <div className="flex flex-col items-center w-full pt-5 pr-10 pb-20 pl-10 lg:pt-20 lg:flex-row">
                            <div className="w-full bg-cover relative max-w-md lg:max-w-2xl lg:w-7/12">
                                {/* <div className="flex flex-col items-center justify-center w-full h-full relative lg:pr-10">
                                    <img
                                        src="https://res.cloudinary.com/macxenon/image/upload/v1631570592/Run_-_Health_qcghbu.png"
                                        className="btn-"
                                    />
                                </div> */}
                                <div data-aos='fade-right' data-aos-duration='1000' className=' '><img src="https://res.cloudinary.com/macxenon/image/upload/v1631570592/Run_-_Health_qcghbu.png"/> </div>
                            </div>
                            <div className="w-full mt-20 mr-0 mb-0 ml-0 relative z-10 max-w-2xl lg:mt-0 lg:w-5/12">
                                <div
                                    className="flex flex-col items-start justify-start pt-10 pr-10 pb-10 pl-10 bg-white shadow-2xl rounded-xl
relative z-10"
                                >
                                    <p className="w-full text-4xl font-medium text-center leading-snug font-serif">
                                        Student Sign In
                                    </p>
                                    <div className="w-full mt-6 mr-0 mb-0 ml-0 relative space-y-8">
                                        <div className="relative">
                                            <p className="bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600 absolute">
                                                Email
                                            </p>
                                            <input

                                                placeholder="123@ex.com"
                                                type="email"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                required
                                                className="border placeholder-gray-400 focus:outline-none
    focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white
    border-gray-300 rounded-md"
                                            />
                                        </div>
                                        <div className="relative">
                                            <p
                                                className="bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600
    absolute"
                                            >
                                                Password
                                            </p>
                                            <input

                                                placeholder="Password"
                                                type="password"
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}
                                                required
                                                className="border placeholder-gray-400 focus:outline-none
    focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white
    border-gray-300 rounded-md"
                                            />
                                        </div>
                                        <div className="relative">
                                            <button onClick={handleSignIn}>
                                                <a
                                                    className="w-full inline-block pt-4 pr-5 pb-4 pl-5 text-xl font-medium text-center text-white bg-indigo-500
    rounded-lg transition duration-200 hover:bg-indigo-600 ease"
                                                >
                                                    Submit
                                                </a>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <svg
                                    viewBox="0 0 91 91"
                                    className="absolute top-0 left-0 z-0 w-32 h-32 -mt-12 -ml-12 text-yellow-300
fill-current"
                                >
                                    <g stroke="none" strokewidth={1} fillrule="evenodd">
                                        <g fillrule="nonzero">
                                            <g>
                                                <g>
                                                    <circle cx="3.261" cy="3.445" r="2.72" />
                                                    <circle cx="15.296" cy="3.445" r="2.719" />
                                                    <circle cx="27.333" cy="3.445" r="2.72" />
                                                    <circle cx="39.369" cy="3.445" r="2.72" />
                                                    <circle cx="51.405" cy="3.445" r="2.72" />
                                                    <circle cx="63.441" cy="3.445" r="2.72" />
                                                    <circle cx="75.479" cy="3.445" r="2.72" />
                                                    <circle cx="87.514" cy="3.445" r="2.719" />
                                                </g>
                                                <g transform="translate(0 12)">
                                                    <circle cx="3.261" cy="3.525" r="2.72" />
                                                    <circle cx="15.296" cy="3.525" r="2.719" />
                                                    <circle cx="27.333" cy="3.525" r="2.72" />
                                                    <circle cx="39.369" cy="3.525" r="2.72" />
                                                    <circle cx="51.405" cy="3.525" r="2.72" />
                                                    <circle cx="63.441" cy="3.525" r="2.72" />
                                                    <circle cx="75.479" cy="3.525" r="2.72" />
                                                    <circle cx="87.514" cy="3.525" r="2.719" />
                                                </g>
                                                <g transform="translate(0 24)">
                                                    <circle cx="3.261" cy="3.605" r="2.72" />
                                                    <circle cx="15.296" cy="3.605" r="2.719" />
                                                    <circle cx="27.333" cy="3.605" r="2.72" />
                                                    <circle cx="39.369" cy="3.605" r="2.72" />
                                                    <circle cx="51.405" cy="3.605" r="2.72" />
                                                    <circle cx="63.441" cy="3.605" r="2.72" />
                                                    <circle cx="75.479" cy="3.605" r="2.72" />
                                                    <circle cx="87.514" cy="3.605" r="2.719" />
                                                </g>
                                                <g transform="translate(0 36)">
                                                    <circle cx="3.261" cy="3.686" r="2.72" />
                                                    <circle cx="15.296" cy="3.686" r="2.719" />
                                                    <circle cx="27.333" cy="3.686" r="2.72" />
                                                    <circle cx="39.369" cy="3.686" r="2.72" />
                                                    <circle cx="51.405" cy="3.686" r="2.72" />
                                                    <circle cx="63.441" cy="3.686" r="2.72" />
                                                    <circle cx="75.479" cy="3.686" r="2.72" />
                                                    <circle cx="87.514" cy="3.686" r="2.719" />
                                                </g>
                                                <g transform="translate(0 49)">
                                                    <circle cx="3.261" cy="2.767" r="2.72" />
                                                    <circle cx="15.296" cy="2.767" r="2.719" />
                                                    <circle cx="27.333" cy="2.767" r="2.72" />
                                                    <circle cx="39.369" cy="2.767" r="2.72" />
                                                    <circle cx="51.405" cy="2.767" r="2.72" />
                                                    <circle cx="63.441" cy="2.767" r="2.72" />
                                                    <circle cx="75.479" cy="2.767" r="2.72" />
                                                    <circle cx="87.514" cy="2.767" r="2.719" />
                                                </g>
                                                <g transform="translate(0 61)">
                                                    <circle cx="3.261" cy="2.846" r="2.72" />
                                                    <circle cx="15.296" cy="2.846" r="2.719" />
                                                    <circle cx="27.333" cy="2.846" r="2.72" />
                                                    <circle cx="39.369" cy="2.846" r="2.72" />
                                                    <circle cx="51.405" cy="2.846" r="2.72" />
                                                    <circle cx="63.441" cy="2.846" r="2.72" />
                                                    <circle cx="75.479" cy="2.846" r="2.72" />
                                                    <circle cx="87.514" cy="2.846" r="2.719" />
                                                </g>
                                                <g transform="translate(0 73)">
                                                    <circle cx="3.261" cy="2.926" r="2.72" />
                                                    <circle cx="15.296" cy="2.926" r="2.719" />
                                                    <circle cx="27.333" cy="2.926" r="2.72" />
                                                    <circle cx="39.369" cy="2.926" r="2.72" />
                                                    <circle cx="51.405" cy="2.926" r="2.72" />
                                                    <circle cx="63.441" cy="2.926" r="2.72" />
                                                    <circle cx="75.479" cy="2.926" r="2.72" />
                                                    <circle cx="87.514" cy="2.926" r="2.719" />
                                                </g>
                                                <g transform="translate(0 85)">
                                                    <circle cx="3.261" cy="3.006" r="2.72" />
                                                    <circle cx="15.296" cy="3.006" r="2.719" />
                                                    <circle cx="27.333" cy="3.006" r="2.72" />
                                                    <circle cx="39.369" cy="3.006" r="2.72" />
                                                    <circle cx="51.405" cy="3.006" r="2.72" />
                                                    <circle cx="63.441" cy="3.006" r="2.72" />
                                                    <circle cx="75.479" cy="3.006" r="2.72" />
                                                    <circle cx="87.514" cy="3.006" r="2.719" />
                                                </g>
                                            </g>
                                        </g>
                                    </g>
                                </svg>
                                <svg
                                    viewBox="0 0 91 91"
                                    className="absolute bottom-0 right-0 z-0 w-32 h-32 -mb-12 -mr-12 text-indigo-500 fill-current"
                                >
                                    <g stroke="none" strokewidth={1} fillrule="evenodd">
                                        <g fillrule="nonzero">
                                            <g>
                                                <g>
                                                    <circle cx="3.261" cy="3.445" r="2.72" />
                                                    <circle cx="15.296" cy="3.445" r="2.719" />
                                                    <circle cx="27.333" cy="3.445" r="2.72" />
                                                    <circle cx="39.369" cy="3.445" r="2.72" />
                                                    <circle cx="51.405" cy="3.445" r="2.72" />
                                                    <circle cx="63.441" cy="3.445" r="2.72" />
                                                    <circle cx="75.479" cy="3.445" r="2.72" />
                                                    <circle cx="87.514" cy="3.445" r="2.719" />
                                                </g>
                                                <g transform="translate(0 12)">
                                                    <circle cx="3.261" cy="3.525" r="2.72" />
                                                    <circle cx="15.296" cy="3.525" r="2.719" />
                                                    <circle cx="27.333" cy="3.525" r="2.72" />
                                                    <circle cx="39.369" cy="3.525" r="2.72" />
                                                    <circle cx="51.405" cy="3.525" r="2.72" />
                                                    <circle cx="63.441" cy="3.525" r="2.72" />
                                                    <circle cx="75.479" cy="3.525" r="2.72" />
                                                    <circle cx="87.514" cy="3.525" r="2.719" />
                                                </g>
                                                <g transform="translate(0 24)">
                                                    <circle cx="3.261" cy="3.605" r="2.72" />
                                                    <circle cx="15.296" cy="3.605" r="2.719" />
                                                    <circle cx="27.333" cy="3.605" r="2.72" />
                                                    <circle cx="39.369" cy="3.605" r="2.72" />
                                                    <circle cx="51.405" cy="3.605" r="2.72" />
                                                    <circle cx="63.441" cy="3.605" r="2.72" />
                                                    <circle cx="75.479" cy="3.605" r="2.72" />
                                                    <circle cx="87.514" cy="3.605" r="2.719" />
                                                </g>
                                                <g transform="translate(0 36)">
                                                    <circle cx="3.261" cy="3.686" r="2.72" />
                                                    <circle cx="15.296" cy="3.686" r="2.719" />
                                                    <circle cx="27.333" cy="3.686" r="2.72" />
                                                    <circle cx="39.369" cy="3.686" r="2.72" />
                                                    <circle cx="51.405" cy="3.686" r="2.72" />
                                                    <circle cx="63.441" cy="3.686" r="2.72" />
                                                    <circle cx="75.479" cy="3.686" r="2.72" />
                                                    <circle cx="87.514" cy="3.686" r="2.719" />
                                                </g>
                                                <g transform="translate(0 49)">
                                                    <circle cx="3.261" cy="2.767" r="2.72" />
                                                    <circle cx="15.296" cy="2.767" r="2.719" />
                                                    <circle cx="27.333" cy="2.767" r="2.72" />
                                                    <circle cx="39.369" cy="2.767" r="2.72" />
                                                    <circle cx="51.405" cy="2.767" r="2.72" />
                                                    <circle cx="63.441" cy="2.767" r="2.72" />
                                                    <circle cx="75.479" cy="2.767" r="2.72" />
                                                    <circle cx="87.514" cy="2.767" r="2.719" />
                                                </g>
                                                <g transform="translate(0 61)">
                                                    <circle cx="3.261" cy="2.846" r="2.72" />
                                                    <circle cx="15.296" cy="2.846" r="2.719" />
                                                    <circle cx="27.333" cy="2.846" r="2.72" />
                                                    <circle cx="39.369" cy="2.846" r="2.72" />
                                                    <circle cx="51.405" cy="2.846" r="2.72" />
                                                    <circle cx="63.441" cy="2.846" r="2.72" />
                                                    <circle cx="75.479" cy="2.846" r="2.72" />
                                                    <circle cx="87.514" cy="2.846" r="2.719" />
                                                </g>
                                                <g transform="translate(0 73)">
                                                    <circle cx="3.261" cy="2.926" r="2.72" />
                                                    <circle cx="15.296" cy="2.926" r="2.719" />
                                                    <circle cx="27.333" cy="2.926" r="2.72" />
                                                    <circle cx="39.369" cy="2.926" r="2.72" />
                                                    <circle cx="51.405" cy="2.926" r="2.72" />
                                                    <circle cx="63.441" cy="2.926" r="2.72" />
                                                    <circle cx="75.479" cy="2.926" r="2.72" />
                                                    <circle cx="87.514" cy="2.926" r="2.719" />
                                                </g>
                                                <g transform="translate(0 85)">
                                                    <circle cx="3.261" cy="3.006" r="2.72" />
                                                    <circle cx="15.296" cy="3.006" r="2.719" />
                                                    <circle cx="27.333" cy="3.006" r="2.72" />
                                                    <circle cx="39.369" cy="3.006" r="2.72" />
                                                    <circle cx="51.405" cy="3.006" r="2.72" />
                                                    <circle cx="63.441" cy="3.006" r="2.72" />
                                                    <circle cx="75.479" cy="3.006" r="2.72" />
                                                    <circle cx="87.514" cy="3.006" r="2.719" />
                                                </g>
                                            </g>
                                        </g>
                                    </g>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default StudentSignin