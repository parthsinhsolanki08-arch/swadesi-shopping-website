import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'

const navigations = [
  { name: 'Home', path: '/' },
  { name: 'Products', path: '/products' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' }
]

const Header = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  
  const user = JSON.parse(localStorage.getItem('user'));

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/products?search=${searchTerm}`);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    toast.success('Logged out successfully');
    navigate('/');
    window.location.reload();
  };

  return (
    <header className="text-gray-600 body-font shadow-lg relative z-20 bg-white">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link to={'/'} className="flex cursor-pointer title-font font-extrabold items-center text-gray-900 mb-4 md:mb-0">
          <div className="w-10 h-10 text-white p-2 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex justify-center items-center shadow-lg">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
          </div>
          <span className="ml-3 text-2xl bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">Swadesi Bazar</span>
        </Link>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center font-semibold">
          {navigations.map((navigation, index) => (
            <Link key={index} to={navigation.path} className="mr-5 hover:text-indigo-600 transition-colors uppercase text-sm tracking-wider">{navigation.name}</Link>
          ))}
          {user?.role === 'admin' && (
            <Link to="/admin" className="mr-5 text-purple-600 hover:text-purple-800 transition-colors uppercase text-sm tracking-wider border-b-2 border-purple-200">Admin</Link>
          )}
        </nav>

        <form onSubmit={handleSearch} className="relative mx-4 mt-4 md:mt-0 flex">
          <input 
            type="text" 
            placeholder="Search products..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-gray-100 rounded-full border border-transparent focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-sm outline-none text-gray-700 py-2 px-5 leading-8 transition-colors duration-200 ease-in-out"
          />
          <button type="submit" className="absolute right-0 top-0 mt-3 mr-4 text-gray-400 hover:text-indigo-500">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
          </button>
        </form>

        <div className="flex items-center space-x-4 mt-4 md:mt-0">
          {user ? (
             <div className="flex items-center space-x-3">
               <span className="text-sm font-semibold text-gray-700">Hi, {user.name.split(' ')[0]}</span>
               <button onClick={handleLogout} className="text-xs text-red-500 hover:text-red-700 font-bold uppercase tracking-wider">Logout</button>
             </div>
          ) : (
            <Link to="/login" className="inline-flex items-center text-gray-700 bg-gray-100 border-0 py-2 px-4 focus:outline-none hover:bg-gray-200 rounded-full text-sm font-bold shadow-sm transition-all transform hover:-translate-y-0.5">
              Login
            </Link>
          )}

          <Link to={'/cart'} className="inline-flex items-center text-white bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded-full text-sm font-bold shadow-md transition-all transform hover:-translate-y-0.5">
            Cart 🛒
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header