import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaEnvelopeOpenText, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';

const contactDetails = [
  {
    image: '/assets/img4.png', // Update paths accordingly
    icon: <FaEnvelopeOpenText size={30} className="text-danger" />,
    title: 'Send Us Mail',
    line1: 'Warriorsupreme@email.com',
    line2: 'Warriorsupreme@email.com',
  },
  {
    image: '/assets/img3.png',
    icon: <FaPhoneAlt size={30} className="text-danger" />,
    title: 'Call Us Anytime',
    line1: '(+987) 654 321 228 11',
    line2: '(+987) 654 321 228 11',
  },
  {
    image: '/assets/img12.png',
    icon: <FaMapMarkerAlt size={30} className="text-danger" />,
    title: 'Where to Find Us',
    line1: '8 Street, New York City',
    line2: 'United States of America',
  },
];

const ContactInfo = () => {
  return (
    <div className="container py-5">
      <div className="row g-4 justify-content-center">
        {contactDetails.map((item, index) => (
          <div className="col-md-4" key={index}>
            <div className="card shadow-sm border-0 rounded-4 h-100">
              <img
                src={item.image}
                className="card-img-top rounded-top-4"
                alt={item.title}
                style={{ height: '200px', objectFit: 'cover' }}
              />
              <div className="text-center" style={{ marginTop: '-25px' }}>
                <div className="bg-white p-2 d-inline-block rounded-circle shadow">
                  {item.icon}
                </div>
              </div>
              <div className="card-body text-center">
                <h5 className="card-title fw-bold">{item.title}</h5>
                <p className="card-text text-muted mb-1">{item.line1}</p>
                <p className="card-text text-muted">{item.line2}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactInfo;
