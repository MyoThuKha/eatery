import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  curr: "716426",
};

const slice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setCurr: (state, action) => {
      state.curr = action.payload;
    },
  },
});

export const { setCurr } = slice.actions;

export default slice.reducer;
