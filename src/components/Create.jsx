import React, { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebaseConfig";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  Stack,
  Alert,
  TextField,
  IconButton,
  Typography,
  Container,
} from "@mui/material";
import AddPhotoAlternateOutlinedIcon from "@mui/icons-material/AddPhotoAlternateOutlined";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  box: {
    width: "60vw",
    height: "50vh",
    alignItems: "center",
    boxShadow: "0px 0px 10px #000000",
    margin: "0 auto",
    marginTop: "20vh",
    display: "flex",
    justifyContent: "center",
    borderRadius: "12px",
    overflow: "hidden",
  },
});

const Create = () => {
  const classes = useStyles();
  const [caption, setCaption] = useState("");
  const capCollRef = collection(db, "Posts");
  const navigate = useNavigate();

  const createPost = async (e) => {
    e.preventDefault();
    if (caption) {
      await addDoc(capCollRef, { caption:caption })
      .then(()=>{navigate('/')});
      setCaption("");
    }
    console.log(caption);
  };

  return (
    <Container>
      <Box className={classes.box}>
          <form onSubmit={createPost}>
        <Stack spacing={1}>
          <Typography mt={2} variant="body1">
            Create a post
          </Typography>
          <TextField
            onChange={(e) => setCaption(e.target.value)}
            maxRows={3}
            label="type..."

            multiline
            variant="standard"
            required
          />
          <Button type="submit" variant="contained" color="primary">
            Post
          </Button>
          <Button
           
            variant="outlined"
            color="error"
          >
            Back
          </Button>
          <IconButton variant="outlined" color="secondary">
            <AddPhotoAlternateOutlinedIcon />
          </IconButton>
        </Stack>
            </form>
      </Box>
    </Container>
  );
};

export default Create;
