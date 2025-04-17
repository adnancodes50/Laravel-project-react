import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './DropUsALine.css'; // Optional for extra styling

const DropUsALine = () => {
  return (
    <div className="drop-us-bg py-5 px-3">
      <div className="container text-center">
        <h2 className="fw-bold mb-2">Drop Us A Line</h2>
        <p className="text-muted mb-4">
          Feel free to drop us a message or get in touch using the contact details provided below.
        </p>
        <div className="line-decor mx-auto mb-4"></div>

        <form className="text-start">
          <div className="row g-3 mb-3 ">
            <div className="col-md-6">
              <input type="text" className="form-control rounded-3" placeholder="Your Name" />
            </div>
            <div className="col-md-6">
              <input type="email" className="form-control rounded-3" placeholder="Email Address" />
            </div>
            <div className="col-md-6">
              <input type="text" className="form-control rounded-3" placeholder="Phone No" />
            </div>
            <div className="col-md-6">
              <input type="text" className="form-control rounded-3" placeholder="Subject" />
            </div>
          </div>
          <div className="mb-4">
            <textarea
              className="form-control rounded-3"
              rows="5"
              placeholder="Message here*"
            ></textarea>
          </div>
          <div className="text-center">
            <button className="btn btn-danger px-4 py-2 rounded-pill">Send Mail</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DropUsALine;
