import React from "react";

import TextField from "@material-ui/core/TextField";

import TodosForm from "./TodosForm/TodosForm";

import useStyles from "./styles";

export default function NotesEditorForm(props) {
  const {
    currentIsTodo,
    isInputError,
    setIsInputError,
    currentHeading,
    setCurrentHeading,
    currentNoteContent,
    setCurrentNoteContent,
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
      {currentIsTodo ? (
        <TodosForm
          currentNoteContent={currentNoteContent}
          setCurrentNoteContent={setCurrentNoteContent}
        />
      ) : (
        <TextField
          className={classes.textField}
          id={`${textFieldId}-note-note`}
          label="Note"
          placeholder="Note..."
          multiline
          value={currentNoteContent}
          onChange={(e) => {
            setCurrentNoteContent(e.target.value);
          }}
        />
      )}
    </>
  );
}
