// 
import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart: []
};

const orderSlice = createSlice({
    name: "order",
    initialState,
    reducers: {
        addProduct: (state, action) => {
            state.cart.push(action.payload);
        },
        removeProduct: (state, action) => {
            const index = state.cart.findIndex(item => item === action.payload);
            if (index !== -1) {
                state.cart.splice(index, 1);
            }
        },
        updateProductQty: (state, action) => {
            const index = state.cart.findIndex(item => item.id === action.payload.id);
            if (index !== -1) {
                state.cart.splice(index, 1, action.payload);
            }
        }
    }
});

export const { addProduct, removeProduct, updateProductQty } = orderSlice.actions;
export default orderSlice.reducer;