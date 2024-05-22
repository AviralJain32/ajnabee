// // dropdown code

//   // const [open, setOpen] = useState(false);
//   // let menuRef=useRef();
//   // useEffect(() => {
//   //   let handler = (e)=>{
//   //     if(!menuRef.current.contains(e.target)){
//   //       setOpen(false);
//   //       console.log(menuRef.current);
//   //     }      
//   //   };
  
//   //   document.addEventListener("mousedown", handler);
//   //   return() =>{
//   //     document.removeEventListener("mousedown", handler);
//   //   }
  
//   // });


//   // onClick={()=>{setOpen(!open)}}

//   {/* <div className={`dropdown-menu ${open? 'active' : 'inactive'} absolute`} >
        
//       </div> */}

//       // .dropdown-menu.active{
//       //   opacity: 1;
//       //   visibility: visible;
//       //   transform: translateY(0);
//       //   transition: var(--speed) ease;
//       // }
      
//       // .dropdown-menu.inactive{
//       //   opacity: 0;
//       //   visibility: hidden;
//       //   transform: translateY(-20px);
//       //   transition: var(--speed) ease;
//       // }


import React, { useEffect, useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import Card from '../LandingPage/Card';
import FilterData from './FilterData.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { searchData } from '../../store/slices/SalonDataSlice.jsx';

const NearMe = () => {
  const [salonName, setSalonName] = useState('');
  const dispatch = useDispatch();
  const salonDataRedux = useSelector(searchData(salonName));


  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(searchData(salonName));
    console.log("in submit handler");
  };

  const handleInputChange = (e) => {
    setSalonName(e.target.value);
  };

  return (
    <div className='mx-8'>
      <div className='flex justify-center items-center mt-4 '>
        <form onSubmit={submitHandler} className='w-11/12 md:w-2/6 justify-between flex rounded-xl p-2 border-2 border-black '>
          <input
            value={salonName}
            onChange={handleInputChange}
            className='w-[80%] pl-2 focus:outline-none'
            placeholder='Search Nearby Salons / Locations'
          />
          <button type='submit'>
            <SearchIcon />
          </button>
        </form>
      </div>
      <div className='flex my-4'>
        <div>
          <FilterData />
        </div>
      </div>
      <div className='flex gap-4 p-4 flex-wrap'>
        {salonDataRedux.map((card, index) => (
          <Card salondata={card} key={index} />
        ))}
      </div>
    </div>
  );
};

export default NearMe;
