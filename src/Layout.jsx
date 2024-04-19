import React from 'react'
import { Outlet } from 'react-router-dom'
import LandingPage from './components/LandingPage/LandingPage.jsx'
const Layout = () => {
  return (
    <>
        <LandingPage/>
        <Outlet/>
    </>
  )
}

export default Layout
