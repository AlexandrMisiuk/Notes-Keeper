import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: 0,
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
    "&:last-child": {
      paddingBottom: theme.spacing(1)
    }
  }
}));
