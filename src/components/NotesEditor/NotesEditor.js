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
  const {
    heading = "",
    content = "",
    noteColor = "",
    id = "",
    isTodo = false,
  } = note;

  const dispatch = useDispatch();

  const [currentHeading, setCurrentHeading] = useState(heading);
  // console.log("currentHeading",currentHeading);
  const [currentNoteContent, setCurrentNoteContent] = useState(content);
  // console.log("currentNoteContent", currentNoteContent)
  const [currentNoteColor, setCurrentNoteColor] = useState(noteColor);
  const [currentIsTodo, setCurrentIsTodo] = useState(isTodo);
  // console.log("currentIsTodo", currentIsTodo);
  const [isInputError, setIsInputError] = useState(false);

  const classes = useStyles();
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.up("sm"));

  const paperClassName = clsx(classes.newNote, {
    [classes.mediaQuery]: isTablet,
    ...noteBackgroundColor(classes, currentNoteColor),
  });

  const boxClassName = clsx(classes.editNote, {
    [classes.mediaQuery]: isTablet,
    ...noteBackgroundColor(classes, currentNoteColor),
  });

  const handleClose = () => {
    setOpen(false);
    setCurrentHeading(heading);
    setCurrentNoteContent(content);
    setCurrentNoteColor(noteColor);
    setCurrentIsTodo(isTodo);
  };

  const handleChoseColor = (color) => {
    setCurrentNoteColor(color);
  };

  const handleChangeToList = () => {
    if (currentIsTodo) {
      const todosText = currentNoteContent.map((todo) => todo.text);
      const joinedText = todosText.join("\n").trim();
      setCurrentNoteContent(joinedText.trim());
      setCurrentIsTodo(!currentIsTodo);
    } else {
      const separatedText = currentNoteContent.split(/\n/);
      const todos = separatedText.map((item) => ({
        text: item,
        isDone: false,
      }));
      setCurrentNoteContent(todos);
      setCurrentIsTodo(!currentIsTodo);
    }
  };

  function handleSafeNote() {
    const isHeadingEmpty = !currentHeading.trim();

    if (isHeadingEmpty) {
      setIsInputError(true);
      return;
    }

    const note = {
      heading: currentHeading.trim(),
      content: currentNoteContent,
      noteColor: currentNoteColor,
      isTodo: currentIsTodo,
      lastEdit: new Date().toLocaleString(),
      id: isNewNote ? uuidv4() : id,
    };

    if (isNewNote) {
      dispatch(addNote(note));

      setCurrentHeading("");
      setCurrentNoteContent("");
      setCurrentNoteColor("");
      setCurrentIsTodo(false);

      setIsInputError(false);
    } else {
      dispatch(removeFromActualNotes(note));
      dispatch(addNote(note));

      setCurrentHeading(note.heading);
      setCurrentNoteContent(note.content);
      setCurrentNoteColor(note.noteColor);
      setCurrentIsTodo(note.isTodo);

      setOpen(false);
      setIsInputError(false);
    }
  }

  return isNewNote ? (
    <Paper elevation={3} className={paperClassName}>
      <Typography variant="h6" component="h2">
        New note
      </Typography>
      <Box component="div" className={classes.form}>
        <NotesEditorForm
          currentIsTodo={currentIsTodo}
          currentHeading={currentHeading}
          setCurrentHeading={setCurrentHeading}
          currentNoteContent={currentNoteContent}
          setCurrentNoteContent={setCurrentNoteContent}
          isInputError={isInputError}
          setIsInputError={setIsInputError}
          textFieldId="new"
        />
      </Box>
      <Box component="div" className={classes.btnsGroup}>
        <NotesEditorBtnsGroup
          handleSafeNote={handleSafeNote}
          handleChoseColor={handleChoseColor}
          handleChangeToList={handleChangeToList}
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
            currentIsTodo={currentIsTodo}
            currentHeading={currentHeading}
            setCurrentHeading={setCurrentHeading}
            currentNoteContent={currentNoteContent}
            setCurrentNoteContent={setCurrentNoteContent}
            isInputError={isInputError}
            setIsInputError={setIsInputError}
            textFieldId="edit"
          />
        </MuiDialogContent>
        <MuiDialogActions className={classes.dialogBtnsGroup}>
          <NotesEditorBtnsGroup
            handleSafeNote={handleSafeNote}
            handleChoseColor={handleChoseColor}
            handleChangeToList={handleChangeToList}
            isNewNote={isNewNote}
          />
        </MuiDialogActions>
      </Box>
    </Dialog>
  );
}
