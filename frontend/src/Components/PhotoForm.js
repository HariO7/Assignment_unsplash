import { Button, Container, LinearProgress } from "@mui/material";
import axios from "axios";
import { useState } from "react";

function PhotoForm() {
  const [fileup, setfileup] = useState({});
  const [loading, setLoading] = useState(false);
  const [completed, setCompleted] = useState(false);

  let currentImage;
  const handlefileChange = (event) => {
    setfileup(event.target.files[0]);
  };
  const submitFile = () => {
    setLoading(true);
    let formData = new FormData();
    formData.append("photo", fileup);

    axios
      .post("http://localhost:3001/photos/", formData)
      .then((res) => {
        currentImage = res.data;
        setLoading(false);
        setCompleted(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  if (loading)
    return (
      <Container>
        <LinearProgress />
      </Container>
    );

  const imageCompleted = (
    <Container>
      <img src={`${currentImage}`} />
    </Container>
  );

  return (
    <div>
      {completed && imageCompleted}
      <input type="file" onChange={handlefileChange} />
      <Button onClick={submitFile}>Upload</Button>
    </div>
  );
}

export default PhotoForm;
