import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import BLOG_DB_DATA from './BlogDB';

class Blogs extends Component {
  render() {
    return (
      <div>
        <h1>Blogs</h1>
        <p>This is Blog page! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis, esse.</p>
        {BLOG_DB_DATA.map(blog => (
          <li key={blog.id}>
            <Link to={`/blogs/${blog.id}`}>{blog.title}</Link>
          </li>
        ))}
      </div>
    )
  }
}

export default Blogs;
