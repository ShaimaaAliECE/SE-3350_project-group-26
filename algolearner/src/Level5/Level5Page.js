import Box from '@mui/material/Box';
import {Stack,Item,TextField,Button, Typography} from '@mui/material';
import Header from '../components/Header';
import {useState,useEffect, UseState} from 'react';
import VisNetwork from './treeLevel5.js'
import Timer from '../components/Timer';
import {getFullArraySolution,getBreakArraySolution,setArray} from './SolutionPerStepLevel5'

//TODO
//We need to create a textbox for the user to enter the answer, 1 or 2 depending on the step, then a checking function that compares the answer for each step
 
// need to add sound 
//GETTING SOLUTIONS FOR EACH STEP: 
const arrayStepBreakArray=[1,2,3,4,5,6,-1,7,-1,-1,8,9,-1,-1,-1,10,11,12,-1,-1,-1,-1,15,16,17,18,-1,-1,19,20,-1,-1,-1,21,22,23,-1,-1,24,25,-1,-1,-1,-1,-1,26,27,28,29,30,-1,31,-1,-1,32,33,-1,-1,-1,34,35,36,-1,-1,37,38,-1,-1,-1,-1,39,40,41,42,-1,-1,-1,45,46,47,-1,-1,48,49,-1,-1,-1,-1,-1,-1]// calling which step in the solution to call using 'count' as the index
// if arrayStepBreakArray[count]!=-1 then call getBreakArraySolution() otherwise getFullArraySolution() 
var arrayStepFullArray=0; //increment it everytime we call the getFullArraySolution()
//Might need to change the function to await or add a timer(setTimeout()) before re-rendering the page
//Also when arrayStepBreakArray==-1 we need to display only 1 textbox not both


function generateArray(){
    let arr = [];
    var num;
    for(let i =0; i< 50; i++){
        num = Math.floor(Math.random() * 100) + 1;
        arr.push(num);
        
    }
    return arr;
}
let i=0;
//temporary descriptions, will fix later once all the steps figured out
let des = ["","The first step is to split up the array in half or as evenly as possible.", "The second step is to split the left array into half.", "The third step is to split the array into individual components.", 
                "The fourth step is to rearrage the components from smallest to largest.", "The fifth step is to split the right array into half.", "The sixth step is to split the array into individual components", 
                "The seventh step is to rearrange the components from smallest to largest", "The eigth step is to combine the two arrays", "The ninth step is to sort the combination to form the final sorted array"
            ];
const steps=[0,1,2,3,4,3,2,5,2,1,6,7,     8,  9,    6,   8,   6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6]

//dsad
function LevelThree(props){
    const [numberString, setNumString] = useState('');
    const [numArr, setNumArr] = useState([]);
    const [testing11, setTesting] = useState([]);
    const [count, setCount] = useState(0);
    const [fullArr, setFull] = useState([]);
    const[userArrL, setUserL] = useState([]);
    const[userArrR, setUserR] = useState([]);
    const nodesStep=[[2,3],[4,5],[6,7],[10,11],[4],[8,9],[2],[12,13],[14,15],[17,16],[14],[12],[18,19],[13],[3],[1],[13],[3],[1]]
    const [instructionText,setInsText] = useState('');

     //Gets the beginning array
     useEffect(()=>{
        setNumArr(generateArray());
    },[]);
    setArray(numArr)

    let win = new Audio("/win.mp3")
    let lose = new Audio("/lose.mp3")

    let nodeNum1Array=[2,4,6,8,4,10,12,14,17,14,12,18,13,3,1]
    let nodeNum2Array=[3,5,7,9,'',11,'',13,15,16,'','',19,'','','']

    function nodeNum2()// We can change the highlighted text in the textBoxes
    {
        if(nodeNum2Array[count]=='')
        {
            return ''
        }
        else
        {
            return 'Node'+nodeNum2Array[count]

        }
        
    }

    function nodeNum1()// We can change the highlighted text in the textBoxes
    {
        return 'Node'+nodeNum1Array[count]
    }





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
                                    width: '1vw',
                                    width: '1vw',
                                    fontSize: 16,
                                    p:1,    
                                    border: '2.5px solid purple',
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
                                if (count>0){
                                    setCount(count -1);
                                }
                                
                            }}>
                            Prev
                        </Button>

                        <Button variant='outlined'
                            onClick = {()=>{
                                
                                
                            //   console.log(count);
                     
                            const checkBreak = ()   => {
                                
                            
                                 getBreakArraySolution(arrayStepBreakArray[count]).then((data)=>{
                                    console.log(data);
                                     if((data[0].toString()==userArrL)&&(data[1].toString()==userArrR)){
                                        setInsText("Correct");
                                         setCount(count +1);
                                         win.play()
                                         
                                     }
                                     else{
                                        setInsText("Incorrect");
                                        lose.play()
                                     }
                                     
                         
                                 })
                         
                        
                             }
                             const checkFull = ()   => {
                                var dictF = {
                                    6:0,
                                    8:1,
                                    9:2,
                                    12:3,
                                    13:4,
                                    14:5,
                                    18:6,
                                    19:7,
                                    20:10,
                                    21:11,
                                    26:12,
                                    27:13,
                                    30:14,
                                    31:15,
                                    32:16,
                                    36:17,
                                    37:18,
                                    40:19,
                                    41:20,
                                    42:21,
                                    43:22,
                                    44:23,
                                    50:24,
                                    52:25,
                                    53:26,
                                    56:27,
                                    57:28,
                                    58:29,
                                    62:30,
                                    63:31,
                                    66:32,
                                    67:33,
                                    68:34,
                                    69:35,
                                    74:36,
                                    75:37,
                                    76:40,
                                    80:41,
                                    81:42,
                                    84:43,
                                    85:44,
                                    86:45,
                                    87:46,
                                    88:47,
                                    89:48
                                }

                            
                                 getFullArraySolution(dictF[count]).then((data)=>{
                                            console.log(data+"dasda");
                                        if(userArrL==data){
                                            setInsText("Correct");
                                            setCount(count +1);
                                            win.play()
                                            setCount(count +1);
                                        }
                                        else{
                                            setInsText("Inorrect");
                                            lose.play()
                                        }
                                 })
                             }
                             if (arrayStepBreakArray[count]==-1){
                                checkFull();
                         
                             }
                             else{
                                
                                 checkBreak();
                             }  
                             
                            
                             

                            }}>
                            
                            Next
                        </Button>


                    </Stack>
                    <Stack>
                         <Typography color='#d43378' variant='h5'>{'Step: '+count}</Typography>
                    </Stack>
                    <Stack>
                         <Typography color='#a61113' variant='h4'>{instructionText}</Typography>
                    </Stack>
                    <Box alignItems={'right'}>

                        <Typography paragraph='true' align='left' marginY={5} width={'50vh'}>{des[i]}</Typography>


                    </Box>
                    <Stack direction={'row'}>
                        <TextField color="secondary" id="outlined-basic" label={nodeNum1()} variant="outlined" 
                        onChange = {(e) =>{
                            setUserL(e.target.value);
                            
                            
                        }}
                        />

                        <TextField color="secondary" id="outlined-basic" label={nodeNum2()} variant="outlined" 
                        onChange = {(e) =>{
                            setUserR(e.target.value);
                            
                        }}
                        /> 
                    </Stack>
                  
                    
                </Stack>

                    
 



                    {console.log(count)}
                <VisNetwork numberArray={numArr} treeForm={steps[count]} count={count}/>{/* We need to make it so after count 19 it the buttons dont work */}


               
            </Box>
            {/*<Timer/>*/}

        </>

    );

}



export default LevelThree;
