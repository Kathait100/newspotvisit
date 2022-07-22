import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Create = () => {
  const [Title, SetTitle] = useState('');
  const [Content, setContent] = useState('');
  const [Author, setAuthor] = useState('');
  const [isPending, setIspending] = useState(false);
  const navigate = useNavigate();
  const handelSubmit = (e) => {
    e.preventDefault();
    const blog = { Title, Content, Author };
    setIspending(true);
    fetch('https://my-newreact12.herokuapp.com/Blog', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(blog),
    }).then(() => {
      setIspending(false);
      navigate('/querywindow');
    });
  };

  return (
    <div className="create-blog">
      {/* <h2>Add Query</h2> */}
      <form onSubmit={handelSubmit}>
        <h3 className="title">Title</h3>
        <input
          type="text"
          value={Title}
          onChange={(e) => { SetTitle(e.target.value); }}
        />
        <h3>Content</h3>
        <textarea
          style={{ height: '300px' }}
          value={Content}
          onChange={(e) => { setContent(e.target.value); }}
        />
        <h3>Author</h3>
        <input
          id="author"
          type="text"
          value={Author}
          onChange={(e) => { setAuthor(e.target.value); }}
        />
        {!isPending && <button type="submit">Post Query</button>}
        {isPending && <button disabled type="submit">Adding....</button>}
      </form>
    </div>
  );
};
export default Create;
