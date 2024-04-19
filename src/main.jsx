import React from 'react'
import ReactDOM from 'react-dom/client'
import Layout from './Layout.jsx'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import LandingPage from './components/LandingPage/LandingPage.jsx'


const router=createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Layout/>}>
    {/* <Route path='about' element={<About/>}/>
    <Route path='contact' element={<Contact/>}/>
    <Route path='user/:userid' element={<User/>}/>
    <Route path='github' element={<Github/>} loader={githubInfoLoader}/> */}
  </Route>)
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)

