import React from "react";

import MuiDialogContent from "@material-ui/core/DialogContent";
import TextField from "@material-ui/core/TextField";

import useStyles from "./styles";

export default function EditDialogForm(props) {
  const {
    isInputError,
    setIsInputError,
    currentHeading,
    setCurrentHeading,
    currentText,
    setCurrentText
  } = props;

  const classes = useStyles();

  function isOnlySpaces(text) {
    const regExp = /^\s/;
    const isOnlySpaces = regExp.test(text);

    return isOnlySpaces;
  }

  return (
    <MuiDialogContent className={classes.root}>
      <TextField
        className={classes.textField}
        error={isInputError}
        id="edit-note-heading"
        label="Heading"
        placeholder="Enter heading"
        multiline
        value={currentHeading}
        onChange={(e) => {
          setIsInputError(isOnlySpaces(e.target.value));
          setCurrentHeading(e.target.value);
        }}
      />
      <TextField
        className={classes.textField}
        id="edit-note-note"
        label="Note"
        placeholder="Note..."
        multiline
        value={currentText}
        onChange={(e) => {
          setCurrentText(e.target.value);
        }}
      />
    </MuiDialogContent>
  );
}
