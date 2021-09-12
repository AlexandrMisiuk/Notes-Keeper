import React, { useState } from "react";

import clsx from "clsx";

import { makeStyles } from "@material-ui/core/styles";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import Paper from "@material-ui/core/Paper";
import NewNoteForm from "./components/NewNoteForm";
import NewNotesBtnsGroup from "./components/NewNotesBtnsGroup";

const useStyles = makeStyles((theme) => ({
  newNote: {
    display: "flex",
    width: "100%",
    flexFlow: "column nowrap",
    padding: theme.spacing(1),
    marginBottom: theme.spacing(2)
  },
  mediaQuery: {
    maxWidth: "500px"
  }
}));

export default function NewNote() {
  const classes = useStyles();
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.up("sm"));

  const [isInputError, setIsInputError] = useState(false);

  return (
    <Paper
      elevation={3}
      className={clsx(classes.newNote, {
        [classes.mediaQuery]: isTablet
      })}
    >
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
