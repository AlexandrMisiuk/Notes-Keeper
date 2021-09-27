import React from "react";

import TextField from "@material-ui/core/TextField";

import useStyles from "./styles";

export default function NotesEditorForm(props) {
  const {
    isInputError,
    setIsInputError,
    currentHeading,
    setCurrentHeading,
    currentText,
    setCurrentText,
    textFieldId
  } = props;

  const classes = useStyles();

  function isOnlySpaces(text) {
    //use trim string
    const regExp = /^\s/;
    const isOnlySpaces = regExp.test(text);

    return isOnlySpaces;
  }

  return (
    <>
      <TextField
        className={classes.textField}
        error={isInputError}
        id={`${textFieldId}-note-heading`}
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
        id={`${textFieldId}-note-note`}
        label="Note"
        placeholder="Note..."
        multiline
        value={currentText}
        onChange={(e) => {
          setCurrentText(e.target.value);
        }}
      />
    </>
  );
}
