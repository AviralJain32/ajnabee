import { configureStore } from "@reduxjs/toolkit";
import SalonDataSlice from "./slices/SalonDataSlice";

const store=configureStore({
    reducer:{
        salonDatas:SalonDataSlice,
    },

})
export default store