import React from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'

import Top from './Top';
import BLOG_DB_DATA from './blogs/BlogDB';
import Blogs from './blogs/Index';
import Blog from './blogs/Show';

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
    </div>
  </BrowserRouter>
)

export default App
