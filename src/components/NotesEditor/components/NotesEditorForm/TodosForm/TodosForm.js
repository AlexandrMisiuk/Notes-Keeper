import React from "react";

import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";

import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import clsx from "clsx";

import useStyles from "./styles";

export default function TodosForm({
  setCurrentNoteContent,
  currentNoteContent,
}) {
  const classes = useStyles();

  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.up("md"));

  const todoTextFieldClassName = clsx(classes.todoTextField, {
    [classes.mediaQuery]: isTablet,
  });

  const handleCheckTodo = (todo, todoIndex) => {
    const newTodo = { ...todo, isDone: !todo.isDone };
    const filteredTodos = currentNoteContent.filter(
      (element, index) => index !== todoIndex
    );

    if (newTodo.isDone) {
      filteredTodos.push(newTodo);
    } else {
      filteredTodos.unshift(newTodo);
    }

    setCurrentNoteContent(filteredTodos);
  };

  const handleChangeTodo = (index, event) => {
    const newTodos = [...currentNoteContent];
    newTodos[index].text = event.target.value;
    setCurrentNoteContent(newTodos);
  };

  const handleAddTodo = () => {
    const newTodos = [...currentNoteContent, { text: "", isDone: false }];
    setCurrentNoteContent(newTodos);
  };

  const handleDeleteTodo = (todoIndex) => {
    const filteredTodos = currentNoteContent.filter(
      (element, index) => index !== todoIndex
    );
    setCurrentNoteContent(filteredTodos);
  };

  return (
    <>
      {currentNoteContent.map((todo, index) => (
        <FormControlLabel
          classes={{
            label: classes.formControlLabel,
          }}
          className={classes.todo}
          control={
            <Checkbox
              checked={todo.isDone}
              onChange={() => handleCheckTodo(todo, index)}
              name={"checkedTodo" + index}
              color="primary"
            />
          }
          label={
            <>
              <TextField
                className={todoTextFieldClassName}
                id={`todo-text${index}`}
                placeholder="Enter todo"
                value={todo.text}
                disabled={todo.isDone}
                onChange={(event) => handleChangeTodo(index, event)}
                multiline
              />
              <IconButton
                aria-label="delete"
                onClick={() => handleDeleteTodo(index)}
              >
                <CloseIcon fontSize="small" />
              </IconButton>
            </>
          }
          key={index + 1}
        />
      ))}
      <Button
        size="medium"
        className={classes.addTodoButton}
        onClick={handleAddTodo}
      >
        Add todo
      </Button>
    </>
  );
}
