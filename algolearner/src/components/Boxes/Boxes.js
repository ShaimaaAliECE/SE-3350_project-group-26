import React from 'react';
import Box from '@mui/material/Box';
import { Stack, Typography, TextField, Grid,  } from '@mui/material';

function Boxes() {


  return (
    
    <Grid container alignItems={'center'} marginY={5} >
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
        
    </Grid>
    

  );
}

export default Boxes;
