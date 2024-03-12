import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isOpen: false,
};

const checkSlice = createSlice({
    name: "checkout",
    initialState,
    reducers: {
        open: (state) => {
          state.isOpen = !state.isOpen;
        },
    },
});

export const { open } = checkSlice.actions;

export default checkSlice.reducer;