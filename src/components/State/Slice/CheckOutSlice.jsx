import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: true,
};

const CheckOutSlice = createSlice({
  name: "checkout",
  initialState,
  reducers: {
    open: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { open } = CheckOutSlice.actions;
export default CheckOutSlice.reducer;
