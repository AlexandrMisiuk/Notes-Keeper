import React from "react";

import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

import useStyles from "./styles";

export default function NotesEditorForm(props) {
  const {
    currentIsTodo,
    isInputError,
    setIsInputError,
    currentHeading,
    setCurrentHeading,
    currentText,
    setCurrentText,
    textFieldId,
  } = props;

  const classes = useStyles();

  const todosCheckboxes = currentIsTodo
    ? currentText.map((todo, index) => {
        return (
          <FormControlLabel
            classes={{
              label: classes.formControlLabel,
            }}
            className={classes.todo}
            control={
              <Checkbox
                checked={todo.isDone}
                onChange={() => {
                  const newTodos = [...currentText];
                  newTodos[index].isDone = !todo.isDone;
                  setCurrentText(newTodos);
                }}
                name={"checkedTodo" + index}
                color="primary"
              />
            }
            label={
              <TextField
                className={classes.todoTextField}
                id={`todo-text${index}`}
                placeholder="Enter todo"
                value={todo.text}
                onChange={(event) => {
                  const newTodos = [...currentText];
                  newTodos[index].text = event.target.value;
                  setCurrentText(newTodos);
                }}
                multiline
              />
            }
            key={index + 1}
          />
        );
      })
    : null;

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
        todosCheckboxes
      ) : (
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
      )}
    </>
  );
}
