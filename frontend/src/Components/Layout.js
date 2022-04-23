import React from "react";
import { Grid } from "@mui/material";

function Layout(props) {
  return (
    <Grid container spacing={3}>
      {props.photos.map((images) => {
        return (
          <Grid item rowSpacing={3} xs={4}>
            <img
              style={{ width: 200, height: 200 }}
              src={
                "https://images.unsplash.com/photo-1650624822730-d7b04ae07ad7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1100&q=80"
              }
            />
          </Grid>
        );
      })}
    </Grid>
  );
}

export default Layout;
