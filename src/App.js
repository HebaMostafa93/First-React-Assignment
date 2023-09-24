import React from 'react'
import Layout from './Layout/Layout'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Home/Home'
import Portfolio from './Portfolio/Portfolio'
import Contact from './Contact/Contact'
import About from './About/About'
import NotFound from './NotFound/NotFound'

export default function App() {

  let routers = createBrowserRouter([
    { path:"" , element: <Layout/> , children : [
      {index:true , element : <Home/>},
      {path:"about" , element : <About/>},
      {path:"protfolio" , element : <Portfolio/>},
      {path:"contact" , element : <Contact/>},
      {path:"*" , element : <NotFound/>},
    ]},

  ])
  return <>
<RouterProvider router={routers}/>
  </>
}
