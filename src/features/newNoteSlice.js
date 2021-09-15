import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  heading: "",
  text: "",
  noteColor: ""
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
    },
    changeNoteColor: (state, action) => {
      state.noteColor = action.payload;
    },
    resetNewNote: (state) => {
      state.heading = "";
      state.text = "";
      state.noteColor = "";
    }
  }
});

// Action creators are generated for each case reducer function
export const {
  changeHeading,
  changeText,
  changeNoteColor,
  resetNewNote
} = newNoteSlice.actions;

export default newNoteSlice.reducer;
