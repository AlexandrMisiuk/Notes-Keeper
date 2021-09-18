import React, { useState } from "react";

import clsx from "clsx";

import Card from "@material-ui/core/Card";
import NoteCardHeader from "./components/NoteCardHeader/NoteCardHeader";
import NoteCardActions from "./components/NoteCardActions/NoteCardActions";
import NoteCardContent from "./components/NoteCardContent/NoteCardContent";

import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import useStyles from "./styles";
import { noteBackgroundColor } from "../../../BlockForCreatingANewNote/styles";
import NoteCardEditDialog from "./components/NoteCardEditDialog/NoteCardEditDialog";

export default function NoteCard({ note }) {
  const { text, noteColor } = note;

  const [openEditModal, setOpenEditModal] = useState(false);
  const [expanded, setExpanded] = useState(false);

  const classes = useStyles();
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.up("sm"));
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  const NoteCardClassName = clsx(classes.noteCard, {
    [classes.mediaQuerySm]: isTablet,
    [classes.mediaQueryMd]: isDesktop,
    ...noteBackgroundColor(classes, noteColor)
  });

  return (
    <>
      <Card className={NoteCardClassName}>
        <NoteCardHeader note={note} />
        <NoteCardActions
          expanded={expanded}
          setExpanded={setExpanded}
          note={note}
          setOpenEditModal={setOpenEditModal}
        />
        <NoteCardContent expanded={expanded} text={text} />
      </Card>
      <NoteCardEditDialog
        note={note}
        open={openEditModal}
        setOpen={setOpenEditModal}
      />
    </>
  );
}
