import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import Paper from "@material-ui/core/Paper";
import AddNewNote from "./components/AddNewNote";
import Notes from "./components/Notes";

const useStyles = makeStyles((theme) => ({
  main: {
    flexGrow: 1,
    display: "flex",
    flexFlow: "column nowrap",
    alignItems: "center",
    marginTop: theme.spacing(2),
    marginRight: theme.spacing(2),
    marginBottom: theme.spacing(2),
    padding: theme.spacing(2),
    color: theme.palette.text.primary,
    minHeight: "80vh"
  }
}));

export default function Main() {
  const classes = useStyles();

  return (
    <Paper component="main" elevation={4} className={classes.main}>
      <AddNewNote />
      <Notes />
    </Paper>
  );
}
