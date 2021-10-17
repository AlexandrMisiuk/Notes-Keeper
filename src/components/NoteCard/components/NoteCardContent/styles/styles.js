import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: 0,
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
    "&:last-child": {
      paddingBottom: theme.spacing(1),
    },
  },
  todoBox: {
    display: "flex",
    flexFlow: "row nowrap",
    alignItems: "center",
    marginBottom: theme.spacing(1),
  },
  todoText: {
    marginLeft: theme.spacing(1),
  },
}));
