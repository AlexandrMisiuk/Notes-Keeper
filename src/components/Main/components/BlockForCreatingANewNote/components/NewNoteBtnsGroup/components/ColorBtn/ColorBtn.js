import React, { useState } from "react";

import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";
import PaletteIcon from "@material-ui/icons/Palette";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

export default function ColorBtn({ handleChoseColor }) {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Tooltip title="Change color">
        <IconButton
          aria-label="change-color"
          aria-controls="simple-menu"
          aria-haspopup="true"
          onClick={handleClick}
        >
          <PaletteIcon />
        </IconButton>
      </Tooltip>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem
          onClick={() => {
            handleChoseColor("");
            setAnchorEl(null);
          }}
        >
          Default
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleChoseColor("red");
            setAnchorEl(null);
          }}
        >
          Red
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleChoseColor("green");
            setAnchorEl(null);
          }}
        >
          Green
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleChoseColor("blue");
            setAnchorEl(null);
          }}
        >
          Blue
        </MenuItem>
      </Menu>
    </>
  );
}
