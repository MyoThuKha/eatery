import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: {},
  filteredData: {},
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
  },
});

export const { setData, setFiltered } = slice.actions;

export default slice.reducer;
