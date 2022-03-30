import Box from '@mui/material/Box';
import {Stack,Item,TextField,Button, Typography} from '@mui/material';
import Header from '../components/Header';
import {useState,useEffect, UseState} from 'react';
import VisNetwork from './treeLevel5.js'
import Timer from '../components/Timer';
import {getFullArraySolution,getBreakArraySolution,setArray} from './SolutionPerStepLevel5'
import { useHistory } from "react-router-dom";




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

    const [displayArr,setDispArr] = useState([[9,8,7],[8,9,7],[8,7,9],[7,8,9]]);
    const [prevNums,setPrevNums] = useState([]);
    const [numbers,setNumbers]=useState([])

    const splitSteps =[
        0,  1,  2,  3,  4,  7,  8,
        9, 12, 16, 17, 18, 19, 22,
       25, 26, 27, 30
     ];
    const joinSteps = [
        6,  8,  9, 12, 13, 14, 18, 19, 20, 21, 26,
       27, 30, 31, 32, 36, 37, 40, 41, 42, 43, 44,
       50, 52, 53, 56, 57, 58, 62, 63, 66, 67, 68,
       69, 74, 75, 76, 80, 81, 84, 85, 86, 87, 88,
       89
     ];

     //Gets the beginning array
     useEffect(()=>{
        setNumArr(generateArray());
    },[]);
    setArray(numArr)

    let win = new Audio("/win.mp3")
    let lose = new Audio("/lose.mp3")

    let nodeNum1Array=[2,4,6,8,4,10,12,14,17,14,12,18,13,3,1]
    let nodeNum2Array=[3,5,7,9,'',11,'',13,15,16,'','',19,'','','']

    const [levelText,setLevText] = useState('');
    const [boxvalL,setBoxLVal] = useState('');
    const [boxvalR,setBoxRVal] = useState('');
    //3 Mistakes States
    const [incorrectCount,setincorrectCount] = useState(1);


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
        else if (lvl == 4)
            history.push('./LevelThree');
        else if (lvl == 5)
            history.push('./LevelFour');
    }

    //Breakdown methods
    // FIX THE showBreakdown METHOD FOR LVL4 
    const showBreakdown = () => {
        //If its a split step show this
        if(splitSteps.includes(count) == true){
            document.getElementById("showSplitSteps").style.display = 'Block';
            addsToDisplay(prevNums)

        }
        else if (joinSteps.includes(count) == true){
            document.getElementById("showJoinSteps").style.display = 'Block';
            console.log("EXPLAINING Count: ",count)
            const arrayStepBreakArray=[1,2,3,4,-1,5,-1,6,7,8,-1,-1,9,-1,-1,-1]// calling which step in the solution to call using 'count' as the index

            var dictF = {//temp
                5:3,
                6:2,

                10:9,
                11:8,

                13:12,
                14:11,
                15:1,

                20:19,
                21:18,

                23:22,
                24:21,

                28:27,
                29:26,

                31:30,
                32:29,
                33:2,

                34:numArr//calls somethin else, cuz need whole array

            }

            var dataIndex = {//temp
                5:0,
                6:0,

                10:0,
                11:0,

                13:0,
                14:0,
                15:0,

                20:0,
                21:0,

                23:0,
                24:1,

                28:0,
                29:1,

                31:1,
                32:1,
                33:1,

                34:0

            }

            if(count!=15)
            {
                getBreakArraySolution(dictF[count]).then((data)=>{
                    console.log(dataIndex[count])
                    let arrayNum=[data[dataIndex[count]]]
                    addsToDisplay(arrayNum)
                })
            }
            else
            {
                addsToDisplay(numArr)

            }
         
            
            
            //addsToDisplay([13,5,4])// we can just call SolutionPerStep to retunr the answer of the break array before it 

        }

    }

    
    const checkArray = (arrays, array) => arrays.some(a => {
        return (a.length > array.length ? a : array).every((_, i) => a[i] === array[i]);
      });

    const addsToDisplay = (arr) => {
        let whole_array = []
        const completedarr = []
        console.log('first array', arr)
        
        let count =0;
        for(let x of arr) {
            if(count == 0){
                let randomarr = x.split(',');
                for(let y of randomarr){
                    whole_array.push(parseInt(y))
                }
                count = 1;
            }
            
        }
        //whole_array = arr
        //for(let y of arr[1]) whole_array.push(y)
        console.log('input array', whole_array)
        for(let i=0; i < whole_array.length; i++) {

            for(let j=i; j < whole_array.length; j++){
                
                if(whole_array[i] > whole_array[j]){
                    let initnum = whole_array[i]
                    whole_array[i] = whole_array[j]
                    whole_array[j] = initnum
                    
                }
               
                let construct = []
                for(let k of whole_array){
                    
                    construct.push(k)
                }
                
                if(checkArray(completedarr,construct) == false){
                    completedarr.push(construct)
                } 
                

            }
        }
        setDispArr(completedarr);
        console.log(completedarr);
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
            <Header level = "Level Five"/>
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
                                    document.getElementById('goToNextBtn').style.display = "None"
                                    previousLevel();
                                }
                            
                                 getBreakArraySolution(arrayStepBreakArray[count]).then((data)=>{
                                    console.log(data);
                                     if((data[0].toString()==userArrL)&&(data[1].toString()==userArrR)){
                                        setInsText("Correct, please review the breakdown below!");
                                        document.getElementById('goToNextBtn').style.display = "Block"
                                         setNumbers(data)
                                         showBreakdown();
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

                                if (incorrectCount>=3){
                                    setLevText("Sorry out of tries. Please select an option below!");
                                    document.getElementById('goToNextBtn').style.display = "None"
                                    previousLevel();
                                }


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
                                            setInsText("Correct, please review the breakdown below!");
                                            document.getElementById('goToNextBtn').style.display = "Block"
                                            setNumbers(data) //Idk if the setnumbers is nessasary check**
                                            showBreakdown();
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
                         <Typography color='#a61113' variant='h4'>{instructionText}</Typography>
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
                        <Button  sx={{justifyContent:'flex',mr:2}} variant="contained" onClick={() => {changeLevel(4)}}>
                                Level Three
                        </Button>
                        <Button  sx={{justifyContent:'flex',mr:2}} variant="contained" onClick={() => {changeLevel(5)}}>
                                Level Four
                        </Button>
                        <Button  variant="contained" onClick={() => {changeLevel(0)}}>
                                HomePage
                        </Button>
                    </Stack>


                    <Box alignItems={'right'}>

                        <Typography paragraph='true' align='left' marginY={5} width={'50vh'}>{des[i]}</Typography>


                    </Box>
                    <Stack direction={'row'}>
                        <TextField color="secondary" id="outlined-basic" value={boxvalL} label={nodeNum1()} variant="outlined" 
                        onChange = {(e) =>{
                            setBoxLVal(e.target.value);
                            setUserL(e.target.value);
                            
                            
                        }}
                        />

                        <TextField color="secondary" id="outlined-basic" value={boxvalR} label={nodeNum2()} variant="outlined" 
                        onChange = {(e) =>{
                            setBoxRVal(e.target.value);
                            setUserR(e.target.value);
                            
                        }}
                        /> 
                    </Stack>
                  
                    
                </Stack>

                
                <Stack id='goToNextBtn' display = 'None'  sx={{ alignContent: 'center',textAlign:'center', justifyContent:'center',m:5 }}>
                        <Button  sx={{justifyContent:'flex',mr:2,alignSelf:'center'}} variant="contained" onClick={() => {
                            
                            
                            //Change to next step
                            setCount(count +1);
                            //Reset incorrect count
                            setincorrectCount(1);
                            //Hide button again
                            document.getElementById('goToNextBtn').style.display = "None"
                            document.getElementById('previousLevelButton').style.display = "None"
                            //Clear the text boxes and hide the breakdown for next step
                            setBoxRVal('');
                            setBoxLVal('');
                            document.getElementById('showSplitSteps').style.display = "None"
                            document.getElementById('showJoinSteps').style.display = "None"
                            setInsText('');
                            }}>
                                Go To Next Step
                        </Button>
                    </Stack>



                <Box id = 'showSplitSteps' display= 'none' sx={{ alignContent: 'center',textAlign:'center', justifyContent:'center' }}>
                    <Typography variant={'h6'}>Key Lesson</Typography>
                    <Typography>
                        <Box sx={{ fontSize: 18 }}>{'In this step, the algorithmn breaks down these number array ' + numbers + ' by half, splitting it into two as seen below. '}</Box>
                        <Box sx={{ fontSize: 25,fontWeight: 'bold' }}>{''+numbers+''}</Box>
                        <Box sx={{ fontSize: 20,fontWeight: 'bold' }}>⬇️</Box>
                        <Box sx={{ fontSize: 25,fontWeight: 'bold' }}>{numbers[0] + '   |   ' + numbers[1]}</Box>
                        <Box sx={{ fontSize: 18 }}>Notice if there are an uneven number of elements, they get moved to the left array.</Box>
                    </Typography>
                </Box>
                
                <Box id = 'showJoinSteps' display= 'none' sx={{ alignContent: 'center',textAlign:'center', justifyContent:'center', mt: 2, mb: 2 }}>
                    <Typography variant={'h6'}>Key Lesson</Typography>
                    <Typography>
                        <Box sx={{ fontSize: 18 }}>{'When joining, the array ' + displayArr[0] +' is checked element by element and sorted. '}</Box>
                        <Box sx={{ fontSize: 18 }}>{'You can see the sequence of comparison the algorithm makes below: '}</Box>
                        <Box sx={{ fontSize: 20,fontWeight: 'bold', mt: 2 }}>{'Starting Sequence'}</Box>
                        {
                            displayArr.map((el,count) => {
                                    if(count != displayArr.length-1){
                                        return <><Box sx={{ fontSize: 25,fontWeight: 'bold' }}>{''+el+''}</Box>
                                    <Box sx={{ fontSize: 18, mb: 2 }}>⬇️ Comparison ⬇️</Box></>
                                    }
                                    else {
                                        return <><Box sx={{ fontSize: 25,fontWeight: 'bold' }}>{''+el+''}</Box>
                                                <Box sx={{ fontSize: 20,fontWeight: 'bold'}}>Final Result Reached</Box>
                                                <Box sx={{ fontSize: 20, mt: 2, mb: 2 }}>{'[' + displayArr[0] + ']  ➡️  [' + displayArr[displayArr.length-1]+']'}</Box>
                                                </>
                                    }
                                    
                                
                            })
                        }
                        <Box sx={{ fontSize: 18 }}>The final result is the sorted array you see in the tree below, but take note the algorithm has to individually check each element.</Box>
                    </Typography>
                    
                </Box>
 



                    {console.log(count)}
                <VisNetwork numberArray={numArr} treeForm={steps[count]} count={count}/>{/* We need to make it so after count 19 it the buttons dont work */}


               
            </Box>
            {/*<Timer/>*/}

        </>

    );

}



export default LevelThree;
