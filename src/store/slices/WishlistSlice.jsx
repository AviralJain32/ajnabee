import { createSlice } from "@reduxjs/toolkit";
const initialState={
    name:"",
    email:""
}
const WishlistsSlice=createSlice({
    name:"Wishlists",
    initialState,
    reducers:{
        addDetails(state,action){
            console.log(state);
            state=action.payload;
            console.log(state);
        },
    }
})


export default WishlistsSlice.reducer;
export const {addDetails}=WishlistsSlice.actions;
