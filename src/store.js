import { configureStore } from "@reduxjs/toolkit";

import newNote from "./features/newNoteSlice";
import notes from "./features/notesSlice";

const store = configureStore({
  reducer: { newNote, notes }
});

export default store;
