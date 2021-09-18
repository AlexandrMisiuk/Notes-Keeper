import React from "react";

import BlockForCreatingANewNote from "./components/BlockForCreatingANewNote";
import Notes from "./components/Notes";
import { Box } from "@material-ui/core";

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
