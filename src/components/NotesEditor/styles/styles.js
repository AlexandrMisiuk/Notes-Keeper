import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  newNote: {
    display: "flex",
    width: "100%",
    flexFlow: "column nowrap",
    padding: theme.spacing(1),
    marginBottom: theme.spacing(2)
  },
  editNote: {
    width: "70vw",
    display: "flex",
    flexFlow: "column nowrap",
    padding: theme.spacing(1)
  },
  mediaQuery: {
    maxWidth: "500px"
  },
  form: {
    display: "flex",
    flexFlow: "column nowrap"
  },
  dialogForm: {
    display: "flex",
    flexFlow: "column nowrap",
    padding: theme.spacing(1)
  },
  btnsGroup: {
    display: "flex",
    flexFlow: "row nowrap"
  },
  dialogBtnsGroup: {
    display: "flex",
    flexFlow: "row nowrap",
    justifyContent: "flex-start"
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

export const noteBackgroundColor = (classes, color) => {
  switch (color) {
    case "Red": {
      return { [classes.backgroundColorRed]: true };
    }
    case "Green": {
      return { [classes.backgroundColorGreen]: true };
    }
    case "Blue": {
      return { [classes.backgroundColorBlue]: true };
    }
    default: {
      return {};
    }
  }
};
