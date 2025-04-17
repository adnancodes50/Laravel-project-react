import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const allCategories = [
  { title: 'Men', image: '/assets/img1.png' },
  { title: 'Women', image: '/assets/img2.png' },
  { title: 'Cups', image: '/assets/img3.png' },
  { title: 'Shoes', image: '/assets/img1.png' },
  { title: 'Caps', image: '/assets/img3.png' },
  { title: 'Shalwar', image: '/assets/img2.png' },
  { title: 'Kids', image: '/assets/img1.png' },
  { title: 'Bags', image: '/assets/img2.png' },
  { title: 'Jewelry', image: '/assets/img3.png' },
  { title: 'Watches', image: '/assets/img1.png' },
];

const Categories = () => {
  const [showAll, setShowAll] = useState(false);

  const visibleCategories = showAll ? allCategories : allCategories.slice(0, 6);

  const handleToggle = () => setShowAll(prev => !prev);

  return (
    <div className="container py-5">
      {/* Title Row */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h3 className="fw-bold">Shop By Categories</h3>
        <button onClick={handleToggle} className="btn btn-light d-flex align-items-center gap-1">
          {showAll ? 'Show Less' : 'View All'} <span className="fw-bold">&rarr;</span>
        </button>
      </div>

      {/* Categories Grid */}
      <div className="row g-4">
        {visibleCategories.map((cat, idx) => (
          <div key={idx} className="col-6 col-sm-4 col-md-3 col-lg-2">
            <div
              className="position-relative rounded overflow-hidden"
              style={{ height: '160px', cursor: 'pointer' }}
            >
              <img
                src={cat.image}
                alt={cat.title}
                className="w-100 h-100 object-fit-cover rounded"
              />
              <div className="position-absolute bottom-0 w-100 text-white text-center py-1"
                   style={{
                     background: 'rgba(0,0,0,0.4)',
                     backdropFilter: 'blur(4px)',
                   }}>
                {cat.title}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
