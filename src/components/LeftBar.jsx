import React, { useEffect, useState } from "react";
import { Avatar, Typography, Button } from "@mui/material";
import { onAuthStateChanged } from "firebase/auth";
import { makeStyles } from "@mui/styles";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { auth } from "../firebaseConfig";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const styles = makeStyles({
  conatiner: {
    // border: "1px solid red",
    backgroundColor: "transparent",
    padding: "1rem",
    margin: "10px",
    borderRadius: "15px",
  },
  heading: {
    fontWeight: "bold",
    margin: "10px",
    fontFamily: "Outfit",
  },
  userProfile: {
    backgroundColor: "transparent",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    borderRadius: "10px",
    padding: "1rem",
    boxShadow: "0px 0px 5px 0px rgba(0,0,0,0.75)",
  },
  userName: {
    // border:'1px solid red',
    // margin:'5px',
    padding: "10px",
    fontWeight: "bold",
    fontFamily: "Outfit",
  },
  logOut: {
    // border: "1px solid red",
    margin: "10px",
    padding: "10px",
    display: "flex",
    justifyContent: "center",
  },
});

const LeftBar = () => {
  const classes = styles();
  const [currentUser, setCurrentUser] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });
  });
  
  const signout =()=>{
      signOut(auth).then(()=>{
          navigate('/signup')
      })
  }

  return (
    <div className={classes.conatiner}>
      <Typography className={classes.heading} variant="h5">
        Zook
      </Typography>
      {currentUser && (
        <>
          <div className={classes.userProfile}>
            <Avatar
              alt="Remy Sharp"
              src={currentUser.photoURL}
              sx={{ width: 86, height: 86 }}
            />
            <Typography className={classes.userName}>
              {currentUser.displayName}
            </Typography>
            <Button variant="contained" color="primary">
              Edit Profile
            </Button>
          </div>
          <div className={classes.logOut}>
            <Button
             onClick={signout}
              variant="outlined"
              color="error"
              startIcon={<ExitToAppIcon />}
            >
              LOGOUT
            </Button>
          </div>
        </>
      )}
    </div>
  );
};

export default LeftBar;
