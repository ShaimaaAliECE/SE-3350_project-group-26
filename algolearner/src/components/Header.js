import Box from '@mui/material/Box';
import { Stack, AppBar, Toolbar, Typography, MenuItem,Select, Menu } from '@mui/material';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";


import { fontSize } from '@mui/system';
import './Bar.css'
import * as React from 'react';



function Header(props){
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return(
        
        <AppBar position='static'>
            <Toolbar className='toolbar'>

                <Box display="block">
                    
                    <Typography variant="h4">
                        Sorting Visualizer
                    </Typography>
                    
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
                            <Link to = {"/Login"}>
                                <MenuItem onClick={handleClose}>Login</MenuItem>
                            </Link>
                            <MenuItem onClick={handleClose}>Account Info</MenuItem>
                            <MenuItem onClick={handleClose}>
                                <Select defaultValue={1}>
                                    <MenuItem value={1}>MergeSort</MenuItem>
                                </Select>
                            </MenuItem>
                        </Menu>

                </Box>

                
                
                {
                    /*

                    <Box sx = {{
                            width: '45vw',
                            fontSize: '2em'
                            
                            
                        }}>
                        Sorting Visualizer
                </Box>
            
            
            {/*<Box
                sx = {{
                    height: '8vh',
                    width : '100vw',
                    backgroundColor :'white',
                    borderBottom: '2px, solid black'
                }}>
                
                <Stack direction = "row" spacing = {2} alignItems={'center'} justifyContent={'center'} width = '100vw' height = '8vh' >
                    <Box sx = {{
                            width: '45vw',
                            fontSize: '2em'
                            
                            
                        }}>
                        Sorting Visualizer
                    </Box>
                    <Box sx = {{
                            width: '45vw',
                            fontSize: '2em',
                            textAlign: 'right'
                        }}>
                        {props.level}
                    </Box>

                
                </Stack>

            </Box>*/}

            </Toolbar>
        </AppBar>

        
    );
}

export default Header;