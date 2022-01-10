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

import { makeStyles } from "@mui/styles";
import { Login } from "@mui/icons-material";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  box: {
    widtth: "50vw",
    height: "70vh",
    alignItems: "center",
    boxShadow: "0px 0px 10px #000000",
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
  return (
    <Container>
      <Box className={classes.box}>
        <Grid container>
          <Grid item xs={0} md={6}>
            <img src={img} alt="" />
          </Grid>

          <Grid container spacing={1} xs={12} md={6}>
            <Grid item xs={12}>
              <Typography variant="h5" align="center">
                Login
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <TextField label="Email id" variant="outlined" />
            </Grid>
            <Grid item xs={12}>
              <TextField label="Password" variant="outlined" />
            </Grid>
           
            <Grid item xs={12}>
              <Button startIcon={<Login/>} variant="contained">Login</Button>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="caption" align="center">
                Don't have an account yet? <Link to='/signup'>SignUp</Link>
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Signup;
