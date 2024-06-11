"use client"
import React, { useState, useEffect } from 'react';

const Page = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('https://backend-ttr6.onrender.com/blog')
            .then(response => response.json())
            .then(data => setBlogs(data))
            .catch(error => alert('err'));
    }, []);
    console.log(blogs)

    const handleDelete = (blogId) => {
        console.log(blogId)
        if (window.confirm('Are you sure you want to delete this blog?')) {
            fetch(`http://localhost:3001/blog/${blogId}`, {
                method: 'DELETE'
            })
                .then(response => {
                    if (response.ok) {
                        // Blog deleted successfully, update the state or perform any other necessary actions
                        setBlogs(blogs.filter(blog => blog._id !== blogId));
                        alert('Blog deleted successfully');
                    } 
                })
                .catch(error => alert(error));
        }
    };

    return (
        <div>
            <button className="btn btn-primary mb-4 float-end" onClick={() => window.location.href = 'blogs/create'}>Create Blog</button>
            <div className='row gap-3 mx-auto'>
                {blogs.map(blog => (
                    <div key={blog._id} className="card col-sm-3">
                        <div className="card-body">
                            <img src={blog.image} alt="blog-img" />
                            <h4 className="card-title" style={{ fontWeight: 'bold' }}>{blog.title}</h4>
                            <span className="card-subtitle" style={{ fontStyle: 'italic' }}>Author: {blog.author}</span>
                            <p className="card-text" style={{ color: 'blue' }}>{blog.content}</p>
                            <button className="btn btn-danger" onClick={() => handleDelete(blog._id)}>Delete</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Page;