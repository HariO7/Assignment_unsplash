import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Stack,
  Input,
} from "@mui/material";
function navbar() {
  return (
    <AppBar variant="static" sx={{ backgroundColor: "white", color: "black" }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          UNSPLASH
        </Typography>
        <Stack direction="row" spacing={2}>
          <Input placeholder="search" />
          <Button variant="contained" color="success" size="small">
            Add a Photo
          </Button>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}

export default navbar;
