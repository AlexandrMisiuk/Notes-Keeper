import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { Box } from "@material-ui/core";
import Dialog from "@material-ui/core/Dialog";

import clsx from "clsx";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import EditDialogTitle from "./components/EditDialogTitle";
import EditDialogForm from "./components/EditDialogForm";
import EditDialogActions from "./components/EditDialogActions";

import {
  addNote,
  removeFromActualNotes
} from "../../../../../../../../features/notesSlice";

import useStyles from "./styles";

import { noteBackgroundColor } from "../../../../../BlockForCreatingANewNote/styles";

export default function NoteCardEditDialog({ open, setOpen, note }) {
  const { heading, text, noteColor, id } = note;

  const [currentHeading, setCurrentHeading] = useState(heading);
  const [currentText, setCurrentText] = useState(text);
  const [currentNoteColor, setCurrentNoteColor] = useState(noteColor);
  const [isInputError, setIsInputError] = useState(false);

  const classes = useStyles();
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.up("sm"));

  const boxClassName = clsx(classes.root, {
    [classes.mediaQuery]: isTablet,
    ...noteBackgroundColor(classes, currentNoteColor)
  });

  const dispatch = useDispatch();

  function handleSaveChanges() {
    const isHeadingNotEmpty = !!currentHeading;

    //use early return
    if (!isInputError && isHeadingNotEmpty) {
      const note = {
        heading: currentHeading,
        text: currentText,
        noteColor: currentNoteColor,
        lastEdit: new Date().toLocaleString(),
        id
      };

      dispatch(removeFromActualNotes(note));
      dispatch(addNote(note));
      setOpen(false);
    }
  }

  const handleClose = () => {
    setOpen(false);
    setCurrentHeading(heading);
    setCurrentText(text);
    setCurrentNoteColor(noteColor);
  };

  const handleChoseColor = (color) => {
    setCurrentNoteColor(color);
  };

  return (
    <Dialog aria-labelledby="note-card-edit-dialog-title" open={open}>
      <Box className={boxClassName}>
        <EditDialogTitle id="note-card-edit-dialog-title" onClose={handleClose}>
          Edit the note
        </EditDialogTitle>
        <EditDialogForm
          currentHeading={currentHeading}
          setCurrentHeading={setCurrentHeading}
          currentText={currentText}
          setCurrentText={setCurrentText}
          isInputError={isInputError}
          setIsInputError={setIsInputError}
        />
        <EditDialogActions
          handleSaveChanges={handleSaveChanges}
          handleChoseColor={handleChoseColor}
        />
      </Box>
    </Dialog>
  );
}
