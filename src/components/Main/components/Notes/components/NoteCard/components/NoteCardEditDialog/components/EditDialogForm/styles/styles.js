import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexFlow: "column nowrap",
    padding: theme.spacing(1)
  },
  textField: {
    marginBottom: theme.spacing(1)
  }
}));
