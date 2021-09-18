import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    width: "70vw",
    display: "flex",
    flexFlow: "column nowrap",
    padding: theme.spacing(1)
  },
  mediaQuery: {
    maxWidth: "500px"
  },
  backgroundColorRed: {
    backgroundColor: theme.palette.error.light
  },
  backgroundColorGreen: {
    backgroundColor: theme.palette.success.light
  },
  backgroundColorBlue: {
    backgroundColor: theme.palette.info.light
  }
}));
