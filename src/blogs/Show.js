import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Blog extends Component {

  constructor(props) {
    super(props);
    if(!isNaN(this.props.match.params.params_id)){
      this.state = { 
        blog: { id: null, title:null, contents: null }
      };
    }else {
      this.state = this.props.match.params.params_id;
    }
  }

  componentDidMount() {
    if(!isNaN(this.props.match.params.params_id)){
      fetch(`http://localhost:3001/api/blogs/${this.props.match.params.params_id}`)
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

 deleteItem() {
  const HEADERS = new Headers();
  HEADERS.append('Content-Type', 'application/json');
  const id = this.props.match.params.params_id;
  if (id === '') return;
  let post_data = {id};
  let options = {
    method: 'POST',
    headers: HEADERS,
    mode: 'cors',
    cache: 'default',
    body: JSON.stringify(post_data)
  };

  var request = new Request('http://localhost:3001/api/blogs/delete', options);

  fetch(request).then(function(response) {
    console.log("Success");
    return response;
  })
  .catch(function(err) {
    console.log("Error " + err);
  })

  this.props.history.push('/blogs');
  window.location.reload();
 }
  render() {
    if (this.state === undefined || this.state === null || isNaN(this.props.match.params.params_id)) {
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
      <div>
       <p>{this.state.blog.contents}</p>
       <button onClick={this.deleteItem.bind(this)} value={this.state.blog.id} className="remove_button">delete</button>
      </div>
      <p><Link to={`/blogs/edit/${this.state.blog.id}`}>Edit</Link></p>
      <p><Link to='/blogs'>Back</Link></p>
    </div>
    )
    }
  }

}

export default Blog;
