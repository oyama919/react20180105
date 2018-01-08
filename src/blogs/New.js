import React, { Component } from 'react';

class NewBlog extends Component {

    constructor(props){
      super(props);
      this.state = {title: ''};
    }

    onChangeValue(e) {
      this.setState({[e.target.name] : e.target.value});
    }

    handleSubmit(e) {
      e.preventDefault();
      console.log(e.target.title.value);
    }

    render(){
      return (
        <form onSubmit={ this.handleSubmit }>
          <input type="text" name="title" onChange={(e) => this.onChangeValue(e)} value={this.state.title} />
          <input type="submit" value="送信" />
        </form>
      )
    }
}

export default NewBlog;
