import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import LandingPage from './components/LandingPage/LandingPage.jsx'
import HeaderNavbar from "./components/HeaderNavbar.jsx"
import { useDispatch, useSelector } from 'react-redux'
import generateSalonData from './fakedataapi.js'
import { addData } from './store/slices/SalonDataSlice.jsx'
import { motion } from 'framer-motion'
import WishlistPopup from "./components/wishlistPopup/InputFieldStep1.jsx"
import { useScroll, useSpring, useTransform } from 'framer-motion';

import Footer from './components/Footer.jsx'
const Layout = () => {



  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, { mass: 0.1 })

  const dispatch=useDispatch();
  const salonData=generateSalonData();
  dispatch(addData(salonData));


  return (
    
    <>
        <HeaderNavbar/>
        <Outlet/>
        <WishlistPopup/>
        <Footer/>
    </>
  )
}

export default Layout
