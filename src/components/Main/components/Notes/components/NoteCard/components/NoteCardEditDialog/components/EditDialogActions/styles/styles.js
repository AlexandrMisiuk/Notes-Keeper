import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexFlow: "row nowrap",
    justifyContent: "flex-start"
  },
  saveChangesBtn: {
    fontSize: theme.typography.pxToRem(18),
    textTransform: "none",
    marginLeft: "auto !important"
  }
}));
