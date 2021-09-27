import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";

import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import AddAlertIcon from "@material-ui/icons/AddAlert";
import AssignmentTurnedInIcon from "@material-ui/icons/AssignmentTurnedIn";

import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";

import { addNote } from "../../../../../../features/notesSlice";
import {
  resetNewNote,
  changeNoteColor
} from "../../../../../../features/newNoteSlice";

import ColorBtn from "./components/ColorBtn";

import useStyles from "./styles";

const selectNewNote = (state) => state.newNote;

export default function NewNoteBtnsGroup({ isInputError }) {
  const classes = useStyles();

  const dispatch = useDispatch();

  const newNote = useSelector(selectNewNote);
  // console.log("NewNote", newNote);

  function handleAddNote() {
    const isHeadingNotEmpty = !!newNote.heading;

    if (!isInputError && isHeadingNotEmpty) {
      const lastEdit = new Date().toLocaleString();
      const note = { ...newNote, lastEdit, id: uuidv4() };

      dispatch(addNote(note));

      dispatch(resetNewNote());
    }
  }

  const handleChoseColor = (color) => {
    dispatch(changeNoteColor(color));
  };

  return (
    <Box component="div" className={classes.btnsGroup}>
      <Tooltip title="Add alert">
        <IconButton aria-label="add-alert">
          <AddAlertIcon />
        </IconButton>
      </Tooltip>
      <Tooltip title="To do list">
        <IconButton aria-label="to-do-list">
          <AssignmentTurnedInIcon />
        </IconButton>
      </Tooltip>
      <ColorBtn handleChoseColor={handleChoseColor} />
      <Button className={classes.addNoteBtn} onClick={handleAddNote}>
        Add note
      </Button>
    </Box>
  );
}
