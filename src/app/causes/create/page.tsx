"use client"

import { useState } from "react";
import axios from "axios";


const CreateCause = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [goal, setGoal] = useState('');
  const [raised, setRaised] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newCause = { title, description, goal };
    try {
      await axios.post('http://localhost:3001/cause', newCause);
      alert('Cause created successfully!');
    } catch (error) {
      console.error('There was an error creating the cause!', error);
      alert('try again');
    }
  };

  return (
    <div className="container mt-5">
      <h1>Create New Cause</h1>
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
            rows={3}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="goal">Goal</label>
          <input
            type="number"
            className="form-control"
            id="goal"
            value={goal}
            placeholder="Goal in Numbers"
            onChange={(e) => setGoal(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="raised">Raised</label>
          <input
            type="number"
            className="form-control"
            id="raised"
            placeholder="Raised in Numbers"
            value={raised}
            onChange={(e) => setRaised(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default CreateCause;
