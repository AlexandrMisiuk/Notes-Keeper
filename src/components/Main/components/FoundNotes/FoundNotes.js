import React from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

import NoteCard from "../../../NoteCard";

import useStyles from "./styles";

const selectNotes = (state) => state.notes;

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export default function FoundNotes() {
  const classes = useStyles();

  const query = useQuery().get("req");

  const notes = useSelector(selectNotes);

  const { actualNotes, archivedNotes } = notes;
  // console.log("notes =>", notes);

  const filteredNotes = (notes, query) => {
    const queryRegExp = new RegExp(query, "gi");

    return !query
      ? []
      : notes.filter((note) => {
          const heading = note.heading;
          const content = note.content;

          if (typeof content === "string")
            return (
              heading.search(queryRegExp) !== -1 ||
              content.search(queryRegExp) !== -1
            );

          const todosText = content.map((todo) => todo.text);
          const joinedText = todosText.join("\n");
          if (typeof content === "object")
            return (
              heading.search(queryRegExp) !== -1 ||
              joinedText.search(queryRegExp) !== -1
            );
        });
  };

  const filteredActualNotes = filteredNotes(actualNotes, query);
  const filteredArchivedNotes = filteredNotes(archivedNotes, query);

  const searchedActualNotes = filteredActualNotes.length ? (
    <>
      <Typography component="h3" variant="h5">
        Search result
      </Typography>
      <Box component="div" className={classes.notesBox}>
        {filteredActualNotes.map((note) => (
          <NoteCard isArchived={false} note={note} key={note.id} />
        ))}
      </Box>
    </>
  ) : null;

  const searchedArchivedNotes = filteredArchivedNotes.length ? (
    <>
      <Typography component="h3" variant="h5">
        Archived notes
      </Typography>
      <Box component="div" className={classes.notesBox}>
        {filteredArchivedNotes.map((note) => (
          <NoteCard isArchived={true} note={note} key={note.id} />
        ))}
      </Box>
    </>
  ) : null;

  const searchResult =
    !searchedActualNotes && !searchedArchivedNotes ? (
      <Typography component="h3" variant="h5">
        Search did not return any result!
      </Typography>
    ) : (
      <>
        {searchedActualNotes}
        {searchedArchivedNotes}
      </>
    );

  return (
    <>
      {!query ? (
        <Typography component="h3" variant="h5" color="error">
          Bad request! Enter query.
        </Typography>
      ) : (
        searchResult
      )}
    </>
  );
}
