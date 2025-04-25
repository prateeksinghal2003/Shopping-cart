
// The global Redux state is an object { cart: [] }.-->when we think about store.js file 

//actually global "state" is   {
//                             cart:[]
//                           }

// Inside CartSlice reducers, state refers only to cart, which is an array.

// Since cart is an array, .filter() works correctly inside the reducer.

//inside a  component state refers to an object 









import { createSlice } from "@reduxjs/toolkit";

export const CartSlice = createSlice(
 {
    name:"cart",
    initialState:[],

    reducers:
    {
        //jo homepage pe addcart aur remove cart dikh raha tha

        //action.payload---jo add main input parameter dala


        // In Redux, action.payload comes from the action dispatched from a React component.
        // It contains the data passed when calling the action.  





// Example: Dispatching add Action
// dispatch(add({ id: 1, name: "Laptop", price: 50000 }));
// ✅ Action object being passed:


// {
//     type: "cart/add",
//     payload: { id: 1, name: "Laptop", price: 50000 }
// }


    add:(state,action) => 
        {
            state.push(action.payload);

        },

        remove:(state,action) => 
        {
            return state.filter((item) => item.id !== action.payload);
        },
    }
 }
);

export const {add, remove} = CartSlice.actions;
export default CartSlice.reducer;