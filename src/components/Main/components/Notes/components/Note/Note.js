import React, { useState } from "react";

import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import clsx from "clsx";

import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import Tooltip from "@material-ui/core/Tooltip";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ArchiveIcon from "@material-ui/icons/Archive";
import EditIcon from "@material-ui/icons/Edit";

import useStyles from "./styles";
import { noteBackgroundColor } from "../../../AddNewNote/styles";

export default function Note({ note }) {
  const { heading, text, noteColor, lastEdit } = note;

  const classes = useStyles();
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.up("sm"));
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const title = (
    <Typography component="h4" className={classes.noteTitle}>
      {heading}
    </Typography>
  );

  const subheader = (
    <Typography component="p" className={classes.noteSubheader}>
      Last edit: {lastEdit}
    </Typography>
  );

  return (
    <Card
      className={clsx(classes.note, {
        [classes.mediaQuerySm]: isTablet,
        [classes.mediaQueryMd]: isDesktop,
        ...noteBackgroundColor(classes, noteColor)
      })}
    >
      <CardHeader
        title={title}
        subheader={subheader}
        className={classes.noteHeader}
      />

      <CardActions disableSpacing className={classes.actions}>
        <Tooltip title="Add to archive">
          <IconButton aria-label="add-to-archive">
            <ArchiveIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Edit">
          <IconButton aria-label="edit">
            <EditIcon />
          </IconButton>
        </Tooltip>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto">
        <CardContent>
          <Typography component="p">{text}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
