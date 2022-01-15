
import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
// user details
import { Avatar, Button } from "@mui/material";
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
    margin: "5px",
    padding: "10px",
    display: "flex",
    justifyContent: "center",
  },
  create: {
      display: "flex",
      justifyContent: "center",
    //  border: "1px solid red",
     marginTop: "15px",
     padding: "5px",
  }
});

const drawerWidth = 240;

function ResponsiveDrawer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const classes = styles();
  const [currentUser, setCurrentUser] = React.useState();
  const navigate = useNavigate();

  React.useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });
  });
  
  const signout =()=>{
      signOut(auth).then(()=>{
          navigate('/signup')
      })
  }

    const create =()=>{
        navigate('/create');
    }

  const drawer = (
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
        <div className={classes.create}>
            <Button 
            onClick={create}
            variant="contained">Create Post</Button>
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

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Home
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
 
      </Box>
    </Box>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default ResponsiveDrawer;

