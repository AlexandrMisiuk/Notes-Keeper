import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  main: {
    flexGrow: 1,
    display: "flex",
    flexFlow: "column nowrap",
    alignItems: "center",
    marginRight: theme.spacing(2),
    marginBottom: theme.spacing(2),
    padding: theme.spacing(2),
    color: theme.palette.text.primary,
    minHeight: "80vh"
  }
}));
