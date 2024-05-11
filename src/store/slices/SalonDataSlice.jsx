import { createSlice } from "@reduxjs/toolkit";
const initialState={
    salons:[{Name:"Aviral Jain",
    Address:"A-19/2",
    Ratings:"4.4",
    Services:"images of services",
    Image:"https://images.pexels.com/photos/16088378/pexels-photo-16088378/free-photo-of-photo-of-breakfast-with-pancakes-and-a-cup-of-coffee-next-to-a-book-and-a-smartphone.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}]
}
const salonDataSlice=createSlice({
    name:"salonDatas",
    initialState,
    reducers:{
        addData(state,action){
            state.salons=action.payload
            console.log(state.salons);
            console.log(action.payload);
        },
    }
})

console.log(salonDataSlice.actions);

export const searchData = (searchTerm) => (state) => {
    if (!searchTerm) {
      return state.salonDatas.salons; // Return all salons if search term is empty
    }
    return state.salonDatas.salons.filter((salon) =>
      salon.Name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

export default salonDataSlice.reducer;
export const {addData}=salonDataSlice.actions;
