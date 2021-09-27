import React from "react";

import { useSelector, useDispatch } from "react-redux";

import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";

import {
  changeHeading,
  changeText
} from "../../../../../../features/newNoteSlice";

import useStyles from "./styles";

const selectNewNote = (state) => state.newNote;

export default function NewNoteForm({ isInputError, setIsInputError }) {
  const classes = useStyles();

  const dispatch = useDispatch();
  const newNote = useSelector(selectNewNote);
  // console.log("newNote =>", newNote);

  function isOnlySpaces(text) {
    const regExp = /^\s/;
    const isOnlySpaces = regExp.test(text);
    // console.log("isNotValid ==>", isNotValid);
    return isOnlySpaces;
  }

  return (
    <Box component="div" className={classes.form}>
      <Typography variant="h6" component="h2">
        New note
      </Typography>
      <TextField
        className={classes.textField}
        error={isInputError}
        id="new-note-heading"
        label="Heading"
        placeholder="Enter heading"
        multiline
        value={newNote.heading}
        onChange={(e) => {
          setIsInputError(isOnlySpaces(e.target.value));
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
