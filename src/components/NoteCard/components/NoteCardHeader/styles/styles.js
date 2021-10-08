import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  noteHeader: {
    padding: theme.spacing(1),
    paddingBottom: theme.spacing(0)
  },
  noteTitle: {
    fontWeight: "bolder",
    marginBottom: theme.spacing(1)
  },
  noteSubheader: {
    fontSize: theme.typography.pxToRem(12)
  }
}));
