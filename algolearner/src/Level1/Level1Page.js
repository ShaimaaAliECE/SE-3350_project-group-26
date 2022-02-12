import Box from '@mui/material/Box';
import {Stack,Item,TextField,Button, Typography} from '@mui/material';
import Header from '../components/Header';
import {useState,useEffect, UseState} from 'react';
import VisNetwork from './treeLevel1.js'
import Timer from '../components/Timer';




function generateArray(){
    let arr = [];
    var num;
    for(let i =0; i< 10; i++){
        num = Math.floor(Math.random() * 20) + 1;
        arr.push(num);
        
    }
    return arr;
}
let i=0;
//temporary descriptions, will fix later once all the steps figured out
let des = ["The first step is to split up the array in half or as evenly as possible.", "The second step is to split the left array into half.", "The third step is to split the array into individual components.", 
                "The fourth step is to rearrage the components from smallest to largest.", "The fifth step is to split the right array into half.", "The sixth step is to split the array into individual components", 
                "The seventh step is to rearrange the components from smallest to largest", "The eigth step is to combine the two arrays", "The ninth step is to sort the combination to form the final sorted array"
            ];
const steps=[0,1,2,3,4,3,2,5,2,1,6,7,8,7,6,9,6,1,0]


function LevelOne(props){
    const [numberString, setNumString] = useState('');
    const [numArr, setNumArr] = useState([]);
    const [testing11, setTesting] = useState([]);
    const [count, setCount] = useState(0);
    const [fullArr, setFull] = useState([]);

     //Gets the beginning array
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
                height: '86.2vh',
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
                        <Button variant='outlined'
                            onClick = {()=>{

                                setCount(count -1);
                            }}>
                            Prev
                        </Button>

                        <Button variant='outlined'
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
                    <Box alignItems={'right'}>

                        <Typography paragraph='true' align='left' marginY={5} width={'50vh'}>{des[i]}</Typography>


                    </Box>
                    
                </Stack>

                    
 



                    {console.log(count)}
                <VisNetwork numberArray={numArr} treeForm={steps[count]} count={count}/>{/* We need to make it so after count 19 it the buttons dont work */}


            
            
            </Box>
            <Timer/>

        </>

    );

}

export default LevelOne;



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