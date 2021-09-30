import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  saveChangesBtn: {
    fontSize: theme.typography.pxToRem(18),
    textTransform: "none",
    marginLeft: "auto !important"
  }
}));
