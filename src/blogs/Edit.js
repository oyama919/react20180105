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

  render() {
    if (this.state === undefined || this.state === null || isNaN(this.props.match.params.id)) {
      return (
        <p>Blogs id:'{this.state}' が見つかりませんでした</p>
      )
    } else {
        return (
          <div>
            <form onSubmit={this.handleSubmit}>
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
