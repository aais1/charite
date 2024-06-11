"use client";
import axios from "axios";
import Link from "next/link";
import { useState, useEffect } from "react";

const tab_title = ["All", "Homeless", "Clean Water", "Education", "Food & Health"];

const PortfolioArea = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [portfolioData, setPortfolioData] = useState([]);

  useEffect(() => {
    const fetchPortfolioData = async () => {
      try {
        const res = await axios.get('https://backend-ttr6.onrender.com/portfolio');
        setPortfolioData(res.data);
        console.log(res.data);
      } catch (error) {
        console.error('Error fetching portfolio data:', error);
      }
    };

    fetchPortfolioData();
  }, []);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  const renderPortfolioItems = () => {
    const filteredData = activeTab === 0 ? portfolioData : portfolioData.filter(item => item.category === tab_title[activeTab]);
    return filteredData.map((item) => (
      <div key={item._id} className="col-xl-4 col-md-6 item">
        <div className="portfolio-item image">
          <img src={item.image} alt="Portfolio" className="img-fluid" />
          <div className="portfolio-item__over">
            <Link className="details-btn" href={`/portfolio-details/${item._id}`}>
              <i className="flaticon-chevron"></i>
            </Link>
            <h5>
              <Link href={`/portfolio-details/${item._id}`}>{item.title}</Link>
            </h5>
            <span className="category">{item.category || 'Uncategorized'}</span>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <div className="portfolio-page-area pt-120 pb-90 rel z-1">
      <div className="container">
        <ul className="portfolio-filter pb-35">
          {tab_title.map((tab, index) => (
            <li
              key={index}
              onClick={() => handleTabClick(index)}
              className={activeTab === index ? "current" : ""}
            >
              {tab}
            </li>
          ))}
        </ul>
        
        <div className="tab-content">
          <div className="tab-pane fade show active">
            <div className="row portfolio-active justify-content-center">
              {renderPortfolioItems()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioArea;
