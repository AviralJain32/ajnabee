import React from 'react';

function Footer() {
  return (
    <footer className="bg-stone-900 text-white py-4 px-4 mt-8 flex flex-col justify-center items-center">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
        {/* Contact Us Section */}
        <div className="w-full lg:w-1/2">
          <h1 className="text-3xl font-bold text-white">Contact Us</h1>
          <p className="text-gray-400 mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas finibus leo leo, at rhoncus quam placerat vitae. Donec sed odio dui. Fusce semper quam non quam.</p>
          <div className="flex items-center mt-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l4.586-4.586a2 2 0 012.828 0L16 12v12a2 2 0 01-2 2H3a2 2 0 01-2-2V8z" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span className="text-gray-400 ml-2">support@ajnabee.com</span>
          </div>
          <div className="flex items-center mt-2">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7v8a2 2 0 002 2h6M8 7a2 2 0 012-2v8a2 2 0 11-2-2zM16 7a2 2 0 012 2v8a2 2 0 11-2-2z" />
            </svg>
            <span className="text-gray-400 ml-2">+1 800 000 0000</span>
          </div>
        </div>

        {/* Our Team Section */}
        <div className="w-full lg:w-1/2 mt-8 lg:mt-0">
          <h3 className="text-xl font-bold text-white">Our Team</h3>
          <p className="text-gray-400 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas finibus leo leo, at rhoncus quam placerat vitae. Donec sed odio dui. Fusce semper quam non quam.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;