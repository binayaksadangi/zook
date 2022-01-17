import { Container, Grid, Fab, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import Posts from "./Posts";
import LeftBar from "./LeftBar";
import CrerateDialog from "./CrerateDialog";
import { db } from "../firebaseConfig";
import AddIcon from "@mui/icons-material/Add";
import Appbar from "./Appbar";
import { makeStyles } from "@mui/styles";
import { doc, getDocs, collection } from "firebase/firestore";

const useStyles = makeStyles({
  fab: {
    fillOpacity: 0.6,
    
    position:'fixed',
    margin: "2rem",
  },
});

const Home = () => {
  const classes = useStyles();
  const [posts, setPosts] = useState([]);
  const postCollRef = collection(db, "newPosts");

  useEffect(() => {
    const getPosts = async () => {
      const posts = await getDocs(postCollRef);
      setPosts(posts.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    };
    getPosts();
  }, []);

  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item xs={0} md={3}>
          {/* <LeftBar />
          <Typography variant="h6">{posts.length} posts</Typography> */}
        </Grid>
        <Grid container spacing={2} item xs={12} md={6}>
         
          {posts.map((post) => (
            <Grid item  xs={12}>
              <Posts post={post} />
            </Grid>
          ))}
          <CrerateDialog />
          
        </Grid>
        <Grid item xs={0} md={3}>
          <Typography variant="h6">{posts.length} posts</Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
