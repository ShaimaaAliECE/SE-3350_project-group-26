import Box from '@mui/material/Box';
import {Stack,Item,TextField,Button, Typography} from '@mui/material';
import Header from '../components/Header';
import {useState, UseState} from 'react';


function stringToArr(stringVal){ //This converts a string into an array

    var arr = stringVal.split(',').map(function(item) {
        return parseInt(item, 10);
    });

    return arr;

}


function LevelOne(props){
    const [numberString, setNumString] = useState('');
    const [numArr, setNumArr] = useState([]);
    const [testing11, setTesting] = useState([]);
    const [count, setCount] = useState(0);
    const [fullArr, setFull] = useState([]);


    const check = () =>{
        var send = {
            "depth": count,
            "arr": numArr
        }
        fetch('http://localhost:3001/api/getStep', {  //connect to backend
        method: 'POST', //post
        credentials: 'include', 
        headers: {
            'Content-Type': 'application/json',
    },
        body: JSON.stringify(send), //body is the set data from earlier
    })
        .then(response => (response.json()))

        .then(data => {
            setTesting(data.break);
            setFull(data.full);     
            console.log(fullArr);

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
                        marginTop: '5vw',
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
                    <Button
                        onClick = {()=>{
                            setCount(count -1);
                        }}>
                        Prev
                    </Button>
                    <Button
                        onClick = {()=>{
                            
                            setCount(count +1);
                            console.log(count);
                        }}>
                        
                        Next
                    </Button>

                </Stack>

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

                <Stack direction={'row'}
                marginLeft = '2vw'>
                    {testing11.map((v) =>{
                        return (
                            <Box 
                                sx = {{
                                    border: '2px solid Black',
                                    width: "100px"
                                }}>{

                            v.map((e)=>{
                                return(
                                    <Box 
                                    sx = {{
                                        border: '2px solid Black',
                                        width: "100px"
                                    }}>
                                        {e}
                                    </Box>
                            
                                );
                            })}
                            </Box>
                        );
                    })}
                </Stack>
                <Typography>Full Array</Typography>
                <Stack direction={'row'}>
                    {fullArr.map((v) =>{
                        return(
                            <Box 
                            sx = {{
                                marginTop: '10px',
                                border: '2px solid Black',
                                width: "50px"
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