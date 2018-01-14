import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Blogs extends Component {

  constructor(props) {
    super(props);
    this.state = {blogs: []};
  }

  componentDidMount() {
    fetch('http://localhost:3001/api/blogs')
    .then(res => res.json())
    .then(blogs => this.setState({blogs}));
  }

  render() {
    const  blogs = this.state.blogs;
    return (
      <div>
        <h1>Blogs</h1>
        <p>This is Blog page! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis, esse.</p>
        {blogs.map(blog => (
          <li key={blog.id}>
            <Link to={`/blogs/show/${blog.id}`}>{blog.title}</Link>
          </li>
        ))}
      </div>
    )
  }
}

export default Blogs;
