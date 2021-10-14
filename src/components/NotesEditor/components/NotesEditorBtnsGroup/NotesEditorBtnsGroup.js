import React from "react";

import Button from "@material-ui/core/Button";
import AssignmentTurnedInIcon from "@material-ui/icons/AssignmentTurnedIn";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";

import ColorBtn from "./components/ColorBtn";

import useStyles from "./styles";

export default function NotesEditorBtnsGroup({
  handleSafeNote,
  handleChoseColor,
  handleChangeToList,
  isNewNote,
}) {
  const classes = useStyles();

  const btnText = isNewNote ? "Add note" : "Save changes";

  return (
    <>
      <Tooltip title="To do list">
        <IconButton aria-label="to-do-list" onClick={handleChangeToList}>
          <AssignmentTurnedInIcon />
        </IconButton>
      </Tooltip>
      <ColorBtn handleChoseColor={handleChoseColor} />
      <Button className={classes.saveChangesBtn} onClick={handleSafeNote}>
        {btnText}
      </Button>
    </>
  );
}
