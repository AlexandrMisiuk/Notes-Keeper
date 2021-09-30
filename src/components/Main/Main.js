import React from "react";

import { Box } from "@material-ui/core";

import Notes from "./components/Notes";
import NotesEditor from "../NotesEditor";

import useStyles from "./styles";

export default function Main() {
  const classes = useStyles();

  return (
    <Box component="main" className={classes.main}>
      <NotesEditor isNewNote={true} />
      <Notes />
    </Box>
  );
}
