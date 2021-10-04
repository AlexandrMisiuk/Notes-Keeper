import React from "react";

import { useHistory } from "react-router-dom";

import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";
import CardMembershipIcon from "@material-ui/icons/CardMembership";
import ArchiveIcon from "@material-ui/icons/Archive";
import { Typography } from "@material-ui/core";

import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import useStyles from "./styles";

export default function Navbar() {
  const history = useHistory();

  const classes = useStyles();
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.up("sm"));

  const [view, setView] = React.useState("actual");

  const handleChange = (event, nextView) => {
    setView(nextView);
  };

  return (
    <ToggleButtonGroup
      orientation="vertical"
      value={view}
      exclusive
      onChange={handleChange}
      className={classes.navbar}
    >
      <ToggleButton
        value="actual"
        aria-label="actual"
        className={classes.button}
        onClick={() => history.push("/")}
      >
        <CardMembershipIcon />
        {isTablet && (
          <Typography
            className={classes.text}
            component="p"
            variant="button"
            noWrap
          >
            Notes
          </Typography>
        )}
      </ToggleButton>
      <ToggleButton
        value="archive"
        aria-label="archive"
        onClick={() => history.push("/archived-notes")}
      >
        <ArchiveIcon />
        {isTablet && (
          <Typography
            className={classes.text}
            component="p"
            variant="button"
            noWrap
          >
            Archive
          </Typography>
        )}
      </ToggleButton>
    </ToggleButtonGroup>
  );
}
