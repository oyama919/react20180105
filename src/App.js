import React from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'

const App = () => (
  <BrowserRouter>
    <div>
      <ul>
        <li><Link to='/'>Top</Link></li>
        <li><Link to='/blogs'>Blogs</Link></li>
      </ul>
      <Route exact path='/' component={Top} />
      <Route exact path='/blogs' component={BlogsIndex} />
      <Route exact path='/blogs/:params_id' component={Blog} />
    </div>
  </BrowserRouter>
)

const Top = () => (
  <div>
    <h1>Top</h1>
    <p>This is Top page! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus, eaque?</p>
  </div>
)

const BlogsIndex = () => (
  <div>
    <h1>Blogs</h1>
    <p>This is Blog page! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis, esse.</p>
    {BLOG_DB_DATA.map(blog => (
      <li key={blog.id}>
        <Link to={`/blogs/${blog.id}`}>{blog.title}</Link>
      </li>
    ))}
  </div>
)

const Blog = props => {
  const { params_id } = props.match.params;
  const blog = GetBlogDataByID(params_id);

  if (typeof blog === 'undefined')  {
    return (
      <div>
        <p>Blogs id:'{params_id}' が見つかりませんでした</p>
      </div>
    )
  }

  return (
    <div>
      <h2>Title:{blog.title} Id:{params_id}</h2>
      <p>{blog.contents}</p>
      <p><Link to='/blogs'>Back</Link></p>
    </div>
  )
}

const BLOG_DB_DATA = [
  {
    id: '1',
    title: 'some title1',
    contents: 'Lorem ipsum dolor sit amet.'
  },
  {
    id: '2',
    title: 'some title2',
    contents: 'Lorem ipsum dolor sit amet.'
  },
  {
    id: '3',
    title: 'some title3',
    contents: 'Lorem ipsum dolor sit amet.'
  },
  {
    id: '4',
    title: 'some title4',
    contents: 'Lorem ipsum dolor sit amet.'
  },
  {
    id: '5',
    title: 'some title5',
    contents: 'Lorem ipsum dolor sit amet.'
  }
]

const GetBlogDataByID = params_id => BLOG_DB_DATA.find(blogData => blogData.id === params_id)

export default App
