import React, { useState } from "react";

import Card from "@material-ui/core/Card";

import clsx from "clsx";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import NoteCardHeader from "./components/NoteCardHeader/NoteCardHeader";
import NoteCardActions from "./components/NoteCardActions/NoteCardActions";
import NoteCardContent from "./components/NoteCardContent/NoteCardContent";
import NotesEditor from "../NotesEditor";

import { useStyles, noteBackgroundColor } from "./styles";

export default function NoteCard({ note, isArchived }) {
  // console.log("isArchived", isArchived);
  const { content, noteColor, isTodo } = note;

  const [openEditModal, setOpenEditModal] = useState(false);
  const [expanded, setExpanded] = useState(false);

  const classes = useStyles();
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.up("sm"));
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  const NoteCardClassName = clsx(classes.noteCard, {
    [classes.mediaQuerySm]: isTablet,
    [classes.mediaQueryMd]: isDesktop,
    ...noteBackgroundColor(classes, noteColor),
  });

  return (
    <>
      <Card className={NoteCardClassName}>
        <NoteCardHeader note={note} />
        <NoteCardActions
          isArchived={isArchived}
          expanded={expanded}
          setExpanded={setExpanded}
          note={note}
          setOpenEditModal={setOpenEditModal}
        />
        <NoteCardContent
          expanded={expanded}
          content={content}
          isTodo={isTodo}
        />
      </Card>
      <NotesEditor
        note={note}
        open={openEditModal}
        setOpen={setOpenEditModal}
        isNewNote={false}
      />
    </>
  );
}
