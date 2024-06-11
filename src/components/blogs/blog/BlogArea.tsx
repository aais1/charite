"use client";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

type Blog = {
  _id: string;
  title: string;
  content: string;
  author: string;
  createdAt: string;
  thumb?: string;
};

const BlogArea = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get('https://backend-ttr6.onrender.com/blog');
        const data = res.data;

        if (Array.isArray(data)) {
          setBlogs(data);
        } else {
          console.error('API response is not an array:', data);
        }
      } catch (error) {
        console.error('Error fetching blogs:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="blog-page-area py-5">
      <div className="container">
        <div className="row justify-content-center">
          {blogs?.map((item) => (
            <div key={item._id} className="col-xl-4 col-md-6 mb-4">
              <div className="card">
                <Image 
                  src={item.thumb || "/img.png"} 
                  alt="Blog" 
                  className="card-img-top"
                  width={500}
                  height={300}
                />
                <div className="card-body">
                  <div className="d-flex justify-content-between mb-2">
                    <div>
                      <b>{new Date(item.createdAt).getDate()}</b>
                      <span> {new Date(item.createdAt).toLocaleString('default', { month: 'short' })}</span>
                    </div>
                    <p style={{fontWeight:'bold'}}>{item.author}</p>
                  </div>
                  <h4 className="card-title"><Link href={`/blog-details/${item._id}`}>{item.title}</Link></h4>
                  <p className="card-text">{item.content.slice(0, 100)}...</p>
                  {/* <Link href={`/blog-details/${item._id}`} className="btn btn-primary">Read More</Link> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogArea;
