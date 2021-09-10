import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import Paper from "@material-ui/core/Paper";
import NewNoteForm from "./components/NewNoteForm";
import NotesBox from "./components/NotesBox";

const useStyles = makeStyles((theme) => ({
  main: {
    flexGrow: 1,
    display: "flex",
    flexFlow: "column nowrap",
    alignItems: "center",
    marginTop: theme.spacing(2),
    marginRight: theme.spacing(2),
    padding: theme.spacing(2),
    color: theme.palette.text.primary,
    minHeight: "80vh"
  }
}));

export default function CenteredGrid() {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <Paper component="main" elevation={4} className={classes.main}>
      <NewNoteForm />
      <NotesBox />
    </Paper>
  );
}
