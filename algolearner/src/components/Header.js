import Box from '@mui/material/Box';
import { Stack } from '@mui/material';
import { fontSize } from '@mui/system';



function Header(props){
    return(
        <>
        <Box
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

        </Box>

        </>
    );
}

export default Header;