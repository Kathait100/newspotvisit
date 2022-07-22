import React from 'react';
import Navbar from '../navbar/Navbar';
import BlogDetails from './BlogDetails';
import useFetch from './useFetch';

const Front = () => {
  const { data, isError, isPending } = useFetch(
    'https://my-newreact12.herokuapp.com/Blog',
  );
  return (
    <div className="home-component">
      <Navbar />
      {isPending && (
        <div>
          <h1>Loading...</h1>
        </div>
      )}
      {isError && (
        <div>
          <h1>{isError}</h1>
        </div>
      )}
      {data && <BlogDetails data={data} />}
    </div>
  );
};
export default Front;
