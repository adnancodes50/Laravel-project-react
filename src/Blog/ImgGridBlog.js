import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ImageGridBlog = () => {
  return (
    <div className='container'>
        <div className="container-fluid py-5 mt-5">
      {/* Embedded custom CSS */}
      <style>
        {`
          .object-fit-cover {
            object-fit: cover;
            height: 100%;
            width: 100%;
          }
          img {
            display: block;
          }
        `}
      </style>

      <div className="row gx-4 gy-3 align-items-stretch">
        {/* Left Image */}
        <div className="col-md-6">
          <div className="h-100 overflow-hidden">
            <img 
              src="/assets/img5.png" 
              alt="Main model" 
              className="img-fluid w-100  object-fit-cover border border-primary"
              style={{ height: "400px" }}
            />
          </div>
        </div>

        {/* Right Column with two stacked images */}
        <div className="col-md-6 d-flex flex-column">
          <div className="flex-fill mb-3">
            <img 
              src="/assets/img3.png" 
              alt="Top right" 
              className="img-fluid   object-fit-cover"
              style={{ height: "200px" }}

            />
          </div>
          <div className="flex-fill">
            <img 
              src="/assets/img2.png" 
              alt="Bottom right" 
              className="img-fluid w-100  object-fit-cover"
              style={{ height: "180px" }}

            />
          </div>
        </div>
      </div>

      {/* Caption below image row */}
      <p className="mt-3 text-center text-muted">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </p>

      {/* Full width paragraph */}
      <p className="mt-4 text-bold">
        Donec tellus Nulla lorem Nullam elit id ut elit feugiat lacus. Congue eget dapibus congue tincidunt senectus nibh risus Phasellus tristique justo. 
        Justo Pellentesque Donec lobortis faucibus Donec tellus Nulla lorem Nullam elit id ut elit feugiat lacus...
      </p>
    </div>


    <div className="container-fluid py-5 mt-5">
      {/* Embedded custom CSS */}
      <style>
        {`
          .object-fit-cover {
            object-fit: cover;
            height: 100%;
            width: 100%;
          }
          img {
            display: block;
          }
        `}
      </style>

      <div className="row gx-4 gy-3 align-items-stretch">
        {/* Left Image */}
        <div className="col-md-6">
          <div className="h-100 overflow-hidden">
            <img 
              src="/assets/img5.png" 
              alt="Main model" 
              className="img-fluid w-100  object-fit-cover border border-primary"
              style={{ height: "400px" }}
            />
          </div>
        </div>

        {/* Right Column with two stacked images */}
        <div className="col-md-6 d-flex flex-column">
          <div className="flex-fill mb-3">
            <img 
              src="/assets/img3.png" 
              alt="Top right" 
              className="img-fluid   object-fit-cover"
              style={{ height: "200px" }}

            />
          </div>
          <div className="flex-fill">
            <img 
              src="/assets/img2.png" 
              alt="Bottom right" 
              className="img-fluid w-100  object-fit-cover"
              style={{ height: "180px" }}

            />
          </div>
        </div>
      </div>

      {/* Caption below image row */}
      <p className="mt-3 text-center text-muted">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </p>

      {/* Full width paragraph */}
      <p className="mt-4 text-bold">
        Donec tellus Nulla lorem Nullam elit id ut elit feugiat lacus. Congue eget dapibus congue tincidunt senectus nibh risus Phasellus tristique justo. 
        Justo Pellentesque Donec lobortis faucibus Donec tellus Nulla lorem Nullam elit id ut elit feugiat lacus...
      </p>
    </div>


    </div>
  );
};

export default ImageGridBlog;
