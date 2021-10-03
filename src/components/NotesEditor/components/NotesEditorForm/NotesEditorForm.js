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
    textFieldId,
  } = props;

  const classes = useStyles();

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
          setIsInputError(false);
          setCurrentHeading(e.target.value);
        }}
        onBlur={() => setIsInputError(false)}
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
