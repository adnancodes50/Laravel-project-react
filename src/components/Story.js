import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

// Sample image data
const styleData = [
  {
    title: "Lightweight Luxury Products",
    image: "/assets/img1.png",
  },
  {
    title: "Elevate Your Style Journey",
    image: "/assets/img2.png",
  },
  {
    title: "Lightweight Luxury Products",
    image: "/assets/img3.png",
  },
  
];

const StyleSection = () => {
  return (
    <div className="container py-5">
      {/* Heading */}
      <h2 className="fw-bold text-center text-danger display-5 mb-4">
        Unveil Your Style Story
      </h2>

      {/* Cards Row */}
      <div className="row g-4 justify-content-center">
        {styleData.map((item, index) => (
          <div key={index} className="col-10 col-sm-6 col-md-4 col-lg-3">
            <div
              className="position-relative overflow-hidden rounded"
              style={{ height: "250px", cursor: "pointer" }}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-100 h-100 object-fit-cover rounded"
              />
              <div
                className="position-absolute bottom-0 w-100 text-white text-start p-2"
                style={{
                  background: "rgba(0,0,0,0.5)",
                  backdropFilter: "blur(3px)",
                }}
              >
                <small className="fw-semibold">{item.title}</small>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StyleSection;
