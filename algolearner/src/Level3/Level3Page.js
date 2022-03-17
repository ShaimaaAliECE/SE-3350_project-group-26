import Box from '@mui/material/Box';
import {Stack,Item,TextField,Button, Typography} from '@mui/material';
import Header from '../components/Header';
import {useState,useEffect, UseState} from 'react';
import VisNetwork from './treeLevel3.js'
import Timer from '../components/Timer';
import {getFullArraySolution,getBreakArraySolution,setArray} from './SolutionPerStep'
import { Link } from "react-router-dom";
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
    const [incorrectCount, setincorrectCount] = useState(0);
    const splitSteps = [0,1,2,3,5,7,8,9,12]
    const joinSteps = [4,6,10,11,13,14,15]
    const [displayArr,setDispArr] = useState([[9,8,7],[8,9,7],[8,7,9],[7,8,9]]);
    const [prevNums,setPrevNums] = useState([]);

    const [numbers,setNumbers]=useState(['5,6,8','4,5'])

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


    const previousLevel = () => {
        document.getElementById("previousLevelButton").style.display = 'Block';
    }


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

            var dictF = {
                4:2,
                6:1,

                10:7,
                11:6,


                13:6,//but data[1]
                14:1,

                15:numArr//calls somethin else, cuz need whole array

            }

            var dataIndex = {
                4:0,
                6:0,

                10:0,
                11:0,


                13:1,//but data[1]
                14:1,

                15:0

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
        //Change this between numbers and prevnumbers and fix for different levels
        //cant use prevnums from dnd, need to query backend to get the actual unsorted parts back
        //implement later

        /*
            4 -- use current, 11 https://prnt.sc/MKMAiTDJi5lc, 13 https://prnt.sc/ZqYTtkcZaId_

        */
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
                                
                                if (incorrectCount>=2){
                                    setLevText("Go to previous levels to practice more");
                                    previousLevel();
                                }
                                 getBreakArraySolution(arrayStepBreakArray[count]).then((data)=>{
                                    
                                     if((data[0].toString()==userArrL)&&(data[1].toString()==userArrR)){
                                        setInsText("Correct");
                                         setCount(count +1);
                                         setNumbers(data)
                                         showBreakdown();
                                         win.play()
                                     }
                                     else{
                                        setInsText("Incorrect");
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
                                            showBreakdown();
                                            win.play()

                                        }
                                        else{
                                            setInsText("Inorrect");
                                            setincorrectCount(incorrectCount+1);
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
                         <Typography color='#a61113' variant='h4'>{levelText}</Typography>
                        
                    </Stack>

                    
                    <Stack id = 'previousLevelButton' display = 'None'>

                        <Link to = {"/LevelOne"}>
                            <Button  variant="contained">
                                Level One
                            </Button>
                        </Link>

                        <Link to = {"/LevelTwo"}>
                            <Button  variant="contained">
                                Level Two
                            </Button>
                        </Link>

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
