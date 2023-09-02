import { configureStore } from "@reduxjs/toolkit";
import bookSlice from "./bookSlice.js";
import authSlice from "./authSlice.js";


export default configureStore({
    reducer:{
        book: bookSlice,
        auth : authSlice,
    }
})