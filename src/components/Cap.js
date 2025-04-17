import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const ProductShowcase = () => {
  return (
    <section className="py-5 text-center">
      <div className="container">
        {/* Big faded heading */}
        <h1
          className="display-3 fw-bold mb-3"
          style={{ color: "#ccc", opacity: 0.3 }}
        >
          MW08
        </h1>

        {/* Product name */}
        <h4 className="fw-bold">UrbanFlex Snapback</h4>

        {/* Description */}
        <p className="text-muted mx-auto" style={{ maxWidth: "600px" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation.
        </p>

        {/* CTA Button */}
        <a href="/product" className="btn btn-dark rounded-pill px-4 py-2 mt-2">
          Shop Now &rarr;
        </a>

        {/* Product Image */}
        <div className="mt-5">
          <img
            src="/assets/img4.png" // ← Replace with your product image path
            alt="Snapback Cap"
            className="img-fluid"
            style={{ maxHeight: "300px" }}
          />
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
