import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";

const store = configureStore({
    reducer: {
        cart: cartSlice,
    },
});

export default store;


/**
 * Steps we have done yet
 * 
 * --> Create store 
 *        -- configureStore()  --> RTK(Redux toolkit)
 * 
 * --> Provide my store to app
 *        -- <Provide store={store}> - import from react-redux
 * 
 * --> Slice
 *        -- RTK - createSlice({
 *                     name: " ",
 *                     initialState: [],
 *                     reducers: {
 *                          action: function
 *                          addItem: (state, action) => {
 *                              state = action.payload;
 *                          } 
 *                     }
 *                 });
 *                 export default cartSlice.reducer;
 *                 export const {addItem, removeItem, clearCart} = cartSlice.actions;
 * 
 * --> Put the slice into store
 *          - {
 *                  reduce: {
 *                      All these slice reducer will come into reducer
 *                      eg: cart : cartSlice,
 *                          user : userSlice
 *                  }  
 *            }
 * 
 */