import React from "react";
import { Link } from "react-router-dom"; // Import Link for routing
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./Navbar";

const heroImage = "/assets/hero.png"; // Path to your hero image

const HeroSection = () => {
  return (
    <section className="py-5" style={{ backgroundColor: "#FBCEB1" }}>
      <div className="container">
        <Navbar />
        <div className="row align-items-center">
          <div className="col-md-6 order-1 order-md-2 text-center mb-2 mb-md-0">
            <img
              src={heroImage}
              alt="Hero"
              className="img-fluid"
              style={{ maxWidth: "80%", height: "auto" }}
            />
          </div>

          <div className="col-md-6 order-2 order-md-1 text-center text-md-start">
            <h1 className="display-4 text-danger fw-bold mb-2">
              WARMUPS <br />
              <span className="text-dark">SUPREME</span>
            </h1>
            <p className="lead text-muted mb-3">
              Discover the cozy and stylish warmth you deserve. Your comfort zone starts here.
            </p>
            {/* Shop Now button with a Link to /product */}
            <Link to="/product" className="btn btn-danger btn-lg rounded-pill">
              Shop Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
