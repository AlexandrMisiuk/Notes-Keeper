import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  changeHeading,
  changeText
} from "../../../../../features/newNoteSlice";

import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  form: {
    display: "flex",
    flexFlow: "column nowrap"
  },
  textField: {
    marginBottom: theme.spacing(1)
  }
}));

const selectNewNote = (state) => state.newNote;

export default function NewNoteForm() {
  const classes = useStyles();

  const dispatch = useDispatch();
  const newNote = useSelector(selectNewNote);
  // console.log("newNote =>", newNote);

  return (
    <Box component="div" className={classes.form}>
      <Typography variant="h6" component="h2">
        New note
      </Typography>
      <TextField
        className={classes.textField}
        id="new-note-heading"
        label="Heading"
        placeholder="Enter heading"
        multiline
        value={newNote.heading}
        onChange={(e) => {
          dispatch(changeHeading(e.target.value));
        }}
      />
      <TextField
        className={classes.textField}
        id="new-note-note"
        label="Note"
        placeholder="Note..."
        multiline
        value={newNote.text}
        onChange={(e) => {
          dispatch(changeText(e.target.value));
        }}
      />
    </Box>
  );
}
