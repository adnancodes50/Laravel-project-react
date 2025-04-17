import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const AboutUsSection = () => {
  return (
    <section className="py-5">
      <div className="container">
        <div className="row align-items-center">
          {/* Image Column */}
          <div className="col-md-6 position-relative mb-4 mb-md-0">
            <div className="position-relative">
              <img
                src="/assets/img6.png" // Replace with your image
                alt="T-shirt 1"
                className="img-fluid rounded shadow"
                style={{ maxWidth: "40%", height: "350px", transform: "rotate(-5deg)" }}
              />
              <img
                src="/assets/img5.png" // Replace with your top overlapping image
                alt="T-shirt 2"
                className="position-absolute rounded shadow"
                style={{
                  top: "%",
                  left: "30%",
                  width: "40%",
                  transform: "rotate(-5deg)",
                  height: "350px",
                  zIndex: 8,
                }}
              />
            </div>
          </div>

          {/* Text Column */}
          <div className="col-md-6">
            <p className="text-danger fw-semibold">About Us</p>
            <h2 className="fw-bold mb-3">
              Your Fashion Journey, <br /> Express Delivered
            </h2>
            <p className="text-muted mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation.
            </p>

            {/* Buttons */}
            <div className="d-flex gap-2">
              <button className="btn btn-outline-dark rounded-circle">
                <FaArrowLeft />
              </button>
              <button className="btn btn-danger rounded-circle">
                <FaArrowRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
