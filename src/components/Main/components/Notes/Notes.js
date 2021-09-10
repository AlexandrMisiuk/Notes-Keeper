import React from "react";
import { useSelector } from "react-redux";

import { makeStyles } from "@material-ui/core/styles";

import Box from "@material-ui/core/Box";
import { Typography } from "@material-ui/core";
import Note from "./components/Note";

const useStyles = makeStyles((theme) => ({
  notesBox: {
    flexGrow: 1,
    width: "100%",
    display: "block"
  }
}));

const selectNotes = (state) => state.notes;

export default function Notes() {
  const classes = useStyles();

  const notes = useSelector(selectNotes);
  // console.log("notes =>", notes);

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
