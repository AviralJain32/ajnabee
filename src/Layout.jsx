import React from 'react'
import { Outlet } from 'react-router-dom'
import LandingPage from './components/LandingPage/LandingPage.jsx'
import HeaderNavbar from "./components/HeaderNavbar.jsx"
import { useDispatch, useSelector } from 'react-redux'
import generateSalonData from './fakedataapi.js'
import { addData } from './store/slices/SalonDataSlice.jsx'
const Layout = () => {
  const dispatch=useDispatch();
  const salonData=generateSalonData();
  dispatch(addData(salonData));
  
  return (
    
    <>
        <HeaderNavbar/>
        <Outlet/>
    </>
  )
}

export default Layout
