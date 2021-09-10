import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const notesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    addNote: (state, action) => {
      state.push(action.payload);
    }
  }
});

// Action creators are generated for each case reducer function
export const { addNote } = notesSlice.actions;

export default notesSlice.reducer;
