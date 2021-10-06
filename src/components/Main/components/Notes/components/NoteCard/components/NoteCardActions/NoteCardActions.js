import React from "react";

import { useDispatch } from "react-redux";

import clsx from "clsx";

import CardActions from "@material-ui/core/CardActions";
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ArchiveIcon from "@material-ui/icons/Archive";
import UnarchiveIcon from "@material-ui/icons/Unarchive";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";

import {
  addNote,
  moveToArchivedNotes,
  removeFromActualNotes,
  removeFromArchivedNotes,
} from "../../../../../../../../features/notesSlice";

import useStyles from "./styles";

export default function NoteCardActions(props) {
  const { expanded, setExpanded, note, setOpenEditModal, isArchived } = props;
  const classes = useStyles();

  const dispatch = useDispatch();

  const handleClickOpen = () => {
    setOpenEditModal(true);
  };

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleAddToArchive = () => {
    dispatch(moveToArchivedNotes(note));
    dispatch(removeFromActualNotes(note));
  };

  const handleBackToActual = () => {
    dispatch(addNote(note));
    dispatch(removeFromArchivedNotes(note));
  };

  const handleDelete = () => {
    dispatch(removeFromArchivedNotes(note));
  };

  return (
    <CardActions disableSpacing className={classes.actions}>
      {isArchived ? (
        <>
          <Tooltip title="Back to actual">
            <IconButton
              aria-label="back-to-actual"
              onClick={handleBackToActual}
            >
              <UnarchiveIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Delete">
            <IconButton aria-label="delete" onClick={handleDelete}>
              <DeleteIcon />
            </IconButton>
          </Tooltip>
        </>
      ) : (
        <Tooltip title="Add to archive">
          <IconButton aria-label="add-to-archive" onClick={handleAddToArchive}>
            <ArchiveIcon />
          </IconButton>
        </Tooltip>
      )}

      {isArchived || (
        <Tooltip title="Edit">
          <IconButton aria-label="edit" onClick={handleClickOpen}>
            <EditIcon />
          </IconButton>
        </Tooltip>
      )}
      <IconButton
        className={clsx(classes.expand, {
          [classes.expandOpen]: expanded,
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
