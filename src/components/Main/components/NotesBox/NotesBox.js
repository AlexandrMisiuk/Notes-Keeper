import React from "react";

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

const notes = [
  {
    heading: "heading",
    body: "You can pass ",
    lastUpdates: new Date().toLocaleString()
  },
  {
    heading: "heading",
    body:
      "You can pass a function to makeStyles a function to makeStyles (interpolation)",
    lastUpdates: new Date().toLocaleString()
  },
  {
    heading: "heading",
    body: "You can pass a function to ",
    lastUpdates: new Date().toLocaleString()
  },
  {
    heading: "heading",
    body: "You can pass a function ",
    lastUpdates: new Date().toLocaleString()
  },
  {
    heading: "heading",
    body: "You can pass a ",
    lastUpdates: new Date().toLocaleString()
  }
];

export default function NotesBox() {
  const classes = useStyles();

  return (
    <>
      <Typography component="h3" variant="h5">
        Notes
      </Typography>
      <Box component="div" className={classes.notesBox}>
        {notes.map((note) => (
          <Note note={note} />
        ))}
      </Box>
    </>
  );
}
