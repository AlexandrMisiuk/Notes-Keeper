import React, { useEffect } from "react";
import { useSelector } from "react-redux";

import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

import NoteCard from "./components/NoteCard";

import useStyles from "./styles";

const selectActualNotes = (state) => state.notes;

export default function Notes() {
  const classes = useStyles();

  const notes = useSelector(selectActualNotes);
  const { actualNotes } = notes;
  // console.log("notes =>", notes);

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
        {actualNotes.map((note) => (
          <NoteCard note={note} key={note.id} />
        ))}
      </Box>
    </>
  );
}
