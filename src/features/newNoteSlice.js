import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  heading: "",
  text: ""
};

export const newNoteSlice = createSlice({
  name: "newNote",
  initialState,
  reducers: {
    changeHeading: (state, action) => {
      state.heading = action.payload;
    },
    changeText: (state, action) => {
      state.text = action.payload;
    }
  }
});

// Action creators are generated for each case reducer function
export const { changeHeading, changeText } = newNoteSlice.actions;

export default newNoteSlice.reducer;
