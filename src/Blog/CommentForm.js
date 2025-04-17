import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const CommentForm = () => {
  return (
    <div className="container my-5 p-4 border rounded bg-white">
      <h6 className="fw-bold mb-2">Leave a comment</h6>
      <p className="text-muted mb-1" style={{ fontSize: '0.9rem' }}>
        All comments are moderated before being published.
      </p>
      <p className="text-muted mb-4" style={{ fontSize: '0.8rem' }}>
        This site is protected by reCAPTCHA and the Google{' '}
        <a href="#" className="text-danger text-decoration-none">Privacy Policy</a> and{' '}
        <a href="#" className="text-danger text-decoration-none">Terms of Service</a> apply.
      </p>

      {/* Form */}
      <form>
        <div className="row mb-3">
          <div className="col-md-6 mb-3 mb-md-0">
            <input
              type="text"
              className="form-control"
              placeholder="Name"
              required
            />
          </div>
          <div className="col-md-6">
            <input
              type="email"
              className="form-control"
              placeholder="E-mail"
              required
            />
          </div>
        </div>

        <div className="mb-4">
          <textarea
            className="form-control"
            rows="6"
            placeholder="Message"
            required
          ></textarea>
        </div>

        <button type="submit" className="btn btn-danger px-4 py-2 rounded-pill">
          Submit
        </button>
      </form>
    </div>
  );
};

export default CommentForm;
