import Box from '@mui/material/Box';
import { Stack, AppBar, Toolbar, Typography, MenuItem,Select } from '@mui/material';
import { fontSize } from '@mui/system';
import './Bar.css'
import { useEffect,useState } from 'react';




//this is the timer componenet
function Timer(props){

    
    return(
        <Box>
            <Stack direction = 'row'>
                <Typography variant='h3' marginLeft = '2vw' id = 'timerMinutes'>
                    {props.minutes}
                </Typography>
                <Typography variant='h3' id = 'timerColon'>
                    :
                </Typography>
                <Typography variant='h3' id = 'timerSeconds'>
                    {props.seconds}
                </Typography>
            </Stack>
        </Box>
    );
}

export default Timer;