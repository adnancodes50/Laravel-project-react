import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  FaTruck,
  FaLock,
  FaHeadset,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-5">
      {/* Top Info Strip */}
      <div className="container border-bottom pb-4 mb-4">
        <div className="row text-center text-md-start">
          <div className="col-md-4 mb-3">
            <FaTruck className="text-white mb-2" size={24} />
            <h6 className="fw-bold mb-1">Free Shipping & Returns</h6>
            <small className="text-muted">
              Free Shipping On All Orders over $99
            </small>
          </div>
          <div className="col-md-4 mb-3">
            <FaLock className="text-white mb-2" size={24} />
            <h6 className="fw-bold mb-1">100% Secure Payment</h6>
            <small className="text-muted">We ensure secure payment</small>
          </div>
          <div className="col-md-4 mb-3">
            <FaHeadset className="text-white mb-2" size={24} />
            <h6 className="fw-bold mb-1">24/7 Customers Support</h6>
            <small className="text-muted">24/7 Dedicated Support</small>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container pb-4">
        <div className="row">
          {/* Branding + Newsletter */}
          <div className="col-md-3 mb-4">
            <h4 className="fw-bold text-danger">
              WARDROBE <br /> SUPREME
            </h4>
            <p className="text-muted">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt.
            </p>
            <div className="d-flex">
              <input
                type="email"
                placeholder="Enter Email"
                className="form-control me-2"
              />
              <button className="btn btn-danger">Subscribe</button>
            </div>
            <div className="d-flex gap-3 mt-3">
              <FaFacebookF className="footer-icon" />
              <FaTwitter className="footer-icon" />
              <FaInstagram className="footer-icon" />
              <FaLinkedinIn className="footer-icon" />
            </div>
          </div>

          {/* Categories */}
          <div className="col-md-3 mb-4">
            <h6 className="text-danger fw-bold mb-3">Categories</h6>
            <ul className="list-unstyled">
              <li><a className="footer-link" href="#">Men's</a></li>
              <li><a className="footer-link" href="#">Women's</a></li>
              <li><a className="footer-link" href="#">Caps</a></li>
              <li><a className="footer-link" href="#">Cups</a></li>
            </ul>
          </div>

          {/* Information */}
          <div className="col-md-3 mb-4">
            <h6 className="text-danger fw-bold mb-3">Information</h6>
            <ul className="list-unstyled">
              <li><a className="footer-link" href="#">About Us</a></li>
              <li><a className="footer-link" href="#">Privacy Policy</a></li>
              <li><a className="footer-link" href="#">Terms & Conditions</a></li>
              <li><a className="footer-link" href="#">Shipping Policy</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="col-md-3 mb-4">
            <h6 className="text-danger fw-bold mb-3">Quick Links</h6>
            <ul className="list-unstyled">
              <li><a className="footer-link" href="#">Your Cart</a></li>
              <li><a className="footer-link" href="#">Your Account</a></li>
              <li><a className="footer-link" href="#">Contact Us</a></li>
              <li><a className="footer-link" href="#">Blogs</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Strip */}
      <div className="text-center py-3 border-top border-secondary text-muted">
        Copyright © 2024 <span className="text-danger">Styleswift</span>. All rights reserved
      </div>

      {/* Inline CSS for hover underline only */}
      <style jsx="true">{`
        .footer-link {
          color: #fff;
          text-decoration: none;
          position: relative;
          padding: 4px 0;
          transition: all 0.3s ease;
        }

        .footer-link::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: 0;
          height: 2px;
          width: 0;
          background-color: #fff;
          transition: width 0.3s ease;
        }

        .footer-link:hover::after {
          width: 100%;
        }

        .footer-icon {
          cursor: pointer;
          transition: color 0.3s;
        }

        .footer-icon:hover {
          color: #dc3545;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
