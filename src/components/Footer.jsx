// import React from 'react';

// function Footer() {
//   return (
//     <footer className="bg-stone-900 text-white py-4 px-4 mt-8 flex flex-col justify-center items-center">
//       <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
//         {/* Contact Us Section */}
//         <div className="w-full lg:w-1/2">
//           <h1 className="text-3xl font-bold text-white">Contact Us</h1>
//           <p className="text-gray-400 mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas finibus leo leo, at rhoncus quam placerat vitae. Donec sed odio dui. Fusce semper quam non quam.</p>
//           <div className="flex items-center mt-4">
//             <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//               <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l4.586-4.586a2 2 0 012.828 0L16 12v12a2 2 0 01-2 2H3a2 2 0 01-2-2V8z" />
//               <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
//             </svg>
//             <span className="text-gray-400 ml-2">support@ajnabee.com</span>
//           </div>
//           <div className="flex items-center mt-2">
//             <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//               <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7v8a2 2 0 002 2h6M8 7a2 2 0 012-2v8a2 2 0 11-2-2zM16 7a2 2 0 012 2v8a2 2 0 11-2-2z" />
//             </svg>
//             <span className="text-gray-400 ml-2">+1 800 000 0000</span>
//           </div>
//         </div>

//         {/* Our Team Section */}
//         <div className="w-full lg:w-1/2 mt-8 lg:mt-0">
//           <h3 className="text-xl font-bold text-white">Our Team</h3>
//           <p className="text-gray-400 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas finibus leo leo, at rhoncus quam placerat vitae. Donec sed odio dui. Fusce semper quam non quam.</p>
//         </div>
//       </div>
//     </footer>
//   );
// }

// export default Footer;


import React from 'react';
import iosbtn from '../assets/iosbtn.svg';
// import iosdbtn from "../assets/iosbtn.svg"
import gplaybtn from '../assets/gplaybtn.svg';
import insta from '../assets/insta.svg';
import twitter from '../assets/twitter.svg';
import linkedin from '../assets/linkedin.svg';
import mail from '../assets/mail.svg';
import address from '../assets/address.svg';
import call from '../assets/call.svg';


function Footer() {
  return ( 
    <footer class="bg-white dark:bg-neutral-900">
      <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div class="md:flex md:justify-between ">
          <div class="mb-6 md:mb-0 ">
            <a href="https://ajnabee.com/" class="flex items-center">
                <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Ajnabee</span>
            </a>
            <h2 class="mt-44 text-m font-semibold text-gold-500 uppercase dark:text-gold-500">Contact Us</h2>
              <ul class="text-sm text-gray-500 dark:text-gray-400 font-medium">
                <li class="mb-4 mt-3 flex items-center"> 
                  <img src={address} alt="Address Icon" class="mr-2 w-4 h-4"/> 
                  <a href="https://ajnabee.com/" class="hover:underline">Address</a>
                </li>
                <li class="mb-5 flex items-center"> 
                  <img src={mail} alt="Email Icon" class="mr-2 w-4 h-4"/> 
                  <a href="https://tailwindcss.com/" class="hover:underline">support@ajnabee.com</a>
                </li>
                <li class="flex items-center">
                  <img src={call} alt="Phone Icon" class="mr-2 w-4 h-4"/> 
                  +91 88888 88888
                </li>
              </ul>

          </div>
            <div class="border-r border-gray-700 h-42 pl-20"></div>
            <div class="grid grid-cols-2 gap-6 sm:gap-6 sm:grid-cols-3 pl-6"> 
                <div>
                    <h2 class="mb-6 text-m font-semibold text-gold-500 uppercase dark:text-gold-500">Company</h2>
                    <ul class="text-sm text-gray-500 dark:text-gray-400 font-medium">
                        <li class="mb-4">
                            <a href="https://ajnabee.com/" class="hover:underline">About Us</a>
                        </li>
                        <li class="mb-4">
                            <a href="https://tailwindcss.com/" class="hover:underline">Careers</a>
                        </li>
                        <li class="mb-4">
                            <a href="https://tailwindcss.com/" class="hover:underline">FAQs</a>
                        </li>
                        <li class="mb-4">
                            <a href="https://tailwindcss.com/" class="hover:underline">Our Team</a>
                        </li>
                        <li class="mb-4">
                            <a href="https://tailwindcss.com/" class="hover:underline">Contact Us</a>
                        </li>
                    </ul>
                  </div>
                  <div>
                      <h2 class="mb-6 text-m font-semibold text-gold-500 uppercase dark:gold-500">Resources</h2>
                      <ul class="text-sm text-gray-500 dark:text-gray-400 font-medium">
                          <li class="mb-4">
                              <a href="https://github.com/themesberg/ajnabee" class="hover:underline ">Blogs/News Section</a>
                          </li>
                          <li class= "mb-4">
                              <a href="https://discord.com" class="hover:underline">Partnerships/Affliations</a>
                          </li>
                          <li>
                              <a href="https://discord.com" class="hover:underline">Support/Help Centre</a>
                          </li>
                      </ul>
                  </div>
                  <div>
                      <h2 class="mb-6 text-m font-semibold text-gold-500 uppercase dark:text-gold-500">Download App</h2>
                      <ul class="text-gray-500 dark:text-gray-400 font-medium">
                          <li class="mb-4">
                              <a href="#" class="flex item-center">
                                <img src={gplaybtn} class="h-8 me-3" alt="ajnabee Logo" /> 
                                </a>
                          </li>
                          <li>
                              <a href="#" class="flex item-center">
                              <img src={iosbtn} class="h-8 me-3" alt="ajnabee Logo" /> 
                              </a>
                          </li>
                      </ul>
                  </div>
                   {/* <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3"> */}
                        <div>
                          <div class="text-gold-500 dark:text-gold-400 font-medium text-xl flex items-center">
                            <span class="mr-3">Follow us:</span>
                            <a href="#" class="flex item-center">
                                <img src={insta} class=" me-3" alt="insta" /> 
                              </a>
                            <a href="#" class="flex item-center">
                                <img src={twitter} class="me-3" alt="twitter" /> 
                              </a>
                            <a href="#" class="flex item-center">
                                <img src={linkedin} class=" me-3" alt="linkedin" /> 
                              </a>
                          </div>
                        </div>
                      {/* </div> */}
              </div>
          </div>
          <hr class="my-3 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-4" />
          <div class="sm:flex sm:items-center sm:justify-between">
              <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="https://ajnabee.com/" class="hover:underline">Ajnabee™</a>. All Rights Reserved.  
              </span>
              <div class="flex mt-4 sm:justify-center sm:mt-0">
                  <a href="#" class="mx-1 text-gray-500 hover:text-gray-900 dark:hover:text-white"> Terms of Use</a>
                  <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"> Privacy</a>
                  <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"> Regions</a>
              </div>
          </div>
        </div>
    </footer>

  );
}

export default Footer;

