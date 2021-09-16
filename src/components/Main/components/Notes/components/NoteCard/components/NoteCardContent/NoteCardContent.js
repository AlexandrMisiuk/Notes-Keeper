import React from "react";

import useStyles from "./styles";

import CardContent from "@material-ui/core/CardContent";
import Collapse from "@material-ui/core/Collapse";
import Typography from "@material-ui/core/Typography";

export default function NoteCardContent({ expanded, text }) {
  const classes = useStyles();

  const separatedText = text.split(/\n/);
  // console.log("separatedText in Note card", separatedText);
  return (
    <Collapse in={expanded} timeout="auto">
      <CardContent className={classes.root}>
        {separatedText.map((text, index) => (
          <Typography component="p" key={index + 1}>
            {text || <br />}
          </Typography>
        ))}
      </CardContent>
    </Collapse>
  );
}
