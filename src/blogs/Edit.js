import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class EditBlog extends Component {

  constructor(props) {
    super(props);
    if(!isNaN(this.props.match.params.id)){
      this.state = { 
        blog: { id: null, title:null, contents: null }
      };
    }else {
      this.state = this.props.match.params.id;
    }
  }

  componentDidMount() {
    if(!isNaN(this.props.match.params.id)){
      fetch(`http://localhost:3001/api/blogs/${this.props.match.params.id}`)
      .then(
        res =>
          res.json().then(data => {
            this.setState({
              blog: {
                id: data.id, 
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
    if (this.state === undefined || this.state === null || isNaN(this.props.match.params.id)) {
      return (
        <p>Blogs id:'{this.state}' が見つかりませんでした</p>
      )
    } else if (this.state.blog === null)  {
      return (
        <p>Blogs id が見つかりませんでした</p>
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

export default EditBlog;
