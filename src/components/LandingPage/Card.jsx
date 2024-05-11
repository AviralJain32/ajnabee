import Star from "../../assets/star.png";
import { motion } from "framer-motion";
function Card({ salondata }) {
    
    return (
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.8 }} className='relative w-[305px] h-[420px] inline-block mx-4 max-sm:mx-1 max-sm:my-3 cursor-pointer border-2 ease-in-out duration-300 rounded-2xl bg-cover border-black' style={{ backgroundImage: `url(${salondata.Image})` }}>
            <div id="slider" className="absolute bottom-0 w-[302px] max-sm:w-[99%] rounded-b-2xl bg-white/50 backdrop-blur-sm flex-col flex justify-evenly">
                <div className='flex justify-between p-3'>
                    <div>
                        <h5 className='font-bold'>{salondata.Name}</h5>
                        <div className='text-xs'>{salondata.Address}</div>
                    </div>
                    <div className='bg-white flex h-6 px-1'>
                        <img src={Star} className="h-6 w-6" alt="ratings"/>
                        <div className='font-bold'>{salondata.Ratings}</div>
                    </div>
                </div>
                <div className='flex justify-center mb-4'> 
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </div>
            </div>
        </motion.div>
    );
}

export default Card;
