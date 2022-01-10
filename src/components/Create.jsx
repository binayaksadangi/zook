import React from 'react'
import { Box,
    Button,
    Stack,
    TextField,
    IconButton,
    Typography,
    Container,} from '@mui/material'
    import AddPhotoAlternateOutlinedIcon from '@mui/icons-material/AddPhotoAlternateOutlined';
 import { makeStyles } from "@mui/styles";

 const useStyles = makeStyles({
    box: {
      width: "60vw",
      height: "50vh",
      alignItems: "center",
      boxShadow: "0px 0px 10px #000000",
      margin: '0 auto',
      marginTop: "20vh",
      display: "flex",
      justifyContent: "center",
      borderRadius: "12px", 
      overflow: "hidden",
    },
  });

const Create = () => {
    const classes = useStyles();
    return (
        <Container>
            <Box className={classes.box}>
                <Stack spacing={1}>
                <Typography mt={2}  variant='body1'>Create a post</Typography>
                <TextField maxRows={3} label='type...' multiline  variant='standard' required/>
                <Button variant='contained' color='primary'>Post</Button>
                <Button variant='outlined' color='error'>Back</Button>
                <IconButton variant='outlined' color='secondary'><AddPhotoAlternateOutlinedIcon/></IconButton>
                </Stack>
            </Box>
        </Container>
    )
}

export default Create
