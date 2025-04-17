import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaTruck, FaLock, FaHeadphones } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="text-light" style={{ backgroundColor: "#1c1f25", marginBottom: "0px" }}>
      {/* Top Features */}
      <div className="container py-4 border-bottom border-secondary">
        <div className="row text-center">
          <div className="col-md-4 mb-3 mb-md-0">
            <FaTruck size={20} className="me-2" />
            <strong>Free Shipping & Returns</strong>
          </div>
          <div className="col-md-4 mb-3 mb-md-0">
            <FaLock size={20} className="me-2" />
            <strong>100% Secure Payment</strong>
          </div>
          <div className="col-md-4">
            <FaHeadphones size={20} className="me-2" />
            <strong>24/7 Customers Support</strong>
          </div>
        </div>
      </div>

      {/* Footer Content */}
      <div className="container py-5">
        <div className="row text-start">
          {/* Brand */}
          <div className="col-md-3 mb-4">
            <h5 className="text-danger fw-bold">WARDROBE<br />SUPREME</h5>

            <div className="d-flex mt-3">
              <input
                type="email"
                className="form-control me-2"
                placeholder="Enter Email"
                style={{ maxWidth: "180px" }}
              />
              <button className="btn btn-danger">Subscribe</button>
            </div>

            {/* Social Icons */}
            <div className="mt-3 d-flex gap-3">
              <FaFacebookF />
              <FaTwitter />
              <FaInstagram />
              <FaLinkedinIn />
            </div>
          </div>

          {/* Categories */}
          <div className="col-md-3 mb-4">
            <h6 className="text-danger fw-bold">Categories</h6>
            <ul className="list-unstyled">
              <li>Men's</li>
              <li>Women's</li>
              <li>Caps</li>
              <li>Cups</li>
            </ul>
          </div>

          {/* Information */}
          <div className="col-md-3 mb-4">
            <h6 className="text-danger fw-bold">Information</h6>
            <ul className="list-unstyled">
              <li>About Us</li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
              <li>Shipping Policy</li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="col-md-3 mb-4">
            <h6 className="text-danger fw-bold">Quick Links</h6>
            <ul className="list-unstyled">
              <li>Your Cart</li>
              <li>Your Account</li>
              <li>Contact Us</li>
              <li>Blogs</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="text-center py-3 border-top border-secondary">
        <span className="fw-bold text-danger">StyleSwift</span> &copy; {new Date().getFullYear()} — All rights reserved.
      </div>

    </footer>
  );
};

export default Footer;
