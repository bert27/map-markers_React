import { createSlice } from "@reduxjs/toolkit";

export const markersSave = createSlice({
  name: "markers",
  initialState: {
    value: [],
  },
  //save makers in store - makers.
  reducers: {
    save: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { save } = markersSave.actions;

export default markersSave.reducer;
