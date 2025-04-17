import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

const VideoThumbnail = ({ imageUrl }) => {
  return (
    <div className="container my-5">
      {/* Video Thumbnail */}
      <div className="position-relative text-center" style={{ maxHeight: '600px', overflow: 'hidden' }}>
        <img 
          src={imageUrl} 
          alt="Video Thumbnail" 
          className="img-fluid rounded w-100"
          style={{ objectFit: 'cover', height: '100%', maxHeight: '600px' }}
        />
        <a
          href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          target="_blank"
          rel="noopener noreferrer"
          className="position-absolute top-50 start-50 translate-middle"
          style={{ textDecoration: 'none' }}
        >
          <FaYoutube size={60} color="red" />
        </a>
      </div>

      {/* Share Section */}
      <div className="d-flex align-items-center gap-3 mt-4">
        <strong>Share Post:</strong>
        <a href="#" className="text-danger fs-5"><FaFacebookF /></a>
        <a href="#" className="text-danger fs-5"><FaTwitter /></a>
        <a href="#" className="text-danger fs-5"><FaInstagram /></a>
      </div>
    </div>
  );
};

export default VideoThumbnail;
