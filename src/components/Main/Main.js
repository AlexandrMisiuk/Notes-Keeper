import React from "react";
import { Route } from "react-router-dom";

import { Box } from "@material-ui/core";

import Notes from "./components/Notes";
import NotesEditor from "../NotesEditor";

import useStyles from "./styles";

export default function Main() {
  const classes = useStyles();

  return (
    <>
      <Route exact path="/">
        <Box component="main" className={classes.main}>
          <NotesEditor isNewNote={true} />
          <Notes isArchived={false} />
        </Box>
      </Route>
      <Route exact path="/archived-notes">
        <Box component="main" className={classes.main}>
          <Notes isArchived={true} />
        </Box>
      </Route>
    </>
  );
}
