

import Box from '@mui/material/Box';
import { Stack, AppBar, Toolbar, Typography, MenuItem,Select, Menu } from '@mui/material';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";


import { fontSize } from '@mui/system';
import './Bar.css'
import * as React from 'react';
import axios from 'axios'
function AccHeader(props){

    const signout = () =>{
        axios.get("http://localhost:3001/api/signout", { withCredentials: true })
        .then(response =>{
           alert(response.data)
        })
        window.location.reload();
    }

    return(
        <Box sx={{ flexGrow: 1 }} display = {props.display}>
            <Stack direction={'row'} width = '100%' alignItems={'center'} justifyContent='space-between' flexWrap={'wrap'}>
                <Box display="block" marginLeft = {"1vw"}>
                    
                    <Typography variant="h4">
                        {props.name}
                    </Typography>
                    
                </Box>
                <Box display="block" marginRight = {"1vw"} id = 'signoutButton' order ='2' onClick = {signout}>
                    <Typography variant="h4">
                        Sign out
                    </Typography>
                </Box>
            </Stack>

                

        </Box>
    );
}

export default AccHeader;