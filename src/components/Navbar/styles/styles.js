import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  navbar: {
    marginTop: theme.spacing(2)
  },
  button: {
    justifyContent: "flex-start"
  },
  text: {
    textTransform: "none",
    marginLeft: theme.spacing(1),
    fontSize: theme.typography.pxToRem(18)
  }
}));
