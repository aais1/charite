"use client";
// @ts-ignore
import axios from "axios";
import Link from "next/link";
import { useState, useEffect } from "react";

const PortfolioArea = () => {
  const [portfolioData, setPortfolioData] = useState([]);

  useEffect(() => {
    const fetchPortfolioData = async () => {
      try {
        const res = await axios.get('https://backend-ttr6.onrender.com/portfolio');
        setPortfolioData(res.data);
        
      } catch (error) {
        console.error('Error fetching portfolio data:', error);
      }
    };

    fetchPortfolioData();
  }, []);

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this portfolio item?')) {
        fetch(`http://localhost:3001/portfolio/${id}`, {
            method: 'DELETE'
        })
            .then(response => {
                if (response.ok) {
                    // Blog deleted successfully, update the state or perform any other necessary actions
                    setPortfolioData(portfolioData.filter(porttfolio => porttfolio._id !== id));
                    alert('Portfolio deleted successfully');
                } 
            })
            .catch(error => alert(error));
    }
};

  return (
    <div className="container mt-4">
                <button className="btn btn-primary mb-4 float-end" onClick={() => window.location.href = 'portfolio/create'}>Add portfolio item</button>
      <div className="row">
        {portfolioData?.map((item) => (
          <div key={item._id} className="col-xl-4 col-md-6 mb-4">
            <div className="card h-100">
              <img src={item.image} alt="Portfolio" className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">
                  <Link href={'#'}>{item.title}</Link>
                </h5>
                <p className="card-text category">{item.category || 'Uncategorized'}</p>
                <button onClick={()=>handleDelete(item._id)} className="btn btn-danger">
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PortfolioArea;
