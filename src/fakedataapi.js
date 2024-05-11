import Chance from "chance";    
import { useDispatch } from "react-redux";

const chance=new Chance()


const generateSalonData=()=>{
    const salonFakeData=[];

    for (let i = 0; i < 100; i++) {
        const object={
            Name:chance.first()+" Salon",
            Address:chance.address({short_suffix: true}),
            Ratings:Math.floor(Math.random() * 5),
            Services:"images of services",
            Image:"https://images.pexels.com/photos/16088378/pexels-photo-16088378/free-photo-of-photo-of-breakfast-with-pancakes-and-a-cup-of-coffee-next-to-a-book-and-a-smartphone.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        }
        salonFakeData.push(object);
    }
    return salonFakeData
}

export default generateSalonData;


