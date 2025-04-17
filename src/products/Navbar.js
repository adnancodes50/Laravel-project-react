import React from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaSearch } from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min'; // Required for collapse

const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light"
      style={{ backgroundColor: "", position: "sticky", top: 0, zIndex: 100 }}
    >
      <div className="container-fluid">
        {/* Brand Logo */}
        <Link className="navbar-brand fw-bold text-danger" to="/" style={{ fontStyle: "italic" }}>
          WARPUPS <br />
          <span className="text-dark fw-normal">SUPREME</span>
        </Link>

        {/* Toggler for mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Nav Items */}
        <div className="collapse navbar-collapse justify-content-end" id="navbarContent">
          <ul className="navbar-nav mb-2 mb-lg-0 align-items-center gap-lg-3">
            <li className="nav-item">
              <Link className="nav-link" to="/">HOME</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/product">PRODUCT</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/blog">BLOG</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">CONTACT US</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/search">
                <FaSearch />
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="btn btn-danger rounded-pill px-3 py-1 d-flex align-items-center gap-2"
                to="/cart"
              >
                <FaShoppingCart /> Your Cart
              </Link>
            </li>
            {/* Login and Sign Up */}
            <li className="nav-item">
              <Link className="nav-link" to="/login">Login</Link>
            </li>
            <li className="nav-item">
              <Link className="btn btn-outline-danger rounded-pill px-3 py-1" to="/signup">
                Sign Up
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
