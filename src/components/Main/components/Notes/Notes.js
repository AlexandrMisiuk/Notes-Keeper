import React, { useEffect } from "react";
import { useSelector } from "react-redux";

import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Note from "./components/Note";

import useStyles from "./styles";

const selectNotes = (state) => state.notes;

export default function Notes() {
  const classes = useStyles();

  const notes = useSelector(selectNotes);
  console.log("notes =>", notes);

  useEffect(() => {
    const key = "notes";
    const notesJSON = JSON.stringify(notes);
    localStorage.setItem(key, notesJSON);
  }, [notes]);

  return (
    <>
      <Typography component="h3" variant="h5">
        Notes
      </Typography>
      <Box component="div" className={classes.notesBox}>
        {notes.map((note) => (
          <Note note={note} key={note.id} />
        ))}
      </Box>
    </>
  );
}
