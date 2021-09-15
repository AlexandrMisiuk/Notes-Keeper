import React, { useState } from "react";
import { useSelector } from "react-redux";

import clsx from "clsx";

import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import Paper from "@material-ui/core/Paper";
import NewNoteForm from "./components/NewNoteForm";
import NewNotesBtnsGroup from "./components/NewNotesBtnsGroup";

import { useStyles, noteBackgroundColor } from "./styles";

const selectNewNote = (state) => state.newNote;

export default function NewNote() {
  const classes = useStyles();
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.up("sm"));

  const { noteColor } = useSelector(selectNewNote);

  const [isInputError, setIsInputError] = useState(false);

  const paperClassName = clsx(classes.newNote, {
    [classes.mediaQuery]: isTablet,
    ...noteBackgroundColor(classes, noteColor)
  });

  return (
    <Paper elevation={3} className={paperClassName}>
      <NewNoteForm
        isInputError={isInputError}
        setIsInputError={setIsInputError}
      />
      <NewNotesBtnsGroup
        isInputError={isInputError}
        setIsInputError={setIsInputError}
      />
    </Paper>
  );
}
