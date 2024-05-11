import React, { useState } from 'react'
import TuneIcon from '@mui/icons-material/Tune';

const FilterDataa = () => {
    const [Filter, setFilter] = useState(false)
    const handleFilterClick = () => {
        setFilter(prevState => !prevState);
        console.log(Filter);
      };

  return (
    <div className='flex'>

    <div>
    <button onClick={handleFilterClick} className={`${Filter?"bg-primary":"bg-white"} relative hover:cursor-pointer border-2 border-black p-2 rounded-xl m-2 w-max flex items-center text-[1rem]`}>
        Filters
        <TuneIcon className='ml-2'></TuneIcon>
      </button>

      {/* Dialog box */}
      <div onClick={handleFilterClick} className={`${Filter?"block":"hidden" } flex justify-center items-center absolute top-0 left-0 opacity-50 z-40  bg-yellow-400 min-h-screen min-w-[100vw]`}>
        <div className='flex justify-center items-center z-50 bg-white p-2 w-3/6 h-3/6' style={{ backdropFilter: 'blur(10px)' }}>
            Hello
        </div>
      </div>
      </div>
      <button className=' focus:bg-primary hover:cursor-pointer border-2 border-black p-2 rounded-xl m-2 w-max flex items-center text-[1rem]'>
        Ratings: 4.0+
      </button>
      <button className=' focus:bg-primary hover:cursor-pointer border-2 border-black p-2 rounded-xl m-2 w-max flex items-center text-[1rem]'>
        Open Now
      </button>
    </div>
  )
}

export default FilterDataa
