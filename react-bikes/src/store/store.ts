import {configureStore} from "@reduxjs/toolkit";
import userAuthReducer from "./userAuthSlice";
import bikesReducer from './bikesSlice';
import favouriteReducer from './likesSlice';

const store = configureStore({
    reducer:{
        auth: userAuthReducer,
        bikes: bikesReducer,
        favourite: favouriteReducer,
    },
});
export default store