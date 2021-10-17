import React from "react";
import { Route } from "react-router-dom";

import { Box } from "@material-ui/core";

import Notes from "./components/Notes";
import NotesEditor from "../NotesEditor";
import FoundNotes from "./components/FoundNotes/FoundNotes";

import useStyles from "./styles";

export default function Main() {
  const classes = useStyles();

  return (
    <Box component="main" className={classes.main}>
      <Route exact path="/Notes-Keeper/">
        <NotesEditor isNewNote={true} />
        <Notes isArchived={false} />
      </Route>
      <Route exact path="/Notes-Keeper/archived-notes">
        <Notes isArchived={true} />
      </Route>
      <Route exact path="/Notes-Keeper/search">
        <FoundNotes />
      </Route>
    </Box>
  );
}
