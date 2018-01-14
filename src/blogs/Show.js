import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Blog extends Component {

  constructor(props) {
    super(props);
    console.log("bbbbbb")
    console.log(this.props.match.params.params_id)
    console.log("bbbbbb")
    this.state = { 
        blog: { id: null, title:null, contents: null }
    };
  }

  componentDidMount() {
      fetch(`http://localhost:3001/api/blogs/${this.props.match.params.params_id}`)
    .then(
      res =>
        res.json().then(data => {
          console.log("cccccc")
          console.log(data)
          console.log("cccccc")
          this.setState({
            blog: {
              id: this.state.blog.id, 
              title: data.title,
              contents: data.contents
            }
          })
        }
      )
    );
    }
  }

  render() {
    if (this.state === undefined || this.state === null) {
      return (
        <p>Blogs id:'{this.state.id}' が見つかりませんでした</p>
      )
    } else if (this.state.blog === null)  {
      return (
        <p>Blogs id:'{this.state.id}' が見つかりませんでした</p>
      )
    } else {
    return (
    <div>
      <h2>Title:{this.state.blog.title} Id:{this.state.blog.id}</h2>
      <p>{this.state.blog.contents}</p>
      <p><Link to='/blogs'>Back</Link></p>
    </div>
    )
    }
  }

}

export default Blog;
