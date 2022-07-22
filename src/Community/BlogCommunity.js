import React from 'react';
import { useParams } from 'react-router';
import { useNavigate } from 'react-router-dom';
import Navbar from '../navbar/Navbar';
import useFetch from './useFetch';

const Blogcontent = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data: blog } = useFetch(
    `https://my-newreact12.herokuapp.com/Blog/${id}`,
  );
  const handelDelete = () => {
    fetch(`https://my-newreact12.herokuapp.com/Blog/${id}`, {
      method: 'DELETE',
    }).then(() => {
      navigate('/home');
    });
  };

  return (
    <div className="Id-content">
      <Navbar />
      {!blog ? <h2>Loading...</h2> : (
        <div>
          <article>
            <h2>Written By : {blog.Author}</h2>
            <p>{blog.Content}</p>
          </article>
          <button type="button" onClick={handelDelete}>Delete</button>
        </div>
      )}
    </div>
  );
};

export default Blogcontent;
