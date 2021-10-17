import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { Box, Container, Grid } from "@material-ui/core";
import { Provider } from "react-redux";

import Header from "./components/Header";
import Main from "./components/Main";
import Navbar from "./components/Navbar";

import store from "./store";

import useStyles from "./styles";

export default function App() {
  const classes = useStyles();

  return (
    <Provider store={store}>
      <Router>
        <Route path="/">
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
        </Route>
      </Router>
    </Provider>
  );
}
