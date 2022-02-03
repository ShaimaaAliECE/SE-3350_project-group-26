import Box from '@mui/material/Box';
import {Stack,Item,TextField,Button} from '@mui/material';
import Header from '../components/Header';
import {useState, UseState} from 'react';


function stringToArr(stringVal){ //This converts a string into an array
    var arr = []; 
    let comma = ',';

    while(stringVal != ""){

        let indexOfComma = stringVal.indexOf(comma);

        if(indexOfComma == -1){
            arr.push(stringVal);
            stringVal = "";
        }
        else{
            arr.push(stringVal.substring(0,indexOfComma));
            stringVal = stringVal.substring(indexOfComma+1, stringVal.length);
        }

    }

    return arr;


}


function LevelOne(props){
    const [numberString, setNumString] = useState('');
    const [numArr, setNumArr] = useState([]);
    const data = {
        "depth": 8,
        "arr": numArr
    }

    const check = () =>{
        fetch('http://localhost:3001/api/getStep', {  //connect to backend
        method: 'POST', //post
        credentials: 'include', 
        headers: {
            'Content-Type': 'application/json',
    },
        body: JSON.stringify(data), //body is the set data from earlier
    })
        .then(response => (response.json()))

        .then(data => {
            console.log(data);
     

        })
        .catch((error) => {
            console.error('Error:', error);
    });

    }
    return(
        <>
            <Header level = "Level One"/>
            <Box
            sx = {{
                height: '60vh',
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

                <Button
                    onClick = {()=>{
                        check();
                    }}>
                    TESTING
                </Button>

                <Stack direction={'row'}
                marginLeft = '2vw'>
                    {numArr.map((v) =>{
                        return(
                            <Box 
                            sx = {{
                                border: '2px solid Black',
                                width: "20px"
                            }}>
                                {v}
                            </Box>
                           
                        );
                    })}
                </Stack>
            
            
            </Box>
        </>
    );

}

export default LevelOne;