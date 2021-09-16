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

const initialState = notesFromLocalStorage ?? {
  actualNotes: [],
  archivedNotes: []
};

export const notesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    addNote: (state, action) => {
      state.actualNotes.unshift(action.payload);
    },
    removeFromActualNotes: (state, action) => {
      const filtredActualNotes = state.actualNotes.filter(
        (note) => note.id !== action.payload.id
      );
      // console.log(filtredActualNotes);
      state.actualNotes = [...filtredActualNotes];
    },
    moveToArchivedNotes: (state, action) => {
      state.archivedNotes.unshift(action.payload);
    }
  }
});

// Action creators are generated for each case reducer function
export const {
  addNote,
  moveToArchivedNotes,
  removeFromActualNotes
} = notesSlice.actions;

export default notesSlice.reducer;
