import Box from '@mui/material/Box';
import { Stack, AppBar, Toolbar, Typography, MenuItem,Select } from '@mui/material';
import { fontSize } from '@mui/system';
import './Bar.css'
import { useEffect } from 'react';


//this function updates the time
function set(){
    var minutesLabel = document.getElementById("timerMinutes");
    var secondsLabel = document.getElementById("timerSeconds");
    var totalSeconds = 0;
    setInterval(setTime, 1000);

    function setTime()
    {
        ++totalSeconds;
        secondsLabel.innerHTML = pad(totalSeconds%60);
        minutesLabel.innerHTML = pad(parseInt(totalSeconds/60));
    }

    function pad(val)
    {
        var valString = val + "";
        if(valString.length < 2)
        {
            return "0" + valString;
        }
        else
        {
            return valString;
        }
    }

    console.log("helo");

}



//this is the timer componenet
function Timer(props){

    useEffect(()=>{
        set();
    })
    
    return(
        <Box>
            <Stack direction = 'row'>
                <Typography variant='h3' marginLeft = '2vw' id = 'timerMinutes'>
                    00
                </Typography>
                <Typography variant='h3' id = 'timerColon'>
                    :
                </Typography>
                <Typography variant='h3' id = 'timerSeconds'>
                    00
                </Typography>
            </Stack>
        </Box>
    );
}

export default Timer;