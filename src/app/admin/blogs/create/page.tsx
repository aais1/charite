"use client"

import { useState } from 'react';
import axios from 'axios';
import Upload from '@/components/admin/Upload';

export default function CreateBlog() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('');
  const [image, setImage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newBlog = { title, content, author,image };

    try {
      await axios.post('https://backend-ttr6.onrender.com/blog', newBlog);
      alert('Blog created successfully!');
      setTitle('');
      setContent('');
      setAuthor('');
    } catch (error) {
      console.error('There was an error creating the blog!', error);
      alert('try again')
    }
  };

  return (
    <div className="container mt-5">
      <h1>Create New Blog Post</h1>
      <form>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            className="form-control"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="content">Content</label>
          <textarea
            className="form-control"
            id="content"
            rows="5"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="author">Author</label>
          <input
            type="text"
            className="form-control"
            id="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
          />
        </div>
      
       <Upload image={image} setImage={setImage} />

       
       <br />
       <br />
        
        <button onClick={handleSubmit} className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
