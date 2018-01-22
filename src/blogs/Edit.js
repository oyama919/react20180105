import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class EditBlog extends Component {

  constructor(props) {
    super(props);
    if(!isNaN(this.props.match.params.id)){
      this.state = { 
        id: '', title:'', contents: ''
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
            if (data.title === null){ data.title = "" };
            if (data.contents === null){ data.contents = "" };  
            this.setState({
                id: data.id,
                title: data.title,
                contents: data.contents
            })
          } 
        )
      );
    }
  }

  onChangeValue(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const HEADERS = new Headers();
    HEADERS.append('Content-Type', 'application/json');
    console.log(this);
    const id = this.props.match.params.id;
    const title = e.target.title.value;
    const contents = e.target.contents.value;
    if (id === '' ||title === '' || contents === '') return;
    let post_data = {id, title, contents};
    let options = {
      method: 'POST',
      headers: HEADERS,
      mode: 'cors',
      cache: 'default',
      body: JSON.stringify(post_data)
    };

    var request = new Request('http://localhost:3001/api/blogs/edit', options);

    fetch(request).then(function(response) {
      console.log("Success");
      return response;
    })
    .then(function(json) {
      console.log(json.errors);
    })
    .catch(function(err) {
      console.log("Error " + err);
    })

    this.props.history.push('/blogs');
    window.location.reload();
  };

  render() {
    if (this.state === undefined || this.state === null || isNaN(this.props.match.params.id)) {
      return (
        <p>Blogs id:'{this.state}' が見つかりませんでした</p>
      )
    } else {
        return (
          <div>
            <form onSubmit={this.handleSubmit.bind(this)}>
              <label id="title">title</label>
              <input type="text" name="title" onChange={(e) => this.onChangeValue(e)} value={this.state.title}/>
              <label id="contents">contents</label>
              <input type="text" name="contents" onChange={(e) => this.onChangeValue(e)} value={this.state.contents}/>
              <input type="submit" value="送信"/>
            </form>
            <p><Link to='/blogs'>Back</Link></p>
          </div>
      )
    }
  }

}

export default EditBlog;
