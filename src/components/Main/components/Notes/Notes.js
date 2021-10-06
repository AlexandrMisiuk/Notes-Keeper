import React, { useEffect } from "react";
import { useSelector } from "react-redux";

import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

import NoteCard from "./components/NoteCard";

import useStyles from "./styles";

const selectActualNotes = (state) => state.notes;

export default function Notes({ isArchived }) {
  const classes = useStyles();

  const notes = useSelector(selectActualNotes);
  const { actualNotes, archivedNotes } = notes;
  // console.log("notes =>", notes);

  useEffect(() => {
    const key = "notes";
    const notesJSON = JSON.stringify(notes);
    localStorage.setItem(key, notesJSON);
  }, [notes]);

  return (
    <>
      <Typography component="h3" variant="h5">
        {isArchived ? "Archived Notes" : "Notes"}
      </Typography>
      <Box component="div" className={classes.notesBox}>
        {isArchived
          ? archivedNotes.map((note) => (
              <NoteCard isArchived={isArchived} note={note} key={note.id} />
            ))
          : actualNotes.map((note) => (
              <NoteCard isArchived={isArchived} note={note} key={note.id} />
            ))}
      </Box>
    </>
  );
}
