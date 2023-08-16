import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/Home.jsx'
import AboutPage from './pages/About.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'
import ErrorPage from './ErrorPage.jsx'

const paths = createBrowserRouter([
  {
    path: '/',
    element:<Home/>, 
    errorElement:<ErrorPage/>,
  },
  {
    path: '/about',
    element:<AboutPage/>, 
    errorElement:<ErrorPage/>,
  },
  {
    path: '/map',
    element:<MapPage/>, 
    errorElement:<ErrorPage/>,
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={paths} />
  </React.StrictMode>,
)
