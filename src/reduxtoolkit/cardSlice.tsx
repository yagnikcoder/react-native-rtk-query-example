import { createSlice } from "@reduxjs/toolkit";
const intialCardState:any[] = [];
const CartSlice = createSlice({
    name:'card',
    initialState:intialCardState,
    reducers:{
        addItemToCart:(state,action)=>{
            state.push(action.payload);
        },
        removeItemFromCart:(state,action)=>{
            const index = state.findIndex((item)=>item.id === action.payload.id);
            if (index !== -1) {
                state.splice(index, 1);
            }
        },
        deleteAllItems: (state) => {
            return [];
        },
    },
});

export const {addItemToCart,removeItemFromCart,deleteAllItems} = CartSlice.actions;
export default CartSlice.reducer;