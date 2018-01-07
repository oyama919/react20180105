import React, { Component } from 'react';

class NewBlog extends Component {

    constructor(props){
      super(props);
      this.title = null;
    }

    onClickSubmit() {
    }

    render(){
      return (
        <form>
          <input type="text" defaultValue="" />
          <input type="submit" value="送信" onClick={() => this.onClickSubmit()} />
        </form>
      )
    }
}

export default NewBlog;
