// src/contact/Header.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ContactNum from "./ContactNum";
import Form from "./Form";
import Footer from "../products/Footer";
import Navbar from "../components/Navbar";

const Header = () => {
  return (
    <div className='container-fluid'>
        
        
        <div
      className="d-flex align-items-center justify-content-center text-white text-center"
      style={{
        backgroundImage: "url('/assets/img133.png')", // From public folder
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '300px',
        position: 'relative',
      }}
    >
        
      {/* Overlay */}
      <div 
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
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
        className="fw-bold display-5"
        style={{ position: 'relative', zIndex: 2 }}
      >
        CONTACT US
      </h1>
    </div>

    <ContactNum />
    <Form />
    <Footer />

    </div>
  );
};

export default Header;
    