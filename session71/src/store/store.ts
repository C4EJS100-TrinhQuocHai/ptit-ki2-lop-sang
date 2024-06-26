import { configureStore } from "@reduxjs/toolkit";
import countReducer from "./reducers/countReducer";
import todolistReducer from "./reducers/todolistReducer";
const store  = configureStore({
    reducer:{
        countReducer,
        todolistReducer
    }
})
export default store;