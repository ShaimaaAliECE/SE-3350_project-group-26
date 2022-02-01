import Box from '@mui/material/Box';
import {Stack,Item,TextField,Button} from '@mui/material';
import Header from '../components/Header';
import {useState, UseState} from 'react';

function stringToArr(stringVal){
    var arr = [];
    let comma = ',';

    while(stringVal != ""){
        let indexOfComma = stringVal.indexOf(comma);
        

        arr.push(stringVal.substring(0,indexOfComma));

        stringVal = stringVal.substring(indexOfComma+1, stringVal.length);

    }
    console.log(arr);

    return arr;


    

}


function LevelOne(props){
    const [numberString, setNumString] = useState('');
    const [numArr, setNumArr] = useState([]);
    return(
        <>
            <Header level = "Level One"/>
            <Box
            sx = {{
                height: '92vh',
                width: '100vw',
                backgroundColor: 'white'
            }}>

                <Stack width = '100vw' alignItems={'center'} justifyItems={'center'}>
                    <Box 
                    sx= {{
                        marginLeft: '2vw',
                        width: '20vw'

                    }}>
                        <TextField 
                            id="outlined-basic" 
                            label="Enter your array numbers" 
                            variant="outlined" 
                            fullWidth
                            onChange = {(e) =>{
                                setNumString(e.target.value);
                                console.log(numberString);
                            }}/>
                    </Box>
                </Stack>
                <Button
                onClick = {()=>{
                    setNumArr(stringToArr(numberString));
                    console.log(numArr);
                }}>
                    Click me convert to arr
                </Button>
            
            
            </Box>
        </>
    );

}

export default LevelOne;