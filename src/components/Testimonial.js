import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaGripLines } from "react-icons/fa";

const TestimonialSection = () => {
  const imageStyle = {
    height: "320px",
    width: "100%",
    objectFit: "cover",
    borderRadius: "8px",
  };

  const dotStyle = {
    width: "10px",
    height: "10px",
  };

  return (
    <div className="container py-5 text-center">
      {/* Image Row */}
      <div className="row justify-content-center m-0 align-items-stretch">
        <div className="col-6 col-md-5">
          <div className="position-relative h-100">
            <img
              src="/assets/img6.png"
              alt="HoodLoom 1"
              style={imageStyle}
              className="img-fluid"
            />
            <div className="position-absolute bottom-0 start-0 text-white p-2 fw-bold">
              HoodLoom
            </div>
          </div>
        </div>

        {/* Middle Toggle Icon */}
        <div className="col-1 d-flex align-items-center justify-content-center">
          <div className="bg-white border rounded-circle p-2  shadow">
            <FaGripLines />
          </div>
        </div>

        <div className="col-6 col-md-5">
          <div className="position-relative h-100">
            <img
              src="/assets/img5.png"
              alt="HoodLoom 2"
              style={imageStyle}
              className="img-fluid"
            />
            <div className="position-absolute bottom-0 start-0 text-white p-2 fw-bold">
              HoodLoom
            </div>
          </div>
        </div>
      </div>

      {/* Testimonial */}
      <div className="mt-5 px-3">
        <p className="fs-6 fst-italic text-muted">
          <span className="fs-2 text-dark me-2">“</span>
          The Cozy Comfort Hoodie exceeded my expectations. The fabric is incredibly soft,
          and the fit is just perfect. It keeps me warm without feeling bulky, and the
          attention to detail in the stitching and design is evident. Definitely my new
          go-to hoodie for chilly evenings.
        </p>
        <h6 className="text-danger fw-bold">Men’sHealth</h6>

        {/* Dots (Pagination) */}
        <div className="d-flex justify-content-center gap-2 mt-3">
          <span className="bg-dark rounded-circle" style={dotStyle}></span>
          <span className="bg-secondary rounded-circle" style={dotStyle}></span>
          <span className="bg-secondary rounded-circle" style={dotStyle}></span>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
