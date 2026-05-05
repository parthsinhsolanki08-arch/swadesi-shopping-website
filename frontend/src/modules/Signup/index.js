import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { registerUser } from '../../api';
import toast from 'react-hot-toast';

const Signup = () => {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await registerUser(formData);
      if (response.message === 'User created successfully') {
        toast.success('Registration successful! Please login.');
        navigate('/login');
      } else {
        toast.error(response.message || 'Registration failed');
      }
    } catch (err) {
      toast.error('An error occurred during registration.');
    }
  };

  return (
    <section className="text-gray-600 body-font min-h-[70vh] flex items-center justify-center">
      <div className="container px-5 py-24 mx-auto flex flex-wrap items-center justify-center">
        <div className="lg:w-2/6 md:w-1/2 bg-white rounded-lg p-8 flex flex-col w-full mt-10 md:mt-0 shadow-2xl relative z-10 border border-gray-100">
          <h2 className="text-gray-900 text-2xl font-bold title-font mb-5 text-center">Sign Up</h2>
          <form onSubmit={handleSubmit}>
            <div className="relative mb-4">
              <label className="leading-7 text-sm text-gray-600 font-semibold">Full Name</label>
              <input type="text" required onChange={(e) => setFormData({...formData, name: e.target.value})} className="w-full bg-white rounded-md border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out mt-1" />
            </div>
            <div className="relative mb-4">
              <label className="leading-7 text-sm text-gray-600 font-semibold">Email Account</label>
              <input type="email" required onChange={(e) => setFormData({...formData, email: e.target.value})} className="w-full bg-white rounded-md border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out mt-1" />
            </div>
            <div className="relative mb-4">
              <label className="leading-7 text-sm text-gray-600 font-semibold">Password</label>
              <input type="password" required onChange={(e) => setFormData({...formData, password: e.target.value})} className="w-full bg-white rounded-md border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out mt-1" />
            </div>
            <button type="submit" className="text-white bg-indigo-600 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-700 rounded-md text-lg w-full font-bold transition-all mt-4">Register Account</button>
            <p className="text-xs text-gray-500 mt-3 text-center">
              Already have an account? <Link to="/login" className="text-indigo-600 font-bold hover:underline">Login here</Link>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Signup;
