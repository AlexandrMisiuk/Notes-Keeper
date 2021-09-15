import { createSlice } from "@reduxjs/toolkit";

let notesFromLocalStorage;

try {
  const key = "notes";
  const notesFromLocalStorageJSON = localStorage.getItem(key);
  notesFromLocalStorage = JSON.parse(notesFromLocalStorageJSON);
} catch (error) {
  console.error("Error, when to try getItem from local storage!!\n", error);
  notesFromLocalStorage = null;
}

const initialState = notesFromLocalStorage ?? [];

export const notesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    addNote: (state, action) => {
      state.unshift(action.payload);
    }
  }
});

// Action creators are generated for each case reducer function
export const { addNote } = notesSlice.actions;

export default notesSlice.reducer;
