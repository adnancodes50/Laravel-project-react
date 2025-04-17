import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaStar } from "react-icons/fa";

// Dummy product data
const products = [
  {
    title: "HoodVibe",
    price: "$12.00",
    rating: 2.6,
    image: "/assets/img1.png",
    quickAdd: true,
  },
  {
    title: "StreetSwaddle",
    price: "$12.00",
    rating: 2.6,
    image: "/assets/img3.png",
  },
  {
    title: "TopTrendCaps",
    price: "$12.00",
    rating: 2.6,
    image: "/assets/img2.png",
  },
  {
    title: "MugMingle",
    price: "$12.00",
    rating: 2.6,
    image: "/assets/img2.png",
  },
  {
    title: "CozyBeanie",
    price: "$15.00",
    rating: 4.2,
    image: "/assets/img3.png",
  },
  {
    title: "UrbanStyle",
    price: "$18.00",
    rating: 3.9,
    image: "/assets/img1.png",
  },
];

const BestProducts = () => {
  const [showAll, setShowAll] = useState(false);

  const visibleProducts = showAll ? products : products.slice(0, 4);

  return (
    <div className="container py-5">
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h4 className="fw-bold">Best Products</h4>
        <button
          className="btn btn-light d-flex align-items-center gap-1"
          onClick={() => setShowAll(!showAll)}
        >
          {showAll ? "Show Less" : "View All"}{" "}
          <span className="fw-bold">&rarr;</span>
        </button>
      </div>

      {/* Product Grid */}
      <div className="row g-4">
        {visibleProducts.map((product, index) => (
          <div key={index} className="col-6 col-md-3">
            <div
              className="bg-success-subtle p-3 rounded text-center position-relative h-100 d-flex flex-column justify-content-between"
              style={{ minHeight: "350px" }}
            >
              {/* Image */}
              <div className="position-relative mb-2" style={{ height: "180px" }}>
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-100 h-100"
                  style={{ objectFit: "cover", borderRadius: "12px" }}
                />
                {product.quickAdd && (
                  <button
                    className="btn btn-dark btn-sm position-absolute top-50 start-50 translate-middle"
                    style={{ borderRadius: "20px", padding: "4px 12px", fontSize: "0.75rem" }}
                  >
                    + Quick Add
                  </button>
                )}
              </div>

              {/* Product Info */}
              <div className="text-start mt-auto">
                <h6 className="mb-1">{product.title}</h6>
                <p className="text-muted mb-1">{product.price}</p>
                <div className="d-flex align-items-center gap-1 text-warning">
                  <small>{product.rating}</small>
                  <FaStar size={14} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestProducts;
