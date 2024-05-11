import React from 'react';
import { motion} from 'framer-motion';
const Places = () => {
  const places = [
    { name: 'Connaught Place', count: 17 },
    { name: 'Preet Vihar', count: 12 },
    { name: 'Chanakyapuri', count: 12 },
    { name: 'Khan Market', count: 26 },
    { name: 'DLF Cyber City', count: 42 },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
        <h2 className="text-center text-4xl font-poppins mb-7"> {/* Increased size with text-2xl */}
            <span className="text-black">Popular Localities in and Around </span>
            <span className="text-gold-500 font-bold">Delhi NCR</span>
        </h2>
      <div className="flex flex-wrap justify-around mb-2 text-center">
        {places.map((place) => (
          <motion.div whileHover={{scale:1.1}} key={place.name} className="w-full md:w-1/3  md:mb-0 rounded-xl hover:scale-110 hover:cursor-pointer shadow-gold bg-white px-4 py-2  border border-gray-300" >
            <h3 className="text-xl font-bold mb-1">{place.name}</h3>
            <p className="text-gray-600 mb-3">{place.count} places</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
  
};

export default Places;