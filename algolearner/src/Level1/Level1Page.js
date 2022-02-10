import Box from '@mui/material/Box';
import {Stack,Item,TextField,Button, Typography} from '@mui/material';
import Header from '../components/Header';
import {useEffect, useState, UseState} from 'react';
import VisNetwork from '../tree.js'



/*This generates the random array int */
function generateArray(){
    let arr = [];
    var num;
    for(let i =0; i< 10; i++){
        num = Math.floor(Math.random() * 20) + 1;
        arr.push(num);
        
    }
    return arr;
}



const steps=[0,1,2,3,4,3,2,5,2,1,6,7,8,7,6,9,6,1,0]

function LevelOne(props){
    const [numberString, setNumString] = useState('');
    const [numArr, setNumArr] = useState([]);
    const [testing11, setTesting] = useState([]);
    const [count, setCount] = useState(0);
    const [fullArr, setFull] = useState([]);
    useEffect(()=>{
        setNumArr(generateArray());
    },[]);

    


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
                <Stack direction = "column" gap = {3} width = '100vw' alignItems={'center'} justifyItems={'center'} >
                    <Stack direction = "row" gap = {3} marginTop = {'2vh'}>
                        {numArr.map((v) =>{
                            return(
                                <Box sx= {{
                                    width: '1vw'

                                }}>
                                    {v}
                                </Box>
                            );
                        })}
                        
                    </Stack>

                    <Stack direction={'row'}
                    >
                        <Button
                            onClick = {()=>{

                                setCount(count -1);
                            }}>
                            Prev
                        </Button>

                        <Button
                            onClick = {()=>{
                                
                                setCount(count +1);
                            //   console.log(count);
                            }}>
                            
                            Next
                        </Button>


                    </Stack>
                    <Stack>
                        {count}
                    </Stack>
                    
                </Stack>

                    {console.log(count)}
                <VisNetwork treeForm={steps[count]} count={count}/>{/* We need to make it so after count 19 it the buttons dont work */}
            
            </Box>

        </>

    );

}

export default LevelOne;

 {/*<Stack width = '100vw' alignItems={'center'} justifyItems={'center'}>
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
                </Stack>*/}

{/*
                <Button
                onClick = {()=>{
                    setNumArr(stringToArr(numberString));
                    console.log(numArr);
                }}>
                    Click me convert to Array
                </Button>

                <Button
                    onClick = {()=>{
                        check();
                    }}>
                    TESTING
                </Button>*/}



/* Goes after Line 158
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
                </Stack>*/

    /*function stringToArr(stringVal){ //This converts a string into an array

    var arr = stringVal.split(',').map(function(item) {
        return parseInt(item, 10);
    });

    return arr;

}*/