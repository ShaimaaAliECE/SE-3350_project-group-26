import Box from '@mui/material/Box';
import {Stack,Item} from '@mui/material';
import Header from '../components/Header';


function LevelOne(props){
    return(
        <>
            <Header level = "Level One"/>
            <Box
            sx = {{
                height: '100vh',
                width: '100vw',
                backgroundColor: 'gray'
            }}>
            
            
            </Box>
        </>
    );

}

export default LevelOne;