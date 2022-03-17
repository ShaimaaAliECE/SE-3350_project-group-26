import Box from '@mui/material/Box';
import {Stack,Item,TextField,Button, Typography} from '@mui/material';
import Header from '../components/Header';
import {useState,useEffect, UseState} from 'react';
import VisNetwork from './treeLevel3.js'
import Timer from '../components/Timer';
import {getFullArraySolution,getBreakArraySolution,setArray} from './SolutionPerStep'
import { useHistory } from "react-router-dom";
//TODO
//We need to create a textbox for the user to enter the answer, 1 or 2 depending on the step, then a checking function that compares the answer for each step
 
// need to add sound 
//GETTING SOLUTIONS FOR EACH STEP: 
const arrayStepBreakArray=[1,2,3,4,-1,5,-1,6,7,8,-1,-1,9,-1,-1,-1]// calling which step in the solution to call using 'count' as the index
// if arrayStepBreakArray[count]!=-1 then call getBreakArraySolution() otherwise getFullArraySolution() 
var arrayStepFullArray=0; //increment it everytime we call the getFullArraySolution()
//Might need to change the function to await or add a timer(setTimeout()) before re-rendering the page
//Also when arrayStepBreakArray==-1 we need to display only 1 textbox not both


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
const steps=[0,1,2,3,4,3,2,5,2,1,6,7,8,7,6,9,6]


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
    const [levelText,setLevText] = useState('');
    const [incorrectCount, setincorrectCount] = useState(1);
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

    //Change levels code
    const previousLevel = () => {
        document.getElementById("previousLevelButton").style.display = 'Block';
    }

    let history = useHistory()
    const changeLevel = (lvl) => {
        if (lvl == 1)
            history.push('./LevelOne')
        else if (lvl == 2)
            history.push('./LevelTwo')
        else if (lvl == 0)
            history.push('./') // push to home page
        else if (lvl == 3)
            window.location.reload(false);
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
            <Header level = "Level Three"/>
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
                                
                                if (incorrectCount>=3){
                                    setLevText("Sorry out of tries. Please select an option below!");
                                    previousLevel();
                                }
                                 getBreakArraySolution(arrayStepBreakArray[count]).then((data)=>{
                                    
                                     if((data[0].toString()==userArrL)&&(data[1].toString()==userArrR)){
                                        setInsText("Correct");
                                         setCount(count +1);
                                         win.play()
                                     }
                                     else{
                                        setInsText("You are Incorrect. This is your " + incorrectCount + "/3 chance.");
                                        if (incorrectCount < 4)
                                            setincorrectCount(incorrectCount+1);
                                        lose.play()
                                     }
                                     
                         
                                 })
                         
                        
                             }
                             const checkFull = ()   => {
                                var dictF = {
                                    4:1,
                                    6:3,
                                    10:4,
                                    11:5,
                                    13:6,
                                    14:7,
                                    15:8

                                }

                            
                                 getFullArraySolution(dictF[count]).then((data)=>{
                                            
                                        if(userArrL==data){
                                            setInsText("Correct");
                                            setCount(count +1);
                                            win.play()
                                        }
                                        else{
                                            
                                            if (incorrectCount < 4)
                                                setincorrectCount(incorrectCount+1);
                                            setInsText("You are Incorrect. This was your " + incorrectCount + " /3 chance.");
                                            lose.play()
                                        }
                                 })
                             }
                             if (arrayStepBreakArray[count]==-1){
                                 if (incorrectCount != 4)
                                    checkFull();
                         
                             }
                             else{
                                if (incorrectCount != 4)
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
                         <Typography sx={{textAlign:'center'}} color='#a61113' variant='h4'>{instructionText}</Typography>
                         <Typography color='#a61113' variant='h4'>{levelText}</Typography>
                        
                    </Stack>

                    
                    <Stack id = 'previousLevelButton' display = 'None' >
                         <Button  sx={{justifyContent:'flex',mr:2}} variant="contained" onClick={() => {changeLevel(3)}}>
                                Restart Lvl
                        </Button>
                        <Button  sx={{justifyContent:'flex',mr:2}}  variant="contained" onClick={() => {changeLevel(1)}}>
                                Level One
                        </Button>
                        <Button  sx={{justifyContent:'flex',mr:2}} variant="contained" onClick={() => {changeLevel(2)}}>
                                Level Two
                        </Button>
                        <Button  variant="contained" onClick={() => {changeLevel(0)}}>
                                HomePage
                        </Button>
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
