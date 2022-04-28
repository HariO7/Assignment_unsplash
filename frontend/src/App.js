import React, { Fragment, useCallback, useEffect, useState } from "react";
import Navbar from "./Components/Navbar";
import axios from "axios";
import { Container, LinearProgress } from "@mui/material";
import Layout from "./Components/Layout";
import PhotoForm from "./Components/PhotoForm";
import Modal from "./Components/Modal";

function App() {
  const [photos, setPhotos] = useState([]);
  const [add, setAdd] = useState(false);
  const fetchData = useCallback(async () => {
    const res = await axios.get("http://localhost:3001/photos");
    const data = await res.data;
    console.log(data);
    setPhotos(data);
  }, []);

  useEffect(() => {
    fetchData();
  }, []);

  const addPhotosHandler = () => {
    setAdd(true);
  };
  return (
    <Fragment>
      {add && <Modal />}
      <Container>
        <Navbar addPhotos={addPhotosHandler} />
        <Layout photos={photos} />
      </Container>
    </Fragment>
  );
}

export default App;
