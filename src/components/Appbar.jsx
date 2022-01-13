import { AppBar, Box, Toolbar, Typography } from '@mui/material'
import React from 'react'

const Appbar = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position='sticky'>
                <Toolbar>
                    <Typography sx={{mr:5}} variant='body1' >Home</Typography>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Appbar
