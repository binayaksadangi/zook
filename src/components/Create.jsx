import React, { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db, storage } from "../firebaseConfig";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  Stack,
  TextField,
  CircularProgress,
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
  const [imgURL,setImgURL] = useState('');
  // const [prog, setProg] = useState(0);
  const capCollRef = collection(db, "newPosts");
  const navigate = useNavigate();

  const createPost = async (e) => {
    e.preventDefault();
    // const file = e.target[2].files[0];
    // uploadFile(file);
    if (caption) {
      await addDoc(capCollRef, { caption: caption,imgURL:imgURL }).then(() => {
         navigate("/");
      });
      setCaption("");
    }
  
  };

  // const uploadFile = (file) => {
  //   if (!file) return;
  //   const storageRef = ref(storage, `/files/${file.name}`);
  //   const uploadTask = uploadBytesResumable(storageRef, file);

  //   uploadTask.on(
  //     "state_changed",
  //     (snapshot) => {
  //       const prog = Math.round(
  //         (snapshot.bytesTransferred / snapshot.totalBytes) * 100
  //       );
  //       setProg(prog);
  //     },
  //     (err) => {
  //       console.log(err);
  //     },
  //    async () => {
  //      try {
  //        const url = await getDownloadURL(storageRef)
  //        .then(()=>{setImgURL(url.toString())});
         
  //      } catch (error) {
  //        console.log(error)
  //      }
  //     }
  //   );
  // };

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
              label=""
              multiline
              variant="standard"
              required
            />
                   <TextField
                  className={classes.txt}
                onChange={(e) => setImgURL(e.target.value)}
                label="img url..."
                 variant="standard"
                />
            <Button type="submit" variant="contained" color="primary">
              Post
            </Button>
            <Button
              variant="outlined"
              color="error"
              onClick={() => {
                navigate("/");
              }}
            >
              Back
            </Button>
          </Stack>
        </form>
      </Box>
    </Container>
  );
};

export default Create;
