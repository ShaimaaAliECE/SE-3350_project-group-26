import Box from '@mui/material/Box';
import {Stack,Item,TextField,Button, Typography} from '@mui/material';
import Header from '../components/Header';
import {useEffect, useState, UseState} from 'react';
import { Link } from "react-router-dom";
import axios from 'axios'


function AccInfo(){


    return(
        <>
        <Box
            sx = {{
                height: '60vh',
                width: '100vw',
                backgroundColor: 'white'
            }}>
            <Header level = ""/>


        </Box>
        </>
    );

}

export default AccInfo;