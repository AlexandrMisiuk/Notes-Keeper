import React from "react";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import CardMembershipIcon from "@material-ui/icons/CardMembership";
import { Container } from "@material-ui/core";

import SearchForm from "./components/SearchForm";

import useStyles from "./styles";

export default function Header() {
  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.root}>
      <Container maxWidth="lg">
        <Toolbar>
          <CardMembershipIcon className={classes.noteIcon} />
          <Typography
            component="h1"
            className={classes.title}
            variant="h5"
            noWrap
          >
            Notes Keeper
          </Typography>
          <SearchForm />
        </Toolbar>
      </Container>
    </AppBar>
  );
}
