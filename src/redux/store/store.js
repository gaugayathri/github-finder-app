import { configureStore } from "@reduxjs/toolkit";
import reposReducer from '../slices/slices'
 const store=configureStore({
    reducer:{ 
       repos:reposReducer,
    }
})
export default store;