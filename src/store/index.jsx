import { configureStore } from "@reduxjs/toolkit";
import SalonDataSlice from "./slices/SalonDataSlice";
import WishlistSlice from "./slices/WishlistSlice";

const store=configureStore({
    reducer:{
        salonDatas:SalonDataSlice,
        Wishlists:WishlistSlice
    },

})
export default store