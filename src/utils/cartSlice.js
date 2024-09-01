import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: []
    },
    reducers: {
        addItem: (state, action) => {
            state?.items?.push(action?.payload);
        },
        removeItem: (state, action) => {
            state?.items?.pop();
        },
        clearCart: (state) => {
            state?.items?.splice(0, state?.items?.length);
        }
    }
});

export const {addItem, clearCart, removeItem} = cartSlice?.actions;
export default cartSlice?.reducer;