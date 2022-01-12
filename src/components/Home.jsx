import { Container, Grid, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import Posts from "./Posts";
import { db } from "../firebaseConfig";
import { doc, getDocs, collection } from "firebase/firestore";
const Home = () => {
  const [posts, setPosts] = useState([]);
  const postCollRef = collection(db, "Posts");
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
          <Typography variant="h6">{posts.length} posts</Typography>
        </Grid>
        <Grid container spacing={2} item xs={12} md={6}>
          {posts.map((post) => (
            <Grid item xs={12} >
              <Posts post={post} />
            </Grid>
          ))}
        </Grid>
        <Grid item xs={0} md={3}>
          <Typography variant="h6">{posts.length} posts</Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
