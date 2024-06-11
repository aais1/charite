"use client";
import axios from "axios";
import Link from "next/link";
import CircleProgress from "@/hooks/Circular";
import { useState, useEffect } from "react";

const CauseArea = () => {
  const [causes, setCauses] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get('https://backend-ttr6.onrender.com/cause');
        console.log(causes)
        setCauses(res.data);

      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="our-cause-page py-120 rel z-1">
      <div className="container">
        <div className="row justify-content-center">
          {causes.map((item) => {
           const percentage = Math.round((item.raised / item.goal) * 100);
            return (
              <div key={item._id} className="col-xl-4 col-md-6 mb-4">
                <div className="card cause-two-item">
                  <div className="card-body">
                    <div className="circle-progresss">
                      <div className="chart" >
                        <span><CircleProgress finish={percentage} /></span>
                      </div>
                    </div>
                    <h4 className="card-title">
                      <Link href={`/causes-details/${item._id}`}>{item.title}</Link>
                    </h4>
                    <div className="cause-price cause-price--green">
                      <span>Raised: ${item.raised}</span>
                      {" "}
                      <span>Goal: ${item.goal}</span>
                    </div>
                    <p className="card-text">{item.description}</p>
                    <div className="cause-btn">
                      <Link className="btn btn-primary" href={`/causes-details/${item._id}`}>Donate now</Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default CauseArea;
