import React,{useState} from 'react'
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebaseConfig";
import AddIcon from "@mui/icons-material/Add";
import { makeStyles } from "@mui/styles";
import { TextField,Dialog, Button,Fab,DialogActions,DialogTitle, DialogContent, Stack, Divider} from '@mui/material';

const useStyles = makeStyles({
    txt:{
        marginBottom:'2rem'
    }
})



const CrerateDialog = () => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [caption,setCaption] =useState('');
    const [imgURL,setImgURL] = useState('');
    const capCollRef = collection(db, "Posts");

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    const createPost = async (e) => {
        e.preventDefault();
        if (caption) {
          await addDoc(capCollRef, { caption: caption,imgURL:imgURL }).then(() => {
            handleClose();
          });
          setCaption("");
        }
      
      };

    return (
        <div>
          <Fab onClick={handleClickOpen} color="primary">
            <AddIcon />
          </Fab>
              <form onSubmit={createPost}>
          <Dialog open={open} onClose={handleClose}> 
              <DialogTitle>Create Post</DialogTitle>
              <Divider/>
              <DialogContent>
                  <Stack>
                <TextField
                className={classes.txt}
                 onChange={(e) => setCaption(e.target.value)}
                maxRows={3}
                label="type..."
                multiline
                variant="standard"
                required
                />
                 <TextField
                  className={classes.txt}
                onChange={(e) => setImgURL(e.target.value)}
                label="image url..."
                 variant="standard"
                />
                </Stack>
              </DialogContent>
              <Divider/>
              <DialogActions>
                <Button variant='contained' type='submit'>Post</Button>
                <Button variant='outlined' color='error' onClick={handleClose}>Back</Button>
         
             </DialogActions>
          </Dialog>
                </form>
        </div>
    )
}

export default CrerateDialog
