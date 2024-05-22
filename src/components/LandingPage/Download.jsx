import React from 'react'
import app from "../../assets/app.png"
import GooglePlayIcon from "../../assets/googlePlayIcon.svg"
import AppStoreIcon from "../../assets/appStoreIcon.svg"
import { Link } from 'react-router-dom';
import ContentCutIcon from '@mui/icons-material/ContentCut';
import { animateScroll } from 'react-scroll';
function Download() {

  const scrollToTop = () => {
    const options = {
      // your options here, for example:
      duration: 1000,
      smooth: true,
    };
    animateScroll.scrollToTop(options);
  };

    return (
      <div className="relative w-[98vw] flex justify-center items-center overflow-auto">
      <div id='getapp' className=" container mx-auto px-4 py-8 rounded-lg shadow-md">
        <button onClick={scrollToTop} className=' absolute bottom-10 -rotate-90 left-10 p-5 rounded-full bg-primary   ' ><ContentCutIcon fontSize='large'/> </button>
        <div className="flex flex-col md:flex-row justify-center items-center gap-10">
          <div className="w-72 h-72 object-cover rounded-lg shadow-lg">
            <img src= {app} alt="Image description" className="w-full h-full object-cover rounded" />
          </div>
          <div className="flex flex-col items-center">
            <div className="m-4 text-4xl font-semibold ">
              Get the <span className=' text-primary'>Ajnabee</span>  app
            </div>
            <p className="text-gray-600 mt-2 text-center text-xl">Salons aren't strangers anymore!</p>
            <p className="text-gray-600 text-center mb-14 text-xl">Download the Ajnabee app and enjoy easy bookings.</p>
            <button type="button" className=" text-black bg-yellow-400 hover:bg-yellow-500 font-medium rounded-lg text-lg py-3 px-4 me-2 mb-2">
            Download Now
          </button>
          <p className="text-gray-500">on</p>
          <div className=' flex gap-5 mt-4'>
            <Link><img src={GooglePlayIcon} alt='Google Play Icon' className='w-8 h-8'/></Link> 
            <Link><img src={AppStoreIcon} alt="App Store Icon" className='w-8 h-8'/></Link> 
            
          </div>
          </div>         
        </div>
      </div>
      </div>
    );
  }
  

export default Download