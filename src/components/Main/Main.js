import React from "react";

import { Box } from "@material-ui/core";

import BlockForCreatingANewNote from "./components/BlockForCreatingANewNote";
import Notes from "./components/Notes";

import useStyles from "./styles";

export default function Main() {
  const classes = useStyles();

  return (
    <Box component="main" className={classes.main}>
      <BlockForCreatingANewNote />
      <Notes />
    </Box>
  );
}
