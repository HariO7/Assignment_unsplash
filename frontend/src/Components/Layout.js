import React from "react";
import { Grid } from "@mui/material";

function Layout(props) {
  return (
    <Grid container spacing={3}>
      {props.photos.map((images) => {
        return (
          <Grid item rowSpacing={3} xs={4} key={images.id}>
            <img
              style={{ width: 200, height: 200 }}
              src={`/uploads/${images.image}`}
              alt="..."
            />
          </Grid>
        );
      })}
    </Grid>
  );
}

export default Layout;
