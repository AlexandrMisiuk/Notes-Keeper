import React, { useState } from "react";

import { makeStyles } from "@material-ui/core/styles";
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

const useStyles = makeStyles((theme) => ({
  note: {
    width: "97%",
    display: "inline-flex",
    flexFlow: "column nowrap",
    margin: "1.5%"
  },
  mediaQuerySm: {
    width: "47%"
  },
  mediaQueryMd: {
    width: "22%"
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
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  }
}));

export default function Note({ note }) {
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
      {note.heading}
    </Typography>
  );

  const subheader = (
    <Typography component="p" className={classes.noteSubheader}>
      Last edit: {note.lastEdit}
    </Typography>
  );

  return (
    <Card
      className={clsx(classes.note, {
        [classes.mediaQuerySm]: isTablet,
        [classes.mediaQueryMd]: isDesktop
      })}
    >
      <CardHeader
        title={title}
        subheader={subheader}
        className={classes.noteHeader}
      />

      <CardActions disableSpacing>
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
          <Typography component="p">{note.text}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
