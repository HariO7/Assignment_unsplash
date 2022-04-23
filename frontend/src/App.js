import React, { Fragment, useEffect, useState } from "react";
import Navbar from "./Components/Navbar";
import axios from "axios";
import { Container, LinearProgress } from "@mui/material";
import Layout from "./Components/Layout";

function App() {
  const [photos, setPhotos] = useState([1, 2, 3, 4, 5, 6, 7]);
  const [loading, setLoading] = useState(true);
  // const fetchData = async () => {
  //   // const res = await axios.get("http://localhost:7000/");
  //   const data = await res.data;
  //   setPhotos(data);
  //   setLoading(false);
  // };
  // useEffect(() => {
  //   fetchData();
  // }, []);
  // if (loading) return <LinearProgress />;
  const addPhotosHandler = () => {
    console.log(1);
  };
  return (
    <Fragment>
      <Container>
        <Navbar addPhotos={addPhotosHandler} />
        <Layout photos={photos} />
      </Container>
    </Fragment>
  );
}

export default App;
