import React from 'react';
import Navbar from '../components/Navbar';
import Blogimg from './Blogimg';
import ImageGridBlog from './ImgGridBlog';
import Thubnail from './VideoThumbnail';
import Read from './ReadingNext';
import Comment from './Comment';
import Form from './CommentForm';
import Footer from '../products/Footer';



const BlogPost = () => {
  return (
    <div className='container-fluid' style={{ backgroundColor: "#FBCEB1", height: "500px" }}>
        <div className="container text-center py-5" >
        <div className='container'>
        <Navbar />
        </div>
      <p className="badge bg-light text-danger fw-semibold">Product</p>
      <h2 className="fw-bold display-6">Fashion Forward Exploring Future Trends</h2>
      <div className="text-muted small mb-3">
        <i className="bi bi-calendar3"></i> Nov 06 2023 &nbsp; | &nbsp; TechChief &nbsp; | &nbsp; 3 Comments
      </div>
     
      
    </div>
    <Blogimg/>
    <ImageGridBlog/>
    <Thubnail imageUrl="/assets/img12.png" />
    <Read/>
    <Comment />
    <Form />
    <Footer/>


    
    </div>
  );
};

export default BlogPost;
