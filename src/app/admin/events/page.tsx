// @ts-ignore
"use client";

import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

const EventArea = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get('https://backend-ttr6.onrender.com/event');
        const data = res.data;

        if (Array.isArray(data)) {
          setEvents(data);
          console.log(data)
        } else {
          console.error('API response is not an array:', data);
        }
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };
    fetchData();
  }, []);

  const handleDelete = (Id) => {
    if (window.confirm('Are you sure you want to delete this event?')) {
        fetch(`http://localhost:3001/event/${Id}`, {
            method: 'DELETE'
        })
            .then(response => {
                if (response.ok) {
                    // Blog deleted successfully, update the state or perform any other necessary actions
                    setEvents(events.filter(event => event._id !== Id));
                    alert('event deleted successfully');
                } 
            })
            .catch(error => alert(error));
    }
};

  return (
    <div className="our-events-page py-5 rel z-1">
        <div>
            <button className="btn btn-primary float-end" onClick={()=>window.location.href = 'events/create'}>Create a Event</button>
        </div>
      <div className="container">
        <div className="row justify-content-center">
          {events.map((item) => (
            <div key={item._id} className="col-xl-4 col-md-6 mb-4">
              <div className="card">
                <div className="image">
                  <img 
                    src={item.image || "/eventdummy.jpg"} 
                    alt="Event" 
                    className="card-img-top"
                    style={{objectFit:'cover'}}
                    width={500}
                    height={300}
                  />
                </div>
                <div className="card-body">
                  <h4 className="card-title">
                    <Link href={`/event-details/${item._id}`}>
                      {item.name}
                    </Link>
                  </h4>
                  <ul className="list-inline mb-2">
                    <li className="list-inline-item">
                      <i className="flaticon-time"></i> 
                      <Link href="#">{new Date(item.date).toLocaleDateString()}</Link>
                    </li>
                    <li className="list-inline-item">
                      <i className="flaticon-map"></i> 
                      <Link href="#">{item.location}</Link>
                    </li>
                  </ul>
                  <p className="card-text">{item.description}</p>
                  
                  <button className="btn btn-danger"
                onClick={()=>handleDelete(item._id)}>Delete</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default EventArea;
