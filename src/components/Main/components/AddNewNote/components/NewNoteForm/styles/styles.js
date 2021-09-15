import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  form: {
    display: "flex",
    flexFlow: "column nowrap"
  },
  textField: {
    marginBottom: theme.spacing(1)
  }
}));
