import Box from '@mui/material/Box';
import { Stack, AppBar, Toolbar, Typography, MenuItem,Select } from '@mui/material';
import { fontSize } from '@mui/system';
import './Bar.css'
import { useEffect,useState } from 'react';




//this is the timer componenet
function Timer(props){

    const [totalSeconds, setTotalSeconds] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const [isActive, setIsActive] = useState(true);

    function toggle() {
    setIsActive(!isActive);
    }

    function reset() {
    setSeconds(0);
    setIsActive(false);
    }

    useEffect(() => {
    let interval = null;
    if (isActive) {
        interval = setInterval(() => {
        setTotalSeconds(totalSeconds => totalSeconds + 1);
        }, 1000);
        setMinutes(Math.floor(totalSeconds/60));
        setSeconds(totalSeconds%60);
    } else if (!isActive && totalSeconds !== 0) {
        clearInterval(interval);
    }
    return () => clearInterval(interval);
    }, [isActive, totalSeconds]);
    
    return(
        <Box>
            <Stack direction = 'row'>
                <Typography variant='h3' marginLeft = '2vw' id = 'timerMinutes'>
                    {minutes}
                </Typography>
                <Typography variant='h3' id = 'timerColon'>
                    :
                </Typography>
                <Typography variant='h3' id = 'timerSeconds'>
                    {seconds}
                </Typography>
            </Stack>
        </Box>
    );
}

export default Timer;