import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'; // CSS added below


const VideoBanner = () => {
  return (
    <div
      className="video-banner d-flex justify-content-center align-items-center text-center text-white"
      style={{
        backgroundImage: `url('/assets/img133.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '200px',
        position: 'relative',
      }}
    >
      <div className="overlay" />

      <div className="z-1">
        <button className="play-button mb-3">
          <i className="bi bi-play-fill"></i>
        </button>
        <h5 className="fw-bold m-0">Introducing Top</h5>
        <h5 className="fw-bold">TrendsCaps</h5>
      </div>
    </div>
  );
};

export default VideoBanner;
