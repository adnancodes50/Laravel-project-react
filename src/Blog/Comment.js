import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const CommentBox = () => {
  return (
    <div className="container my-5 p-4" style={{ backgroundColor: '#FBCEB1', borderRadius: '8px' }}>
      <h6 className="fw-bold mb-4">1 Comment</h6>

      {/* Comment Row */}
      <div className="d-flex align-items-start">
        {/* Avatar */}
        <img
          src="https://randomuser.me/api/portraits/women/44.jpg" // example avatar
          alt="Commenter"
          className="rounded-circle me-3"
          style={{ width: '60px', height: '60px', objectFit: 'cover' }}
        />

        {/* Comment Content */}
        <div>
          <h6 className="fw-bold mb-1">Emily R.</h6>
          <p className="mb-2" style={{ fontSize: '0.95rem' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <small className="text-muted">August 12, 2024 at 8:53 am</small>
        </div>
      </div>
    </div>
  );
};

export default CommentBox;
