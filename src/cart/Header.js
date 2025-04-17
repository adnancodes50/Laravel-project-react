// src/contact/Header.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from "../components/Navbar";
import Tshirt from "./T-Shirt";

import About from "./About";

import Video from "./Video";

import Related from     "./Related";

import Footer from "../products/Footer";

const Header = () => {
  return (
    <div className='container-fluid'>
        
        
        <div
      className="d-flex align-items-center justify-content-center text-white text-center"
      style={{
        backgroundImage: "url('/assets/img13.png')", // From public folder
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '300px',
        position: 'relative',
      }}
    >
        
      {/* Overlay */}
      <div 
        style={{
          backgroundColor: 'rgba(192, 182, 182, 0.5)',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 1,
        }}
      >
        <div className='container mt-4'>
          <Navbar />
        </div>
      </div>

      {/* Title */}
      <h1
        className="fw-bold display-5 py-5"
        style={{ position: 'relative', zIndex: 2 }}
      >
        T-Shirts
      </h1>
    </div>

    <Tshirt/>
    <About/>
    <Video/>
    <Related/>
    <Footer/>

    </div>
  );
};

export default Header;
    