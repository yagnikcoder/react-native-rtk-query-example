import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./cardSlice";
const store = configureStore({
    reducer:{
        card:CartSlice,
    },
});

export default store;