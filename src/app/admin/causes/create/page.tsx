//@ts-ignore

"use client"


import { useState } from "react";
import axios from "axios";
import Upload from '@/components/admin/Upload';


const CreateCause = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [goal, setGoal] = useState('');
  const [raised, setRaised] = useState('');
  const [image, setImage] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const newCause: Cause = { title, description, goal, image };
    console.log(newCause)
    try {
      await axios.post('https://backend-ttr6.onrender.com/cause', newCause);
      alert('Cause created successfully!');
    } catch (error) {
      console.error('There was an error creating the cause!', error);
      alert('try again');
    }
  };

  return (
    <div className="container mt-5">
      <h1>Create New Cause</h1>
      
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

        <Upload image={image} setImage={setImage} />
        <br />

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
        
    

       
       <br />
      
        <button onClick={handleSubmit} className="btn btn-primary mt-4">Submit</button>
   
    </div>
  );
};

export default CreateCause;
