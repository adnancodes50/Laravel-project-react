import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Herosection from "./components/HeroSection";
import Categories from "./components/Category";
import Stories from "./components/Story";
import Products from "./components/Product";
import Caps from "./components/Cap";
import Abouts from "./components/About";
import Testimonials from "./components/Testimonial";
import Blogs from "./components/Blog";
import 'bootstrap/dist/css/bootstrap.min.css';
import Questions from "./components/Question";

// Correct import path for Hero.js (Product Page)
import Hero from './products/Hero';  // Updated import

import './App.css';
import BlogPost from "./Blog/BlogPost";
import ContactUs from "./contact/Header";
import Cart from "./cart/Header";

// Import the new Login and Register components
import Login from "./auth/Login";
import Register from "./auth/Register";

const Home = () => <div className=""></div>;
const Blog = () => <div className="p-4">Blog Page</div>;
const Contact = () => <div className="p-4">Contact Page</div>;
const cart = () => <div className="p-4">Your Cart</div>;
const Search = () => <div className="p-4">Search Page</div>;

function App() {
  return (
    <Router>
      {/* Render only the sections for the landing page */}
      <Routes>
        <Route 
          path="/" 
          element={
            <>
              <Herosection />
              <Categories />
              <Stories />
              <Products />
              <Caps />
              <Abouts />
              <Testimonials />
              <Blogs />
              <Questions />
            </>
          } 
        />
        
        {/* This will be your Product Page */}
        <Route path="/product" element={<Hero />} />
        
        <Route path="/blog" element={<BlogPost />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/search" element={<Search />} />
        
        {/* Add routes for Login and Register pages */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
