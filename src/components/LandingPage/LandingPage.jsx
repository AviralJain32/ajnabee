import React, { useEffect } from 'react';
import HeaderNavbar from "../HeaderNavbar";
import Card from './Card';
import Places from './Places';
import Download from './Download';
import Footer from '../Footer';
import TextField from '@mui/material/TextField';
import LandingPageImage from "../../assets/Landing_page.png";
import ResponsiveLandingImage from "../../assets/Small_Screen_Ajnabee.png"
import generateSalonData from '../../fakedataapi';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { useDispatch, useSelector } from 'react-redux';
import { addData } from '../../store/slices/SalonDataSlice';
import { Navigate, redirect, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const LandingPage = () => {


    let salonData=[];
    salonData=generateSalonData();

    const data=useSelector(state=>state.salonDatas);
    console.log(data);
    
  
    const sildeLeft=()=>{
        const slider=document.getElementById("slider")
        slider.scrollLeft=slider.scrollLeft-250;
    }
    const sildeRight=()=>{
        const slider=document.getElementById("slider")
        slider.scrollLeft=slider.scrollLeft+250;
    }
    const navigate=useNavigate()
    // const navLinks=[{Name:"Home",RedirectLink:"/"},{Name:"Near You",RedirectLink:"/nearyou"},{Name:"About",RedirectLink:"/about"},{Name:"Contact",RedirectLink:"/contact"}];
    return (
      <>
            {/* ajbanbee pic on landing page */}
            <div className="max-md:hidden bg-cover max-md:bg-fill md:bg-fixed bg-center h-screen" style={{ backgroundImage: `url(${LandingPageImage})` }}></div>
            <div className="md:hidden flex justify-center items-center bg-cover max-md:bg-fill md:bg-fixed bg-center h-screen" style={{ backgroundImage: `url(${ResponsiveLandingImage})` }}>
                <div>
                <div className=' text-white text-[7rem] font-romaticaStory'>Ajnabee</div>
                <div className=' text-primary text-center text-2xl mt-[-30%] font-poppins text-wrap'>Join Now for </div>
                <div className=' text-primary text-center text-2xl  font-poppins text-wrap'>a seamless experience </div>
                
                </div>
            </div>

            {/* sticky button */}
            <motion.div whileHover={{scale:1.2}} className=" fixed bottom-5 right-5 z-50">
            <button type="button" className=" text-black shadow-lg bg-yellow-400 hover:bg-yellow-500 font-medium rounded-lg text-lg py-3 px-4 me-2 mb-2">
            Join the Waitlist
          </button>
            </motion.div>
            {/* search box on landing page */}
            <div className="flex justify-center items-center mt-4">
                <div className="border border-black rounded-xl p-4  flex justify-between w-2/5 max-sm:w-4/5">
                <TextField color="warning" id="standard-basic" label="Enter location for saloons near you." variant="standard" fullWidth/>
                    <button className="border-2 border-yellow-400 rounded-full px-2 bg-yellow-400 text-black w-40 max-sm:text-sm max-sm:p-1 max-sm:h-9 max-sm:align-middle max-sm:mt-2" onClick={()=>(console.log("button clicked"),navigate("/nearyou"))}>Search &rarr;</button>
                </div>
            </div>


            <div className='relative flex items-center'>
            <div className='opacity-50 cursor-pointer hover:opacity-100 h-[455px] content-center max-sm:hidden' onClick={sildeLeft}>
                <ChevronLeftIcon  fontSize='large'/>
            </div>
            <div id='slider' className=' w-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide h-[450px] content-center relative mt-5'>
            {salonData.map((card,index)=>(
                <Card salondata={card} key={index}/>
            ))}
            </div>
            <div className='opacity-50 cursor-pointer hover:opacity-100 h-[455px] content-center max-sm:hidden' onClick={sildeRight}>
                <ChevronRightIcon  fontSize='large'/>
            </div>
            </div>


            <Places />
            <Download />
            <Footer />
            </>
    );
};

export default LandingPage;



{/* <div className="bg-cover bg-fixed bg-center h-screen" style={{ backgroundImage: `url(${LandingPageImage})` }}> */}
//     //     <div className="flex text-xl justify-between bg-transparent text-white h-10vh max-w-full px-10 py-5 items-center sticky top-0 z-50">
//     //             <div className="border-2 border-white rounded-3xl px-8 py-1 hover:cursor-pointer">Get App</div> 
//     //             <div className="text-white">
//     //                 {navLinks.map((links,index) => (
//     //                      <a key={index} href={links.RedirectLink} className="text-white px-10 font-semibold">{links.Name}</a>
//     //                 ))}
//     //             </div>
//     //             <div className="flex justify-between items-center">
//     //                 <span className="text-white mr-6">Login</span>
//     //                 {/* <button className="border-2 border-yellow-400 rounded-3xl px-4 bg-yellow-400 text-black">Sign up</button> */}
//     //                 <button className=" border-2 border-yellow-400 rounded-full px-4 bg-yellow-400 text-black ">Sign up</button>
//     //             </div>
//     //         </div>
//     //     </div>