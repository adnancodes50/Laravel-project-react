import React from "react";
import { Dropdown } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min'; // Required for collapse

// Product list using images from public/assets
const products = [
  { id: 1, name: "HoodVibe", price: "$18.00", img: "/assets/img1.png", tag: "Quick Add", rating: 4.5 },
  { id: 2, name: "HoodVibe", price: "$18.00", img: "/assets/img2.png", rating: 3.8 },
  { id: 3, name: "TeeVogue", price: "$22.00", img: "/assets/img3.png", tag: "Limited Stock", rating: 4.0 },
  { id: 4, name: "TeeVogue", price: "$22.00", img: "/assets/img4.png", tag: "Sale", rating: 4.7 },
  { id: 5, name: "SnugStyle", price: "$26.00", img: "/assets/img5.png", rating: 5.0 },
];

const ProductPage = () => {
  return (
    <div className="container py-5" style={{ backgroundColor: "#f8f9fa" }}>
      {/* Filter + Sort Bar */}
      <div className="d-flex justify-content-between flex-wrap gap-3 mb-4 bg-white">
        <div className="d-flex gap-3 flex-wrap">
          <Dropdown>
            <Dropdown.Toggle variant="light">Show All Products</Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item>All</Dropdown.Item>
              <Dropdown.Item>Hoodies</Dropdown.Item>
              <Dropdown.Item>Tees</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Dropdown>
            <Dropdown.Toggle variant="light">Product Type</Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item>Hoodies</Dropdown.Item>
              <Dropdown.Item>Shirts</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Dropdown>
            <Dropdown.Toggle variant="light">Color</Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item>Red</Dropdown.Item>
              <Dropdown.Item>Blue</Dropdown.Item>
              <Dropdown.Item>Green</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Dropdown>
            <Dropdown.Toggle variant="light">Price</Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item>Low to High</Dropdown.Item>
              <Dropdown.Item>High to Low</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>

        <Dropdown>
          <Dropdown.Toggle variant="light">Sort By: Featured</Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item>Featured</Dropdown.Item>
            <Dropdown.Item>Alphabetical</Dropdown.Item>
            <Dropdown.Item>Newest</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>

      {/* Grid with Featured Banner and Product Cards */}
      <div className="row g-4 ">
        {/* Featured card */}
       

        {/* Product cards */}
        {products.map((product) => (
          <div className="col-md-4" key={product.id}>
            <div className="card product-card position-relative">
              {product.tag && (
                <span className="badge bg-danger position-absolute top-0 start-0 m-2">
                  {product.tag}
                </span>
              )}
              <img src={product.img} className="card-img-top" alt={product.name} />
              <div className="card-body d-flex flex-column text-center">
                <h6 className="mb-1">{product.name}</h6>
                <p className="text-muted">{product.price}</p>

                {/* Rating display */}
                <div className="d-flex justify-content-center align-items-center">
                  <span className="text-warning">
                    {"★".repeat(Math.floor(product.rating))}
                    {"☆".repeat(5 - Math.floor(product.rating))}
                  </span>
                  <span className="ms-2">{product.rating}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="d-flex justify-content-center mt-5">
        <nav>
          <ul className="pagination">
            <li className="page-item active">
              <button className="page-link">1</button>
            </li>
            <li className="page-item">
              <button className="page-link">2</button>
            </li>
            <li className="page-item">
              <button className="page-link">3</button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default ProductPage;
