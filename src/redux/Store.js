import { configureStore } from "@reduxjs/toolkit";
import { CartSlice } from "./Slices/CartSlice";  


// We import reducer functions into store.js because:
// ✅ Reducers are responsible for updating the state.
// ✅ The state is managed globally in store.js using configureStore().

export const store = configureStore(
{
    //contains key value pair
    reducer:
    {
        cart: CartSlice.reducer,
    }
});



