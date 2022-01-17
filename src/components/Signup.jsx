import React from "react";
import img from "../image/ZOOK.png";
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
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { makeStyles } from "@mui/styles";
import { Login } from "@mui/icons-material";
import GoogleIcon from "@mui/icons-material/Google";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
cont:{
//  border:'1px solid red',
 padding:'10px',
 display:'flex',
 flexDirection:'column',
 height:'calc(100vh - 82px)',
 
},
  header:{
    // border: "1px solid red",
    padding: "1rem",
    marginTop: "10px",
  },
  bdy:{
    backgroundImage: "url(https://images.unsplash.com/photo-1526655805340-274e69922288?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)",
    // border: "1px solid red",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    rowGap: "1rem",
    justifyContent: "center",
    marginTop: "40px",
    height:"500px",
    borderRadius: "20px",
  },
  imgSrc:{
    // border: "1px solid red",
    width: 'auto',
    padding: "1rem",
    borderRadius: '12px',
    backgroundSize: 'cover', 
  },
  img:{
    height:'300px',
    width:'100%',
    borderRadius: '12px',
  },
  btn:{
    // border: "1px solid red",
  },
  headerTxt: {
    display: "flex",
    justifyContent: "center",
    margin: "40px auto",
    fontFamily: 'Abril-Fatface',
    // border: "1px solid red",
    padding: "10px",
    color: "#d4af37 ",
  },
  footer:{
    backgroundColor:'#f5f5f5',
    // border: "1px solid red",
    padding: "1rem",
    marginTop: "auto",
  },
  footerTxt:{
    // border: "1px solid red",
    display: "flex",
    justifyContent: "center",
  }
});

const Signup = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((res) => {
        console.log(res);
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
    <Container>
      <div className={classes.cont}>
      <div className={classes.header}>
        <Typography variant="h3" className={classes.headerTxt}>
          ZOOK
        </Typography>
      </div>
      <div className={classes.bdy}>
          <div className={classes.imgSrc}>
            <img  className={classes.img} src={img} alt="" />
          </div>
        <div className={classes.btn}>
          <Button
            onClick={signInWithGoogle}
            startIcon={<GoogleIcon />}
            variant="contained"
          >
            Sign IN With Google
          </Button>
        </div>
      </div>
    </div>
    </Container>
    <div className={classes.footer}>
    <Typography variant="body1" className={classes.footerTxt}>
      Copyrights reserved @zook 2022
    </Typography>
  </div>
  </>
  );
};

export default Signup;
