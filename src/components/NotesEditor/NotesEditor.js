import React, { useState } from "react";
import { useDispatch } from "react-redux";

import Paper from "@material-ui/core/Paper";
import { Box } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";

import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import clsx from "clsx";
import { v4 as uuidv4 } from "uuid";

import { addNote, removeFromActualNotes } from "../../features/notesSlice";

import EditDialogTitle from "./components/EditDialogTitle";
import NotesEditorForm from "./components/NotesEditorForm";
import NotesEditorBtnsGroup from "./components/NotesEditorBtnsGroup/NotesEditorBtnsGroup";

import { useStyles, noteBackgroundColor } from "./styles";

export default function NotesEditor(props) {
  const { isNewNote, open, setOpen, note = {} } = props;
  const { heading = "", text = "", noteColor = "", id = "" } = note;

  const dispatch = useDispatch();

  const [currentHeading, setCurrentHeading] = useState(heading);
  const [currentText, setCurrentText] = useState(text);
  const [currentNoteColor, setCurrentNoteColor] = useState(noteColor);
  const [isInputError, setIsInputError] = useState(false);

  const classes = useStyles();
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.up("sm"));

  const paperClassName = clsx(classes.newNote, {
    [classes.mediaQuery]: isTablet,
    ...noteBackgroundColor(classes, currentNoteColor)
  });

  const boxClassName = clsx(classes.editNote, {
    [classes.mediaQuery]: isTablet,
    ...noteBackgroundColor(classes, currentNoteColor)
  });

  const handleClose = () => {
    setOpen(false);
    setCurrentHeading(heading);
    setCurrentText(text);
    setCurrentNoteColor(noteColor);
  };

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

  const handleChoseColor = (color) => {
    setCurrentNoteColor(color);
  };

  function handleAddNote() {
    const isHeadingNotEmpty = !!currentHeading;

    if (!isInputError && isHeadingNotEmpty) {
      const note = {
        heading: currentHeading,
        text: currentText,
        noteColor: currentNoteColor,
        lastEdit: new Date().toLocaleString(),
        id: uuidv4()
      };

      dispatch(addNote(note));

      setCurrentHeading("");
      setCurrentText("");
      setCurrentNoteColor("");
    }
  }

  return isNewNote ? (
    <Paper elevation={3} className={paperClassName}>
      <Typography variant="h6" component="h2">
        New note
      </Typography>
      <Box component="div" className={classes.form}>
        <NotesEditorForm
          currentHeading={currentHeading}
          setCurrentHeading={setCurrentHeading}
          currentText={currentText}
          setCurrentText={setCurrentText}
          isInputError={isInputError}
          setIsInputError={setIsInputError}
          textFieldId="new"
        />
      </Box>
      <Box component="div" className={classes.btnsGroup}>
        <NotesEditorBtnsGroup
          handleAction={handleAddNote}
          handleChoseColor={handleChoseColor}
          isNewNote={isNewNote}
        />
      </Box>
    </Paper>
  ) : (
    <Dialog aria-labelledby="note-card-edit-dialog-title" open={open}>
      <Box className={boxClassName}>
        <EditDialogTitle id="note-card-edit-dialog-title" onClose={handleClose}>
          Edit the note
        </EditDialogTitle>
        <MuiDialogContent className={classes.dialogForm}>
          <NotesEditorForm
            currentHeading={currentHeading}
            setCurrentHeading={setCurrentHeading}
            currentText={currentText}
            setCurrentText={setCurrentText}
            isInputError={isInputError}
            setIsInputError={setIsInputError}
            textFieldId="edit"
          />
        </MuiDialogContent>
        <MuiDialogActions className={classes.dialogBtnsGroup}>
          <NotesEditorBtnsGroup
            handleAction={handleSaveChanges}
            handleChoseColor={handleChoseColor}
            isNewNote={isNewNote}
          />
        </MuiDialogActions>
      </Box>
    </Dialog>
  );
}
