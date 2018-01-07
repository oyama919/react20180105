import React from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'

import Top from './Top';
import Blogs from './blogs/Index';
import Blog from './blogs/Show';
import NewBlog from './blogs/New';

const App = () => (
  <BrowserRouter>
    <div>
      <ul>
        <li><Link to='/'>Top</Link></li>
        <li><Link to='/blogs'>Blogs</Link></li>
      </ul>
      <Route exact path='/' component={Top} />
      <Route exact path='/blogs' component={Blogs} />
      <Route exact path='/blogs/:params_id' component={Blog} />
      <Route exact path='/blogs/new' component={NewBlog} />
    </div>
  </BrowserRouter>
)

export default App
