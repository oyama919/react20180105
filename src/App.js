import React, { Component } from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'

const App = () => (
  <BrowserRouter>
    <div>
      <ul>
        <li><Link to='/'>Top</Link></li>
        <li><Link to='blogs'>Blogs</Link></li>
      </ul>
      <Route exact path='/' component={Top} />
      <Route path='/blogs' component={Blogs} />
    </div>
  </BrowserRouter>
)

const Top = () => (
  <div>
    <h2>Top</h2>
    <p>This is Top page! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus, eaque?</p>
  </div>
)
const Blogs = () => (
  <div>
    <h2>Blogs</h2>
    <p>This is Blog page! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis, esse.</p>
  </div>
)

export default App
