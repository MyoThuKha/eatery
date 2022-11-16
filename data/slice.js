import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: {},
  filteredData: {},
  curr: {},
};

const slice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
    },
    setFiltered: (state, action) => {
      state.filteredData = action.payload;
    },
    setCurr: (state, action) => {
      state.curr = action.payload;
    },
  },
});

export const { setData, setFiltered } = slice.actions;

export default slice.reducer;
