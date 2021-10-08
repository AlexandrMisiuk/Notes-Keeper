import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

import NoteCard from "../../../NoteCard";

import useStyles from "./styles";

const selectActualNotes = (state) => state.notes;

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export default function FoundNotes() {
  const classes = useStyles();

  const query = useQuery().get("req");

  const notes = useSelector(selectActualNotes);
  const { actualNotes, archivedNotes } = notes;
  // console.log("notes =>", notes);

  const filteredNotes = (notes, query) => {
    const queryRegExp = new RegExp(query, "gi");

    return !query
      ? []
      : notes.filter(
          (note) =>
            note.heading.search(queryRegExp) !== -1 ||
            note.text.search(queryRegExp) !== -1
        );
  };

  // console.log("filteredActualNotes", filteredNotes(actualNotes, query));

  return (
    <>
      <Typography component="h3" variant="h5">
        Search result
      </Typography>
      <Box component="div" className={classes.notesBox}>
        {filteredNotes(actualNotes, query).map((note) => (
          <NoteCard isArchived={false} note={note} key={note.id} />
        ))}
        archived
        {filteredNotes(archivedNotes, query).map((note) => (
          <NoteCard isArchived={true} note={note} key={note.id} />
        ))}
      </Box>
    </>
  );
}
