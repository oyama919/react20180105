import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Blog extends Component {

  constructor(props) {
    super(props);
    this.state = this.props.match.params;
    this.state.blog = BLOG_DB_DATA.find(blogData => blogData.id === this.state.params_id);
  }

  render() {
    if (this.state.params_id === 'new') { return false; }
    if (typeof this.state.blog === 'undefined')  {
      return (
        <p>Blogs id:'{this.state.params_id}' が見つかりませんでした</p>
      )
    }
    return (
      <div>
        <h2>Title:{this.state.blog.title} Id:{this.state.params_id}</h2>
        <p>{this.state.blog.contents}</p>
        <p><Link to='/blogs'>Back</Link></p>
      </div>
    )
  }

}

export default Blog;
