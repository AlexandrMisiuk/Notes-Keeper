import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  textField: {
    marginBottom: theme.spacing(1),
  },
  todo: {
    marginLeft: theme.spacing(1),
  },
  todoTextField: {
    width: "100%",
  },
  formControlLabel: {
    flexGrow: 1,
    "&$disabled": {
      color: theme.palette.text.disabled,
    },
  },
}));
