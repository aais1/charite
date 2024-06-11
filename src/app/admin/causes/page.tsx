"use client"
// @ts-ignore
import React, { useEffect, useState } from 'react';

const Page = () => {
    const [causes, setCauses] = useState([]);

    useEffect(() => {
        fetch('https://backend-ttr6.onrender.com/cause')
            .then(response => response.json())
            .then(data => {
                setCauses(data)
                
            })
            .catch(error => console.error(error));
    }, []);

    const handleDelete = (id) => {
        if (window.confirm('Are you sure you want to delete this cause?')) {
            console.log(id)
            console.log(causes)
            fetch(`http://localhost:3001/cause/${id}`, {
                method: 'DELETE'
            })
                .then(response => {
                    if (response.ok) {
                        console.log('del')
                        // Blog deleted successfully, update the state or perform any other necessary actions
                        setCauses(causes.filter(cause => cause._id !== id));
                        alert('Cause deleted successfully');
                        
                    } 
                })
                .catch(error => alert(error));
               
        }

       
    };

    return (
        <div>            
        <button className="btn btn-primary mb-4 float-end" onClick={() => window.location.href = 'causes/create'}>Create Cause</button>
        <div className="row mt-4 gap-2">
            <br />
        {causes.map(cause => (
          <div key={cause._id} className="card mb-3 col-sm-3">
            <div className="card-body">
              <img src={cause.image} alt="cause-img" />
              <h3 className="card-title">{cause.title}</h3>
              <p className="card-text"><strong>Description:</strong> {cause.description}</p>
              <p className="card-text"><strong>Goal:</strong> ${cause.goal.toLocaleString()}</p>
              <p className="card-text"><strong>Raised:</strong> ${cause.raised.toLocaleString()}</p>
              <p className="card-text"><strong>Created At:</strong> {new Date(cause.createdAt).toLocaleDateString()}</p>
              <button className="btn btn-danger mt-2" onClick={() => handleDelete(cause._id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
      </div>    
    );
};

export default Page;