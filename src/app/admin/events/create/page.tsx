"use client"
// @ts-ignore
import { useState } from "react";
import axios from "axios";
import Upload from '@/components/admin/Upload';

const CreateEvent = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [location, setLocation] = useState('');
  const [image,setImage]=useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newEvent = { name, description, date, location,image };

    try {
      await axios.post('https://backend-ttr6.onrender.com/event', newEvent);
      alert('Event created successfully!');
    } catch (error) {
      console.error('There was an error creating the event!', error);
    }
  };

  return (
    <div className="container mt-5">
      <h1>Create New Event</h1>
      <form>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
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
          <label htmlFor="date">Date</label>
          <input
            type="date"
            className="form-control"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="location">Location</label>
          <input
            type="text"
            className="form-control"
            id="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
          />
        </div>
        <Upload image={image} setImage={setImage} />
        <br />
        <br />
        <button onClick={handleSubmit} className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default CreateEvent;
