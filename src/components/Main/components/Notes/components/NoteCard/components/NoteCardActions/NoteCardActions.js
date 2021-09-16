import React from "react";

import { useDispatch } from "react-redux";

import {
  moveToArchivedNotes,
  removeFromActualNotes
} from "../../../../../../../../features/notesSlice";

import clsx from "clsx";

import CardActions from "@material-ui/core/CardActions";
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ArchiveIcon from "@material-ui/icons/Archive";
import EditIcon from "@material-ui/icons/Edit";

import useStyles from "./styles";

export default function NoteCardActions({ expanded, setExpanded, note }) {
  const classes = useStyles();

  const dispatch = useDispatch();

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleAddToArchive = () => {
    dispatch(moveToArchivedNotes(note));
    dispatch(removeFromActualNotes(note));
  };

  return (
    <CardActions disableSpacing className={classes.actions}>
      <Tooltip title="Add to archive">
        <IconButton aria-label="add-to-archive" onClick={handleAddToArchive}>
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
  );
}
