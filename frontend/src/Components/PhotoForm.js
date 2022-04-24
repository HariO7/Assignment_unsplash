import { Button } from "@mui/material";
import axios from "axios";
import { useState } from "react";

function PhotoForm() {
  const [fileup, setfileup] = useState({});
  const handlefileChange = (event) => {
    setfileup(event.target.files[0]);
  };
  const submitFile = () => {
    let formData = new FormData();
    formData.append("photo", fileup);

    axios
      .post("http://localhost:3001/photos/", formData)
      .then((res) => {
        setfileup({});
        console.log("created");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <input type="file" onChange={handlefileChange} />
      <Button onClick={submitFile}>Upload</Button>
    </div>
  );
}

export default PhotoForm;
