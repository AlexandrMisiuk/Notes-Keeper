import React from "react";

import CardHeader from "@material-ui/core/CardHeader";
import Typography from "@material-ui/core/Typography";

import useStyles from "./styles";

export default function NoteCardHeader({ note }) {
  const classes = useStyles();

  const { heading, lastEdit } = note;

  const title = (
    <Typography component="h4" className={classes.noteTitle}>
      {heading}
    </Typography>
  );

  const subheader = (
    <Typography component="p" className={classes.noteSubheader}>
      Last edit: {lastEdit}
    </Typography>
  );

  return (
    <CardHeader
      title={title}
      subheader={subheader}
      className={classes.noteHeader}
    />
  );
}
