import React from "react";
import Navbar from "./Navbar";
// Import the Navbar component

// Adjust the import path as necessary

import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle.min'; // Import Bootstrap JS
import ProductPage from "./ProductList";
import Footer from "./Footer"; // Import Footer component




const Hero = () => {
  return (
    <div>
      <section className="py-5" style={{ backgroundImage: "url('/assets/img12.png')", backgroundSize: "cover", backgroundPosition: "center", backgroundAttachment: "fixed" }}>
        <div className="container"><Navbar /> </div>
        <div className="container">
          <div className="row align-items-center mt-5">


            <div className="col-md-6 text-center text-md-start">
              <h1 className=" text-white fw-bold mb-2">
                UrbanGents <br />
              </h1>
              <p className="lead text-white mb-3 fw-normal font-bold">
                Discover the cozy and stylish warmth you deserve. Your comfort zone starts here.
              </p>
            </div>
          </div>
          <ProductPage />



        </div>



      </section>
      <Footer />
    </div>
  );
};

export default Hero;
