import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: []
    },
    // We can modify cart slice by reducer function
    reducers: {
        addItem: (state, action) => {
            state.items.push(action.payload);
        },
        clearCart: (state) => {
            state.items = [];
        },
        removeItem: (state, action) => {
            // Write logic here to remove single cart item
            const itemToRemove = action.payload.item.card.info.id;
            state.items = [
                ...state.items.filter(item => item.item.card.info.id !== itemToRemove)
            ]
        }
    }
});

/** createSlice returns an object tp cartSlice --> So cart slice will have at the time of exporting
 * 
 * Assume cartSlice object is like that on assume it, it's not real
 * cartSlice = {
 *      actions: {addItem, removeItem, clearCart}
 *      reducer: reducers
 * }
 * 
 */
export default cartSlice.reducer;
export const {addItem, removeItem, clearCart} = cartSlice.actions;