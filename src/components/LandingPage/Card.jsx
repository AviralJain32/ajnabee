import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Star from "../../assets/star.png"
function Card() {
    //data from backend api
    const data=[{
        image:"https://images.pexels.com/photos/20279610/pexels-photo-20279610/free-photo-of-a-vase-with-three-yellow-tulips-in-it.jpeg"
    },
    {
        image:"https://images.pexels.com/photos/12704502/pexels-photo-12704502.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        image:"https://images.pexels.com/photos/16088378/pexels-photo-16088378/free-photo-of-photo-of-breakfast-with-pancakes-and-a-cup-of-coffee-next-to-a-book-and-a-smartphone.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        image:"https://images.pexels.com/photos/9956284/pexels-photo-9956284.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        image:"https://images.pexels.com/photos/14663439/pexels-photo-14663439.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        image:"https://images.pexels.com/photos/18409224/pexels-photo-18409224/free-photo-of-glass-ceiling-over-staircase.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        image:"https://images.pexels.com/photos/18409224/pexels-photo-18409224/free-photo-of-glass-ceiling-over-staircase.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        image:"https://images.pexels.com/photos/18409224/pexels-photo-18409224/free-photo-of-glass-ceiling-over-staircase.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        image:"https://images.pexels.com/photos/18409224/pexels-photo-18409224/free-photo-of-glass-ceiling-over-staircase.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        image:"https://images.pexels.com/photos/18409224/pexels-photo-18409224/free-photo-of-glass-ceiling-over-staircase.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        image:"https://images.pexels.com/photos/18409224/pexels-photo-18409224/free-photo-of-glass-ceiling-over-staircase.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        image:"https://images.pexels.com/photos/18409224/pexels-photo-18409224/free-photo-of-glass-ceiling-over-staircase.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        image:"https://images.pexels.com/photos/18409224/pexels-photo-18409224/free-photo-of-glass-ceiling-over-staircase.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        image:"https://images.pexels.com/photos/18409224/pexels-photo-18409224/free-photo-of-glass-ceiling-over-staircase.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    }
]
    const sildeLeft=()=>{
        const slider=document.getElementById("slider")
        slider.scrollLeft=slider.scrollLeft-250;
    }
    const sildeRight=()=>{
        const slider=document.getElementById("slider")
        slider.scrollLeft=slider.scrollLeft+250;
    }
    return (
        <div className='relative flex items-center'>
            <div className='opacity-50 cursor-pointer hover:opacity-100 h-[455px] content-center' onClick={sildeLeft}>
                <ChevronLeftIcon  fontSize='large'/>
            </div>
            <div id='slider' className=' w-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide h-[450px] content-center relative'>
            {data.map((item)=>(
                <div className='w-[305px] h-[420px] inline-block mx-4 cursor-pointer border-2 ease-in-out duration-300  rounded-2xl bg-cover border-black ' style={{ backgroundImage: `url(${item.image})` }} src={item.image} key={item.image}>
                    <div id="slider" className="absolute bottom-5 w-[302px] rounded-b-2xl bg-white/50   backdrop-blur-sm flex-col flex justify-evenly">
                        <div className=' flex justify-between p-3'>
                            <div>
                                <h5 className=' font-bold '>AB Saloon</h5>
                                <div className=' text-xs'>Vasantkunj ,delhi</div>
                            </div>
                            <div className='bg-white flex h-6 px-1 '>
                                <img src={Star} className="h-6 w-6" alt="ratings"/>
                                <div className='font-bold'>4.5</div>
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
                </div>
            ))}
            </div>
            <div className='opacity-50 cursor-pointer hover:opacity-100 h-[455px] content-center' onClick={sildeRight}>
                <ChevronRightIcon  fontSize='large'/>
            </div>
        </div>
    );
}

export default Card;