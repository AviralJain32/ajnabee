import React, { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import { Drawer } from '@mui/material';
import TemporaryDrawer from './LandingPage/Drawer';
import { motion } from 'framer-motion'
import { Link } from 'react-scroll'; 
import { Link as Nlink } from 'react-router-dom';

// 2 baar bani hai navbar ek landing page ke liye ek vase hi
const LandingPage = () => {
    const navLinks=[{Name:"Home",RedirectLink:"/"},{Name:"Near You",RedirectLink:"/nearyou"},{Name:"About",RedirectLink:"/about"},{Name:"Contact",RedirectLink:"/contactus"}];

    const location=useLocation()
    const [open, setopen] = useState(false)
    
    
    // if(){
    //     return null;
    // }

    
    return (
        <>
            <div className="flex text-xl justify-between bg-white max-w-full px-10 py-5 items-center sticky top-0 z-10 text-black max-md:hidden">
                {/* <div className=' font-romaticaStory text-2xl'>Aviral Jain</div> */}
                {/* <Nlink to={"/getapp"}><Link to="getapp" spy={true} smooth={true} offset={-100} duration={500}  className="border-2 border-black rounded-3xl px-8 py-1 hover:cursor-pointer">Get App</Link></Nlink> */}
                {location.pathname=="/" ?(<Link to="getapp" spy={true} smooth={true} offset={-100} duration={500}  className={`border-2 border-black rounded-3xl px-8 py-1 hover:cursor-pointer`}>Get App</Link>)
                :<div className='static'><Nlink className=' text-black text-md absolute text-4xl left-20 top-12  font-romaticaStory'>Ajnabee</Nlink></div>
                
                }
                
                <div className=""> 
                    {navLinks.map((links,index) => (
                        <Nlink key={index} to={links.RedirectLink} className="text-black z-10 px-10 font-semibold">{links.Name}</Nlink>
                    ))}
                </div>
                <div className="flex justify-between items-center">
                    {/* <span className="text-black mr-6">Login</span> */}
                    <button className=" border-2 border-yellow-400 rounded-full px-4 bg-yellow-400 text-black "><NavLink to={"/signup"}>Why Join us ?</NavLink></button>
                </div>
            </div>
            <div>

            </div>
            {/* For small screen */}
            <div className='md:hidden text-sm flex justify-between bg-white max-w-full px-10 py-5 items-center sticky top-0 z-10 text-black'>
                <div className="border-2 border-black rounded-3xl px-8 py-1 hover:cursor-pointer">Get App</div>  
                <button onClick={()=>setopen(!open)} className=''>
                    {/* {console.log(open)} */}
                    <MenuIcon></MenuIcon>
                    <TemporaryDrawer open={open} navlinks={navLinks}/>
                </button>

            </div>

            


            
        </>
    );
};

export default LandingPage;
