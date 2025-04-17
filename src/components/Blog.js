import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaCalendarAlt } from "react-icons/fa";

const blogPosts = [
  {
    title: "Fashion Forward Exploring Future Trends",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    date: "November 06 2024",
    tag: "Product",
    image: "/assets/img6.png",
  },
  {
    title: "Fashion Forward Exploring Future Trends",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    date: "November 06 2024",
    tag: "Collaborations",
    image: "/assets/img1.png",
  },
  {
    title: "Fashion Forward Exploring Future Trends",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    date: "November 06 2024",
    tag: "Collaborations",
    image: "/assets/img6.png",
  },
  {
    title: "New Gen Style Inspo",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    date: "November 07 2024",
    tag: "Trend",
    image: "/assets/img5.png",
  },
];

const BlogPosts = () => {
  return (
    <div className="container py-5">
      <h3 className="text-center fw-bold mb-4">Blog Posts</h3>
      <div className="row gx-3 gy-4">
        {blogPosts.map((post, index) => (
          <div
            key={index}
            className="col-12 col-sm-6 col-lg-3 d-flex"
          >
            <div className="card border-0 shadow-sm w-100">
              <div className="position-relative">
                <img
                  src={post.image}
                  className="card-img-top rounded"
                  alt={post.title}
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <span
                  className="position-absolute top-0 start-0 m-2 px-2 py-1 bg-danger text-white rounded-pill small"
                  style={{ fontSize: "0.75rem" }}
                >
                  {post.tag}
                </span>
              </div>
              <div className="card-body px-2">
                <h6 className="fw-bold">{post.title}</h6>
                <p className="text-muted small mb-2">{post.text}</p>
                <div className="d-flex align-items-center text-danger gap-2">
                  <FaCalendarAlt size={14} />
                  <small>{post.date}</small>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPosts;
