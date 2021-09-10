import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import AddAlertIcon from "@material-ui/icons/AddAlert";
import AssignmentTurnedInIcon from "@material-ui/icons/AssignmentTurnedIn";
import PaletteIcon from "@material-ui/icons/Palette";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
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
  form: {
    display: "flex",
    flexFlow: "column nowrap"
  },
  textField: {
    marginBottom: theme.spacing(1)
  },
  btnsGroup: {
    display: "flex",
    flexFlow: "row nowrap"
  },
  addNoteBtn: {
    fontSize: theme.typography.pxToRem(18),
    textTransform: "none",
    marginLeft: "auto"
  }
}));

export default function NewNoteForm() {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <Paper
      elevation={3}
      className={
        matches ? classes.newNote + " " + classes.mediaQuery : classes.newNote
      }
    >
      <Box component="div" className={classes.form}>
        <Typography variant="h6" component="h2">
          New note
        </Typography>
        <TextField
          className={classes.textField}
          id="new-note-heading"
          label="Heading"
          placeholder="Enter heading"
          multiline
        />
        <TextField
          className={classes.textField}
          id="new-note-note"
          label="Note"
          placeholder="Note..."
          multiline
        />
        <Box component="div" className={classes.btnsGroup}>
          <Tooltip title="Add alert">
            <IconButton aria-label="add-alert">
              <AddAlertIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="To do list">
            <IconButton aria-label="to-do-list">
              <AssignmentTurnedInIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Change color">
            <IconButton aria-label="change-color">
              <PaletteIcon />
            </IconButton>
          </Tooltip>
          <Button className={classes.addNoteBtn}>Add note</Button>
        </Box>
      </Box>
    </Paper>
  );
}
