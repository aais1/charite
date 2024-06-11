// @ts-ignore
"use client"
import { useState } from "react";
import axios from "axios";


const CreatePortfolio = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newPortfolio: Portfolio = { title, description, image };

    try {
        console.log(title, description, image);
        await fetch('https://backend-ttr6.onrender.com/portfolio', {
            method: 'POST',
            body: JSON.stringify(newPortfolio),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        
      alert('Portfolio created successfully!');

    } catch (error) {
      console.error('There was an error creating the portfolio!', error);
      alert('try again')
    }
  };

  return (
    <div className="container mt-5">
      <h1>Create New Portfolio</h1>
      <form onSubmit={handleSubmit}>
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
          <label htmlFor="description">Description</label>
          <textarea
            className="form-control"
            id="description"
            rows="3"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="image">Image URL</label>
          <input
            type="text"
            className="form-control"
            id="image"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default CreatePortfolio;
