import React from "react";
import img from "../image/signup.svg";
import {
  Box,
  Button,
  TextField,
  Grid,
  Typography,
  Container,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebaseConfig";
import { GoogleAuthProvider,signInWithPopup } from "firebase/auth";
import { makeStyles } from "@mui/styles";
import { Login } from "@mui/icons-material";
import GoogleIcon from '@mui/icons-material/Google';
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  box: {
    height: "70vh",
    alignItems: "center",
    boxShadow: "0px 0px 10px #000000",
    margin: '0 auto',
    marginTop: "20vh",
    display: "flex",
    borderRadius: "12px",
    // border: '4px solid pink',
    overflow: "hidden",
  },
  txt: {
    marginBottom: "10px",
    alignItems: "center",
  },
});

const Signup = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const signInWithGoogle = () =>{
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth,provider)
    .then((res)=>{
      console.log(res);
      navigate("/");
    })
    .catch((err)=>{
      console.log(err);
    })
  }

  return (
    <Container>
      <Box className={classes.box}>
        <Grid container>
          <Grid item xs={0} md={6}>
            <img src={img} alt="" />
          </Grid>

          <Grid container spacing={1} xs={12} md={6}>
            {/* <Grid item xs={12}>
              <Typography variant="h5" align="center">
                Sign Up
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <TextField label="Email id" variant="outlined" />
            </Grid>
            <Grid item xs={12}>
              <TextField label="Password" variant="outlined" />
            </Grid>
            <Grid item xs={12}>
              <TextField label="Confirm Password" variant="outlined" />
            </Grid> */}
            <Grid item xs={12}>
              <Button onClick={signInWithGoogle} startIcon={<GoogleIcon/>} variant="contained">SignIN</Button>
            </Grid>
            {/* <Grid item xs={12}>
              <Typography variant="caption" align="center">
                Already have an account? <Link to='/login'>Login</Link>
              </Typography>
            </Grid> */}
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Signup;
