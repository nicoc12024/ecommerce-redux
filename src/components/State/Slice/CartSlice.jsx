import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  amount: 0,
  total: 0,
};

const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // Adds or increases the amount of the item in the cartItems array
    add: (state, action) => {
      const { payload } = action;
      const index = state.cartItems.findIndex((cartItem) => cartItem.id === payload.id);
      if (index === -1) {
        return {
          ...state,
          cartItems: [...state.cartItems, { ...payload, amount: 1 }],
          amount: state.amount + 1,
        };
      } else {
        const updatedCartItems = [...state.cartItems];
        updatedCartItems[index] = {
          ...updatedCartItems[index],
          amount: updatedCartItems[index].amount + 1,
        };
        return {
          ...state,
          cartItems: updatedCartItems,
          amount: state.amount + 1,
        };
      }
    },
    // Decreases the amount of the item in the cartItems array
    decrease: (state, action) => {
      const { payload } = action;
      const index = state.cartItems.findIndex((cartItem) => cartItem.id === payload.id);
      if (index !== -1 && state.cartItems[index].amount > 0) {
        const updatedCartItems = [...state.cartItems];
        updatedCartItems[index] = {
          ...updatedCartItems[index],
          amount: updatedCartItems[index].amount - 1,
        };
        return {
          ...state,
          cartItems: updatedCartItems,
          amount: state.amount - 1,
        };
      }
      return state;
    },
    // Removes the item in the cartItems array
    remove: (state, action) => {
      const index = state.cartItems.findIndex(
        (cartItem) => cartItem.id === action.payload.id
      );
      if (index !== -1) {
        const cartItem = state.cartItems[index];
        const updatedCartItems = [
          ...state.cartItems.slice(0, index),
          ...state.cartItems.slice(index + 1),
        ];
        return {
          ...state,
          cartItems: updatedCartItems,
          amount: state.amount - cartItem.amount,
        };
      }
      return state;
    },

    clear: (state) => {
      state.cartItems = [];
      state.amount = 0;
    },
  },
});

export const { add, amount, decrease, remove, total, clear } = CartSlice.actions;
export default CartSlice.reducer;
