import React from "react";

import { Box, Container, Grid } from "@material-ui/core";

import Header from "./components/Header";
import Main from "./components/Main";
import Navbar from "./components/Navbar";

import { Provider } from "react-redux";
import store from "./store";

import useStyles from "./styles";

export default function App() {
  const classes = useStyles();

  return (
    <Provider store={store}>
      <div className={classes.root}>
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
      </div>
    </Provider>
  );
}
