import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  note: {
    flexBasis: "97%",
    display: "inline-flex",
    flexFlow: "column nowrap",
    margin: "1.5%"
  },
  mediaQuerySm: {
    flexBasis: "47%"
  },
  mediaQueryMd: {
    flexBasis: "22%"
  },
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
  },
  actions: {
    marginTop: "auto"
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
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
