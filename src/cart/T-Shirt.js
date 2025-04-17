import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'; // add the CSS below to this file

const ProductDetail = () => {
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState(0);
  const [selectedImage, setSelectedImage] = useState(0);

  const images = [
    '/assets/img1.png',
    '/assets/img2.png',
    '/assets/img3.png',
    '/assets/img4.png',
  ];

  const colors = [
    '/assets/img1.png',
    '/assets/img2.png',
    '/assets/img3.png',
  ];

  return (
    <div className="container py-5">
      <div className="row bg-white shadow rounded-4 p-4 align-items-center">
        {/* Left Side Images */}
        <div className="col-md-2 d-flex flex-column align-items-center gap-3">
          {images.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt="thumb"
              className={`img-thumbnail small-thumb ${selectedImage === idx ? 'selected-thumb' : ''}`}
              onClick={() => setSelectedImage(idx)}
              style={{ cursor: 'pointer' }}
            />
          ))}
        </div>

        {/* Main Image */}
        <div className="col-md-4 text-center">
          <img src={images[selectedImage]} alt="main" className="img-fluid main-image" />
        </div>

        {/* Product Details */}
        <div className="col-md-6">
          <p className="text-danger fw-semibold">Unique & Simple</p>
          <h2 className="fw-bold">NovaVista T-Shirt Line</h2>
          <h4 className="text-muted">$29.00</h4>
          <div className="text-warning mb-3">⭐⭐⭐⭐☆ (4.5)</div>

          <p className="fw-semibold">Color/Size Combinations:</p>
          <div className="d-flex gap-2 mb-3">
            {colors.map((clr, idx) => (
              <img
                key={idx}
                src={clr}
                alt="color"
                className={`img-thumbnail color-thumb ${selectedColor === idx ? 'border-primary' : ''}`}
                onClick={() => setSelectedColor(idx)}
                style={{ width: '50px', cursor: 'pointer' }}
              />
            ))}
          </div>

          <div className="mb-3">
            <p className="fw-semibold mb-1">Quantity:</p>
            <div className="input-group" style={{ maxWidth: '120px' }}>
              <button
                className="btn btn-outline-secondary"
                onClick={() => setQuantity(q => Math.max(1, q - 1))}
              >-</button>
              <input type="text" className="form-control text-center" value={quantity} readOnly />
              <button
                className="btn btn-outline-secondary"
                onClick={() => setQuantity(q => q + 1)}
              >+</button>
            </div>
          </div>

          <div className="mb-3">
            <span className="text-success fw-semibold">✔ In Stock</span>
          </div>

          <div className="d-flex gap-3">
            <button className="btn btn-danger px-4">Add to Cart</button>
            <button className="btn btn-dark px-4">Buy it now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
