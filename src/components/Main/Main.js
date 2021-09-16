import React from "react";

import Paper from "@material-ui/core/Paper";
import BlockForCreatingANewNote from "./components/BlockForCreatingANewNote";
import Notes from "./components/Notes";

import useStyles from "./styles";

export default function Main() {
  const classes = useStyles();

  return (
    <Paper component="main" elevation={4} className={classes.main}>
      <BlockForCreatingANewNote />
      <Notes />
    </Paper>
  );
}
