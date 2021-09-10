import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import { Box, Container, Grid } from "@material-ui/core";

import Header from "./components/Header";
import Main from "./components/Main";
import Navbar from "./components/Navbar";

import { Provider } from "react-redux";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    fontFamily: theme.typography.fontFamily
  }
}));

export default function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {/* <Provider store={store}> */}
      <Grid container spacing={0}>
        <Grid item xs={12}>
          <Header />
        </Grid>
        <Grid item xs={12}>
          <Container maxWidth="lg">
            <Box display="flex">
              <Main />
              <Navbar />
            </Box>
          </Container>
        </Grid>
      </Grid>
      {/* </Provider> */}
    </div>
  );
}
