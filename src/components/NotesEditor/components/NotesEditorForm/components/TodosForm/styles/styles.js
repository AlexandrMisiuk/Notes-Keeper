import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  todo: {
    marginLeft: theme.spacing(1),
  },
  todoTextField: {
    width: "76%",
  },
  mediaQuery: {
    width: "89%",
  },
  formControlLabel: {
    flexGrow: 1,
    "&$disabled": {
      color: theme.palette.text.disabled,
    },
  },
  addTodoButton: {
    width: 100,
    marginLeft: theme.spacing(1),
    textTransform: "none",
  },
}));
