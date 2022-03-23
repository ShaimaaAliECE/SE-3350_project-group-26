import Box from '@mui/material/Box';
import {Stack,Item,TextField,Button, Typography, colors} from '@mui/material';
import Header from '../components/Header';
import {useState,useEffect, UseState} from 'react';
import VisNetwork from './treeLevel1.js'
import Timer from '../components/Timer';
import { Link } from "react-router-dom";
import { color } from '@mui/system';
import axios from 'axios';





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
let des = ["The first step is to split up the array in half or as evenly as possible.", "The second step is to split the left array into half or as evenly as possible.", "The third step is to split the left array into half or as evenly as possible.",
                "The fourth step is to split the left array into half or as evenly as possible.", "The fifth step is to rearrage the components from smallest to largest.", "The sixth step is to merge the bottom two arrays.", "The seventh step is to merge the bottom two arrays.", 
                "The eigth step is to split the right array into half or as evenly as possible.","The ninth step is to rearrange the numbers from smallest to largest and merge the bottom two arrays", 
                "The tenth step is to split the right array into half or as evenly as possible.", "The eleventh step is to split up the right array in half or as evenly as possible.", "The twelfth step is to split the left array into half or as evenly as possible.", 
                "The thirteenth step is to split the left array into half or as evenly as possible.",
                "The fourteenth step is to rearrage the components from smallest to largest and merge the bottom two arrays.", "The fifteenth step is to merge the bottom two arrays.", "The sixteenth step is to split the right array into half or as evenly as possible.",
                "The seventeenth step is to rearrange the numbers from smallest to largest and merge the bottom two arrays.", "The eighteenth step is to merge the bottom two arrays." , "The ninteenth step is to merge the bottom two arrays and you are left with your sorted array.","Congratulations!!! You may proceed to the next level"
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

    const nextLevel = () => {
        document.getElementById("nextLevelButton").style.display = 'Block';
    }

    const [loggedIn, setLoggedIn] = useState(false);

    useEffect(()=>{
        axios.get("http://localhost:3001/api/login", { withCredentials: true })
        .then(response =>{
          if (response.data.loggedIn == true){
              setLoggedIn(true);
             
          }
        })
    },[]);

    if (loggedIn == false){
        return(
            <Box textAlign={'center'}>
                <Link to = {"/Login"} style={{ textDecoration: 'none',color :'black' }}>
                    <Button>
                    
                    <Typography variant='h3'>
                        PLEASE LOGIN
                    </Typography>
                    </Button>
                </Link>
            </Box>
        
        );
    }
    else{
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
                                        width: '1vw',
                                        fontSize: 16,
                                        p:1,    
                                        border: '2.5px solid purple'
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

                                    if (count > 0){
                                        setCount(count -1);
                                        i--; //get the previous description
                                    }
                                }}>
                                Prev
                            </Button>

                            <Button variant='outlined'
                                onClick = {()=>{
                                                
                                    if (count <19){
                                        setCount(count +1);
                                        i++; //get the next description
                                    }
                                    else{
                                        nextLevel();
                                    }
                                
                                }}>
                                
                                Next
                            </Button>


                        </Stack>

                        <Stack>
                        <Typography color='#d43378' variant='h5'>{'Step: '+count}</Typography>
                        </Stack>
                        <Stack id = 'nextLevelButton' display = 'none'>
                            <Link to = {"/LevelTwo"}>
                                <Button  variant="contained">
                                    Next Level
                                </Button>
                            </Link>
                        </Stack>
                        <Box alignItems={'right'} sx={{ fontSize: 45,fontStyle: 'oblique',fontFamily: 'Monospace',p: .4,border: '5px solid green', '&:hover': {backgroundColor: '#49c470',},}}>

                            <Typography variant="h6" color='#a61113' paragraph='true' align='left' marginY={5} width={'50vh'}>{des[i]}</Typography>


                        </Box>
                        
                    </Stack>

                        
    



                        {console.log(count)}
                    <VisNetwork numberArray={numArr} treeForm={steps[count]} count={count}/>{/* We need to make it so after count 19 it the buttons dont work */}


                
                
                </Box>
                {<Timer/>}

            </>

        );
    }

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