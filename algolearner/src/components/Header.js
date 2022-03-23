import Box from '@mui/material/Box';
import { Stack, AppBar, Toolbar, Typography, MenuItem,Select, Menu } from '@mui/material';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import axios from 'axios'
import {useState, useEffect} from 'react'

import { fontSize } from '@mui/system';
import './Bar.css'
import * as React from 'react';
import AccHeader from './accHeader';



function Header(props){
    /*Header Components*/
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    /*Acc Header */
    const [loggedIn, setLogin] = useState('');
    const [sDisplay, setDisplay] = useState('none');
  
    useEffect(()=>{
      axios.get("http://localhost:3001/api/login", { withCredentials: true })
      .then(response =>{
        if (response.data.loggedIn = true){
          setLogin(response.data.user[0].username);
          setDisplay('block');
        }
        else{
          setDisplay('none');
        }
      })
  
    },[]);


    return(
        <Box>
        
        <AppBar position='static'>
            <Toolbar className='toolbar'>

                <Box display="block" id = 'homeTitle'>
                    <Link to = {"/"} style={{ textDecoration: 'none',color :'white' }}>
                    <Typography variant="h4">
                        Sorting Visualizer
                    </Typography>
                    </Link>
                    
                </Box>

                <Box display='flex' alignItems={'center'}>
                        <Typography variant="h6" marginRight={2}>
                            {props.level}
                        </Typography>

                        <Typography variant="h6" marginRight={2} >
                            Choose your algorithmn
                        </Typography>



                        <Button
                            id="basic-button"
                            aria-controls={open ? 'basic-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            onClick={handleClick}
                            variant = "contained"
                            color = "info"
                            >
                            Menu
                        </Button>
                        <Menu
                            id="basic-menu"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            MenuListProps={{
                            'aria-labelledby': 'basic-button',
                            }}
                        >
                            <Link to = {"/Login"} style={{ textDecoration: 'none',color :'black' }}>
                                <MenuItem onClick={handleClose}>Login</MenuItem>
                            </Link>

                            <Link to = {"/AccountInfo"} style={{ textDecoration: 'none',color :'black' }}>
                                <MenuItem onClick={handleClose}>Account Info</MenuItem>
                            </Link>
                            <MenuItem onClick={handleClose}>
                                <Select defaultValue={1}>
                                    <MenuItem value={1}>MergeSort</MenuItem>
                                </Select>
                            </MenuItem>
                        </Menu>
                        

                </Box>
                


            </Toolbar>
        </AppBar>
        <AccHeader name = {loggedIn} display = {sDisplay}/>

        </Box>

        
    );
}

export default Header;