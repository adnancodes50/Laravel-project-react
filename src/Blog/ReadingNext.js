import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaArrowRight, FaCalendarAlt, FaUser, FaComment } from 'react-icons/fa';

const cardData = [
  {
    image: '/assets/img1.png',
    title: 'Fashion Forward Exploring Future Trends',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
    date: 'November 06 2024',
    author: 'Tee Crafted',
    comments: '1 Comments'
  },
  {
    image: '/assets/img2.png',
    title: 'Fashion Forward Exploring Future Trends',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
    date: 'November 06 2024',
    author: 'Tee Crafted',
    comments: '1 Comments'
  },
  {
    image: '/assets/img3.png',
    title: 'Fashion Forward Exploring Future Trends',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
    date: 'November 06 2024',
    author: 'Tee Crafted',
    comments: '1 Comments'
  }
];

const ReadingNext = () => {
  return (
    <div className="container my-5">
      {/* Section Heading */}
      <h5 className="mb-4 fw-bold d-flex align-items-center">
        <FaArrowRight className="me-2" /> Reading next
      </h5>

      {/* Cards Row */}
      <div className="row">
        {cardData.map((card, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="card h-100 shadow-sm border-0">
              <img src={card.image} className="card-img-top rounded-top" alt="Post thumbnail" />
              <div className="card-body">
                <h6 className="fw-bold">{card.title}</h6>
                <p className="text-muted small">{card.description}</p>
                <div className="d-flex flex-wrap text-muted small gap-3">
                  <div className="d-flex align-items-center">
                    <FaCalendarAlt className="me-1" /> {card.date}
                  </div>
                  <div className="d-flex align-items-center">
                    <FaUser className="me-1" /> {card.author}
                  </div>
                  <div className="d-flex align-items-center">
                    <FaComment className="me-1" /> {card.comments}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReadingNext;
