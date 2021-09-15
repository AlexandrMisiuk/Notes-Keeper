import React, { useState } from "react";

import { useDispatch } from "react-redux";
import { changeNoteColor } from "../../../../../../../../features/newNoteSlice";

import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";
import PaletteIcon from "@material-ui/icons/Palette";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

export default function ColorBtn() {
  const dispatch = useDispatch();

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleChoseColor = (color) => {
    setAnchorEl(null);
    dispatch(changeNoteColor(color));
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
      >
        <MenuItem onClick={() => handleChoseColor("")}>Default</MenuItem>
        <MenuItem onClick={() => handleChoseColor("red")}>Red</MenuItem>
        <MenuItem onClick={() => handleChoseColor("green")}>Green</MenuItem>
        <MenuItem onClick={() => handleChoseColor("blue")}>Blue</MenuItem>
      </Menu>
    </>
  );
}
