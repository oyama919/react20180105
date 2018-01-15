import React, {Component} from 'react';

class NewBlog extends Component {

  constructor(props) {
    super(props);
    this.state = {
      title: '',
      contents: ''
    };
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
    const title = e.target.title.value;
    const contents = e.target.contents.value;
    let post_data = {title, contents};
    let options = {
      method: 'POST',
      headers: HEADERS,
      mode: 'cors',
      cache: 'default',
      body: JSON.stringify(post_data)
    };

    var request = new Request('http://localhost:3001/api/blogs/new', options);

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

  };

  render() {
    return (<form onSubmit={this.handleSubmit}>
      <label id="title">title</label>
      <input type="text" name="title" onChange={(e) => this.onChangeValue(e)} value={this.state.title}/>
      <label id="contents">contents</label>
      <input type="text" name="contents" onChange={(e) => this.onChangeValue(e)} value={this.state.contents}/>
      <input type="submit" value="送信"/>
    </form>)
  }
}

export default NewBlog;
