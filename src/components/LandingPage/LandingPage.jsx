// import React from 'react'
// import HeaderNavbar from "../HeaderNavbar"
// import styled from '@emotion/styled';
// import Card from './Card'
// import Places from './Places'
// import Download from './Download'
// import LandingPageImage from "../../assets/Landing_page.png"
// import Footer from './Footer'
// import TextField from '@mui/material/TextField';


// const BgImage=styled('div')({
//   backgroundImage:`url(${LandingPageImage})`,
//   height:"100vh",
//   backgroundPosition:"center",
//   backgroundAttachment: "fixed",
//   backgroundRepeat: "noRepeat",
//   backgroundSize: "cover",
// })
// const Signup=styled("Button")({
//   marginLeft:"30px",
//   border:"2px solid yellow",
//   borderRadius:"30vh",
//   padding:"0px 10px",
//   backgroundColor:`#ffd600`,
//   color:"black",
// })
// const Searchbar=styled("div")({
//   display:"flex",
//   justifyContent:"center",
//   alignItems:"center",
//   height:"20vh",


// })
// const InputBox=styled("div")({
//   border:"1px solid black",
//   padding:"20px",
//   display:"flex",
//   justifyContent:"space-between",
//   borderRadius:"15px",
//   width:"40vw"

// })

// const LandingPage = () => {
//   return (
//     <div>
//       <BgImage>
//         <HeaderNavbar></HeaderNavbar>
//       </BgImage>

//       <Searchbar>
//         <InputBox>
//         <TextField color="warning" id="standard-basic" label="Enter location for saloons near you." variant="standard" fullWidth/>
//             {/* <input type='text' placeholder='Enter location for saloons near you.' style={{border:"none",padding:"2px",width:"50vh"}}/> */}
//             <Signup style={{width:"10vw"}}>Search &rarr;</Signup>
//         </InputBox>
//     </Searchbar>

//         <Card/>
//         <Places/>
//         <Download/>
//         <Footer/>
        
//     </div>
//   )
// }

// export default LandingPage

import React from 'react';
import HeaderNavbar from "../HeaderNavbar";
import Card from './Card';
import Places from './Places';
import Download from './Download';
import Footer from './Footer';
import TextField from '@mui/material/TextField';
import LandingPageImage from "../../assets/Landing_page.png";

const LandingPage = () => {
    return (
      <>
        <div className="bg-cover bg-fixed bg-center h-screen" style={{ backgroundImage: `url(${LandingPageImage})` }}>
            <HeaderNavbar />
        </div>

            <div className="flex justify-center items-center mt-4">
                <div className="border border-black rounded-xl p-4  flex justify-between w-2/5">
                <TextField color="warning" id="standard-basic" label="Enter location for saloons near you." variant="standard" fullWidth/>
                    <button className="border-2 border-yellow-400 rounded-full px-2 bg-yellow-400 text-black w-40">Search &rarr;</button>
                </div>
            </div>

            <Card />
            <Places />
            <Download />
            <Footer />
            </>
    );
};

export default LandingPage;
