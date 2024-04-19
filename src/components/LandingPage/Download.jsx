import React from 'react'
import app from "../../assets/app.png"
function Download() {
    return (
      <div className="container mx-auto px-4 py-8 rounded-lg shadow-md">
        <div className="flex flex-col md:flex-row justify-center items-center gap-4">
          <div className="w-72 h-72 object-cover rounded-lg shadow-md">
            <img src= {app} alt="Image description" className="w-full h-full object-cover rounded" />
          </div>
          <div className="flex flex-col items-center">
            <button className="px-7 py-3 bg-blue-500 text-white font-bold rounded shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
              Get the Ajnabee app
            </button>
            <p className="text-gray-600 mt-2 text-center">Salons aren't strangers anymore!</p>
            <p className="text-gray-600 text-center mb-14">Download the Ajnabee app and enjoy easy bookings.</p>
            <button className="px-2 py-1 bg-green-500 text-white font-bold rounded shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
            Download Now
          </button>
          <p className="text-gray-500">on</p>
          </div>         
        </div>
      </div>
    );
  }
  

export default Download