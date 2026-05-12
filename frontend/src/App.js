import React from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './modules/Home';
import { Routes, Route } from 'react-router-dom';
import Product from './modules/Product';
import Products from './modules/Products';
import CategoryProducts from './modules/CategoryProducts';
import Cart from './modules/Cart';
import Contact from './components/Contact';
import Login from './modules/Login';
import Signup from './modules/Signup';
import AdminDashboard from './modules/Admin';
import About from './modules/About';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div>
      <Toaster position="top-center" reverseOrder={false} />
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/products/:id" element={<Product/>} />
        <Route path="/products" element={<Products/>} />
        <Route path="/categories/:name" element={<CategoryProducts/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/admin" element={<AdminDashboard/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="*" element={<div className="h-[60vh] flex justify-center items-center text-4xl text-gray-700">404 - Page Not Found</div>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
