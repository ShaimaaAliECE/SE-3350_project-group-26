import Box from '@mui/material/Box';
import {Stack,Item,TextField,Button, Typography} from '@mui/material';
import Header from '../components/Header';
import {useEffect, useState, UseState} from 'react';
import { Link } from "react-router-dom";
import axios from 'axios'



function HomePage(props){
    const [but, setButton] = useState('Please Login');
    const [p, setPath] = useState('/login');
    useEffect(()=>{
        axios.get("http://localhost:3001/api/login", { withCredentials: true })
        .then(response =>{
          if (response.data.loggedIn == true){
            setButton('Start');
            setPath('/LevelOne');
          }
        })
    },[]);
    
    return(
        <Box>
            
            <Box
            sx = {{
                height: '60vh',
                width: '100vw',
                backgroundColor: 'white'
            }}>
                <Header level = ""/>

                
                <Stack width = '100vw' alignItems={'center'} justifyContent='center'>
                    <Typography variant="h2" fontWeight={'bold'} color = "#2D3748" marginTop = '2vh'>
                        Welcome to Algo Learner!
                    </Typography>

                    <Typography variant="subtitle1" color = "#2D3748">
                        Please select a algorithm to learn from the top right!
                    </Typography>

                    <Box marginTop = '2vh'>

                    </Box>
                    <Typography variant="subtitle1" color = "#2D3748">
                        Each algorithm has a set of visualized steps and description.
                    </Typography>
                    <Typography variant="subtitle1" color = "#2D3748">
                        You can view eachs step and go forwards or backwards.
                    </Typography>

                    <Box  marginTop = '5vh' >
                        <Link to = {p}>
                            <Button  variant="contained">
                                {but}
                            </Button>
                        </Link>
                    </Box>
                </Stack>
            </Box>
        </Box>
    );
}

export default HomePage;