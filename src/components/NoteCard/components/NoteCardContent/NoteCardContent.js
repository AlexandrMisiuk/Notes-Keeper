import React from "react";

import CardContent from "@material-ui/core/CardContent";
import Collapse from "@material-ui/core/Collapse";
import Typography from "@material-ui/core/Typography";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import Box from "@material-ui/core/Box";

import useStyles from "./styles";

export default function NoteCardContent({ expanded, content, isTodo }) {
  const classes = useStyles();

  const separatedText = isTodo ? null : content.split(/\n/);
  // console.log("separatedText in Note card", separatedText);
  return (
    <Collapse in={expanded} timeout="auto">
      {isTodo ? (
        <CardContent className={classes.root}>
          {content.map((todo, index) => (
            <Box className={classes.todoBox}>
              {todo.isDone ? <CheckBoxIcon /> : <CheckBoxOutlineBlankIcon />}
              <Typography
                component="p"
                key={index + 1}
                className={classes.todoText}
              >
                {todo.text}
              </Typography>
            </Box>
          ))}
        </CardContent>
      ) : (
        <CardContent className={classes.root}>
          {separatedText.map((text, index) => (
            <Typography component="p" key={index + 1}>
              {text || <br />}
            </Typography>
          ))}
        </CardContent>
      )}
    </Collapse>
  );
}
