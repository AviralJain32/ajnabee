import React, { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import { Drawer } from '@mui/material';
import TemporaryDrawer from './LandingPage/Drawer';


// 2 baar bani hai navbar ek landing page ke liye ek vase hi
const LandingPage = () => {
    const navLinks=[{Name:"Home",RedirectLink:"/"},{Name:"Near You",RedirectLink:"/nearyou"},{Name:"About",RedirectLink:"/about"},{Name:"Contact",RedirectLink:"/contact"}];

    const location=useLocation()
    const [open, setopen] = useState(false)
    
    if(location.pathname=="/signup"){
        return null;
    }

    return (
        <>
            <div className="flex text-xl justify-between bg-white max-w-full px-10 py-5 items-center sticky top-0 z-10 text-black max-md:hidden">
                {/* <div className=' font-romaticaStory text-2xl'>Aviral Jain</div> */}
                <div className="border-2 border-black rounded-3xl px-8 py-1 hover:cursor-pointer">Get App</div> 
                
                <div className=""> 
                    {navLinks.map((links,index) => (
                        <a key={index} href={links.RedirectLink} className="text-black z-10 px-10 font-semibold">{links.Name}</a>
                    ))}
                </div>
                <div className="flex justify-between items-center">
                    {/* <span className="text-black mr-6">Login</span> */}
                    <button className=" border-2 border-yellow-400 rounded-full px-4 bg-yellow-400 text-black "><NavLink to={"/signup"}>Why Join Us ?</NavLink></button>
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
