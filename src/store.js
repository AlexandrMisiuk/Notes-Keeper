import { configureStore } from "@reduxjs/toolkit";

import notes from "./features/notesSlice";

const store = configureStore({
  reducer: { notes }
});

export default store;
