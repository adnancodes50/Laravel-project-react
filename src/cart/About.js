import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'; // Add CSS below to this file

const ProductSpecs = () => {
  return (
    <div className="container py-5">
      <div className="row align-items-center">
        {/* LEFT TEXT SECTION */}
        <div className="col-md-6">
          <p className="text-danger fw-semibold">About the MW08</p>
          <h2 className="fw-bold">Unveiling Timeless <br />T-Shirt Statements</h2>
          <p className="text-muted mt-3" style={{ maxWidth: '400px' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.
          </p>
        </div>

        {/* RIGHT TABLE SECTION */}
        <div className="col-md-6">
          <div className="bg-light rounded-4 p-4 shadow-sm">
            <div className="d-flex justify-content-between border-bottom py-2">
              <span className="fw-semibold">Model</span>
              <span className="text-muted">MW08</span>
            </div>
            <div className="d-flex justify-content-between border-bottom py-2">
              <span className="fw-semibold">Size</span>
              <span className="text-muted">Large</span>
            </div>
            <div className="d-flex justify-content-between border-bottom py-2">
              <span className="fw-semibold">Color</span>
              <span className="text-muted">Blue</span>
            </div>
            <div className="d-flex justify-content-between border-bottom py-2">
              <span className="fw-semibold">Color</span>
              <span className="text-muted">Blue</span>
            </div>
            <div className="d-flex justify-content-between py-2">
              <span className="fw-semibold">Color</span>
              <span className="text-muted">Blue</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSpecs;
