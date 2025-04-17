import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button } from 'react-bootstrap';
import '../App.css'; // Custom styles

const products = [
  {
    name: 'HoodVibe',
    price: '$12.00',
    rating: 2.6,
    image: '/assets/img1.png',
    quickAdd: true,
  },
  {
    name: 'StreetSwaddle',
    price: '$12.00',
    rating: 2.6,
    image: '/assets/img3.png',
  },
  {
    name: 'TopTrendCaps',
    price: '$12.00',
    rating: 2.6,
    image: '/assets/img2.png',
  },
  {
    name: 'MugMingle',
    price: '$12.00',
    rating: 2.6,
    image: '/assets/img2.png',
    arrow: true,
  },
];

const RelatedProducts = () => {
  return (
    <div className="container my-5">
      <h5 className="fw-bold mb-4">Related Products</h5>
      <div className="row g-4">
        {products.map((product, idx) => (
          <div key={idx} className="col-6 col-sm-4 col-md-3">
            <Card className="product-card border-0 shadow-sm">
              <div className="position-relative">
                <Card.Img
                  variant="top"
                  src={product.image}
                  className="rounded product-img"
                />
                {product.quickAdd && (
                  <Button
                    className="position-absolute top-0 end-0 m-2 btn-sm rounded-pill"
                    variant="dark"
                  >
                    +Quick Add
                  </Button>
                )}
                {product.arrow && (
                  <Button
                    className="position-absolute top-50 end-0 translate-middle-y me-2 btn-sm rounded-circle"
                    variant="light"
                  >
                    <i className="bi bi-arrow-right"></i>
                  </Button>
                )}
              </div>
              <Card.Body className="text-center p-2">
                <Card.Title className="fs-6 mb-1">{product.name}</Card.Title>
                <div className="text-muted small">{product.price}</div>
                <div className="text-warning small">
                  {product.rating} <i className="bi bi-star-fill" />
                </div>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;
