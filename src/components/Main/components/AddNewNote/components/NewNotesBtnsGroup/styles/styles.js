import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  btnsGroup: {
    display: "flex",
    flexFlow: "row nowrap"
  },
  addNoteBtn: {
    fontSize: theme.typography.pxToRem(18),
    textTransform: "none",
    marginLeft: "auto"
  }
}));
