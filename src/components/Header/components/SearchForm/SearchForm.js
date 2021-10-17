import React from "react";

import { useHistory } from "react-router-dom";

import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";

import useStyles from "./styles";

export default function SearchForm() {
  const classes = useStyles();
  const [searchRequest, setSearchRequest] = React.useState("");

  const history = useHistory();

  // console.log(history);

  const handleSubmit = (event) => {
    event.preventDefault();

    const searchRequestURI = encodeURIComponent(searchRequest);
    history.push(`/Notes-Keeper/search?req=${searchRequestURI}`);

    setSearchRequest("");
  };

  return (
    <form className={classes.search} onSubmit={handleSubmit}>
      <div className={classes.searchIcon}>
        <SearchIcon />
      </div>
      <InputBase
        value={searchRequest}
        onChange={(event) => setSearchRequest(event.target.value)}
        placeholder="Search…"
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput,
        }}
        inputProps={{ "aria-label": "search" }}
      />
    </form>
  );
}
