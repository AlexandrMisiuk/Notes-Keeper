import React from "react";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import CardMembershipIcon from "@material-ui/icons/CardMembership";
import SearchIcon from "@material-ui/icons/Search";
import { Container } from "@material-ui/core";

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
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput
              }}
              inputProps={{ "aria-label": "search" }}
            />
          </div>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
