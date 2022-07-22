import React from 'react';
import { Link } from 'react-router-dom';
// import Navbar from '../navbar/Navbar';

const BlogDetails = ({ data }) => {
// eslint-disable-next-line
    console.log(null);
  return (
    <div className="blogDetails">
      {/* <Navbar /> */}
      {data.map((blog) => (
        <div className="blog-card">
          <div className="blog-preview" key={blog.id}>
            <Link to={`/querywindow/${blog.id}`}>
              <h1 className="blog-header">{blog.Title} </h1>
            </Link>
            <h2>Penned By: <span>{blog.Author}</span></h2>
          </div>
          <div className="dummy">{null}</div>
        </div>
      ))}
    </div>
  );
};

export default BlogDetails;
