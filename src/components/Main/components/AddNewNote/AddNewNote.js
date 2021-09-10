import React from "react";

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
  const matches = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <Paper
      elevation={3}
      className={clsx(classes.newNote, {
        [classes.mediaQuery]: matches
      })}
    >
      <NewNoteForm />
      <NewNotesBtnsGroup />
    </Paper>
  );
}
