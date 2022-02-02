import React from 'react';
import Box from '@mui/material/Box';
import { Stack, Typography, TextField, Grid, Button  } from '@mui/material';

function Boxes() {


  return (
    <>
    <Box>
        <Typography>Step # -- SAMPLE GRID</Typography>
        <Typography>Description of step</Typography>
    </Box>

    <Box display={'flex'}>
    

    <Grid container alignItems={'center'} marginY={5} rowSpacing={8}>
        <Grid item xs={12}>
            <Typography variant='h6'>[1,2,3,5]</Typography>
            
        </Grid>

        <Grid item xs={6}>
        <Typography variant='h6'>[1,2]</Typography> 
        </Grid>

        <Grid item xs={6}>
        <Typography variant='h6'>[3,5]</Typography>
        </Grid>

        <Grid item xs={3}>
        <Typography variant='h6'>[1]</Typography>
        </Grid>

        <Grid item xs={3}>
        <Typography variant='h6'>[2]</Typography>
        </Grid>

        <Grid item xs={3}>
        <Typography variant='h6'>[3]</Typography>
        </Grid>

        <Grid item xs={3}>
        <Typography variant='h6'>[5]</Typography>
        </Grid>

        <Grid item xs={6}>
        <Typography variant='h6'>[1,2]</Typography> 
        </Grid>

        <Grid item xs={6}>
        <Typography variant='h6'>[3,5]</Typography>
        </Grid>

        <Grid item xs={12}>
            <Typography variant='h6'>[1,2,3,5]</Typography>
            
        </Grid>
        
    </Grid>

    <Box alignItems={'center'}>

        <Typography paragraph='true' align='left' marginY={5} width={'50vh'}>Description goes here.. this step does this and that xxxxxxxxx xxxxxxxxxxxx</Typography>

        <Button variant='contained'>Next</Button>
        <Button variant='contained'>Previous</Button>

        
    </Box>


    </Box>
    </>

  );
}

export default Boxes;
