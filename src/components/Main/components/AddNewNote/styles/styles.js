import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  newNote: {
    display: "flex",
    width: "100%",
    flexFlow: "column nowrap",
    padding: theme.spacing(1),
    marginBottom: theme.spacing(2)
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

export const noteBackgroundColor = (classes, color) => {
  switch (color) {
    case "red": {
      return { [classes.backgroundColorRed]: true };
    }
    case "green": {
      return { [classes.backgroundColorGreen]: true };
    }
    case "blue": {
      return { [classes.backgroundColorBlue]: true };
    }
    default: {
      return {};
    }
  }
};
