import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";

import { addNote } from "../../../../../features/notesSlice";

import { makeStyles } from "@material-ui/core/styles";

import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import AddAlertIcon from "@material-ui/icons/AddAlert";
import AssignmentTurnedInIcon from "@material-ui/icons/AssignmentTurnedIn";
import PaletteIcon from "@material-ui/icons/Palette";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";

const useStyles = makeStyles((theme) => ({
  btnsGroup: {
    display: "flex",
    flexFlow: "row nowrap"
  },
  addNoteBtn: {
    fontSize: theme.typography.pxToRem(18),
    textTransform: "none",
    marginLeft: "auto"
  }
}));

const selectNewNote = (state) => state.newNote;

export default function NewNotesBtnsGroup({ isInputError }) {
  const classes = useStyles();

  const dispatch = useDispatch();
  const { heading, text } = useSelector(selectNewNote);

  function handleAddNote() {
    if (!isInputError && heading) {
      const lastEdit = new Date().toLocaleString();
      dispatch(addNote({ heading, text, lastEdit, id: uuidv4() }));
    }
  }

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
      <Tooltip title="Change color">
        <IconButton aria-label="change-color">
          <PaletteIcon />
        </IconButton>
      </Tooltip>
      <Button className={classes.addNoteBtn} onClick={handleAddNote}>
        Add note
      </Button>
    </Box>
  );
}
