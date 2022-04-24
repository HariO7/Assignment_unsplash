import React, { Fragment, useEffect, useState } from "react";
import Navbar from "./Components/Navbar";
import axios from "axios";
import { Container, LinearProgress } from "@mui/material";
import Layout from "./Components/Layout";
import PhotoForm from "./Components/PhotoForm";

function App() {
  const [photos, setPhotos] = useState([]);
  // const [loading, setLoading] = useState(true);
  const fetchData = async () => {
    const res = await axios.get("http://localhost:3001/photos");
    const data = await res.data;
    console.log(data);
    setPhotos(data);
    // setLoading(false);
  };
  useEffect(() => {
    fetchData();
  }, []);
  // if (loading) return <LinearProgress />;
  const addPhotosHandler = () => {
    console.log(1);
  };
  return (
    <Fragment>
      <Container>
        <Navbar addPhotos={addPhotosHandler} />
        <Layout photos={photos} />
        <PhotoForm />
      </Container>
    </Fragment>
  );
}

export default App;
