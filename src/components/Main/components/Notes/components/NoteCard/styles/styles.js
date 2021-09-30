import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  noteCard: {
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
