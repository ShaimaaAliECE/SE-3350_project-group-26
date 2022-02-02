import Box from '@mui/material/Box';
import { Stack, AppBar, Toolbar, Typography, MenuItem,Select } from '@mui/material';
import { fontSize } from '@mui/system';
import './Header.css'


function Header(props){
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


                        <Select defaultValue={1}>
                            <MenuItem value={1}>MergeSort</MenuItem>
                        </Select>
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