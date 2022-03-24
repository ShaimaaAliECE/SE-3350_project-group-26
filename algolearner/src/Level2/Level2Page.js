import Box from '@mui/material/Box';
import {Stack,Item,TextField,Button, Typography} from '@mui/material';
import Header from '../components/Header';
import {useState, UseState,useEffect} from 'react';
import VisNetwork from './treeLevel2.js'
import Timer from '../components/Timer';
import {dragNum1,dragNum2,setArray} from './solutions'
import { Link, useHistory  } from "react-router-dom";


//Drag Drop Imports
import {DndProvider} from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import DragDrop from '../components/DragDrop/DragDrop'
import {getFullArraySolution,getBreakArraySolution,setArray2} from './SolutionPerStep'




function stringToArr(stringVal){ //This converts a string into an array

    var arr = stringVal.split(',').map(function(item) {
        return parseInt(item, 10);
    });

    return arr;

}
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
const steps=[0,1,2,3,4,3,2,5,2,1,6,7,8,7,6,9,6]
let nodecounter = 0;
function LevelTwo(props){
    //Algorithmn Variables
    const [numberString, setNumString] = useState('');
    const [numArr, setNumArr] = useState([]);
    const [testing11, setTesting] = useState([]);
    const [count, setCount] = useState(0);
    const [fullArr, setFull] = useState([]);
    var numbersDrag
    const nodesStep=[[2,3],[4,5],[6,7],[8,9],[4],[10,11],[2],[12,13],[14,15],[17,16],[14],[12],[18,19],[13],[3],[1],[13],[3],[1]]
    
    //Drag drop variables
    //numbers array contains the current ques selections, order properly based on nodes (ex. el1 of numbers is right answer to el1 node)
    const [numbers,setNumbers]=useState(['5,6,8','4,5']) //we'd need to make a list manually for this 
    //nodes array contains the current nodes the question is for, this will display below the selection box
    const [nodes,setNodes]=useState(nodesStep[count])

    const [doTwo, setDoTwo] = useState(true); //This should be updated for every step whether one question or two questions, cant use true or false doesnt seem to work
    const [correct,setCorrect] = useState(false); //Updated if the answer is correct --> Can use to allow to move to next step
    let counter=1; 
    const NumberList = []
    const [newNumberList,setNewNumberList]=useState([{id:1,number:'5,6,8',node:1},{id:2,number:'4,5',node:1}])
    const numberfix = []
    const [dontShow,setDontShow] = useState(true);
    const [showDnD,setShowDnD] = useState(true);
    const [instruction,setIns] = useState(false);
    const [instructionText,setInsText] = useState('');

    const [incorrectCount,setincorrectCount] = useState(1);
    const [levelText,setLevText] = useState('');

    //sound effect
    let win = new Audio("/win.mp3")
    let lose = new Audio("/lose.mp3")

    const splitSteps = [0,1,2,3,5,7,8,9,12]
    const joinSteps = [4,6,10,11,13,14,15]
    const [displayArr,setDispArr] = useState([[9,8,7],[8,9,7],[8,7,9],[7,8,9]]);
    const [prevNums,setPrevNums] = useState([]);

    //Gets the beginning array
    useEffect(()=>{
        setNumArr(generateArray());
    },[]);

setArray(numArr)
setArray2(numArr)


    const previousLevel = () => {
        document.getElementById("previousLevelButton").style.display = 'Block';
    }

    let history = useHistory()
    const changeLevel = (lvl) => {
        if (lvl == 1)
            history.push('./LevelOne')
        else if (lvl == 0)
            history.push('./') // push to home page
        else if (lvl == 3)
            window.location.reload(false);
    }
    
    const getNums = (direction) => {
        
            setDontShow(true);
            let ranArr = []
            if(direction == 'next') {
                dragNum1().then((data) => {
                    ranArr=data
                    
                }).then(() => {
                    if (ranArr.length > 1) {
                        
                        updateNums(ranArr)
                    } 
                    })
            }
            else {
                
                dragNum2().then((data) => {
                    ranArr=data
                    
                }).then(() => {
                    if (ranArr.length > 1) {
                        
                        updateNums(ranArr)
                    } 
                    })
            }
        
        
        
    }

    const updateNums = (ranArr) => {
        
        if(ranArr[0] == 0 && ranArr[1] == 1){
            
            setShowDnD(false)
        }
        else{
            setShowDnD(true)
        }

        setNumbers(ranArr)
        console.log('RAN ARRAY',ranArr)
        counter=1;
        const ranArr2 = []
        ranArr.forEach((element,i) => {
            
            ranArr2.push({id:counter++,number:element,node:nodesStep[nodecounter][i]});
            //nodes[i]
        })
        setNewNumberList(ranArr2)
        setDontShow(false);
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


    const getNumList = () => {
        
        return newNumberList;
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
                

            })
            .catch((error) => {
                console.error('Error:', error);
        });
    }

    const nextLevel = () => {
        document.getElementById("nextLevel2Button").style.display = 'Block';
    }
    return(
        <>
            <Header level = "Level Two"/>

                        
            {dontShow ? (<><Box display={'block'} justifyContent={'center'} alignItems={'center'} textAlign={'center'}
                    ><Button
                            variant={'outlined'}
                            size={'large'}
                            sx={{p:5,m:5}}
                            onClick = {()=>{
                                getNums('next');
                                
                            }}>
                            Start Level
                        </Button><Typography>In this level, you will have to drag and drop numbers for certain steps. Press 'Check Solution' to check your answers!</Typography></Box></>) : (

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

                        
                        <Button id='777'
                            onClick = {()=>{
                                setIns(false)
                                if(count>0) {
                                setCount(count -1);
                                if(nodecounter > 0) nodecounter-=1
                                setNodes(nodesStep[nodecounter])
                                getNums('prev')
                                if(nodesStep[nodecounter].length==2)
                                {
                                    setDoTwo(true)
                                }
                                else
                                {
                                    setDoTwo(false)
                                }
                            }
                            }}>
                            Prev
                        </Button>

                        <Button
                            id='888'
                            onClick = {()=>{
                                if(count <= 15 && correct!=false && incorrectCount != 4) {
                                    
                                setIns(false)
                                setCount(count+1);
                                
                                nodecounter+=1
                                
                                setNodes(nodesStep[nodecounter])
                                getNums('next')
                                setCorrect(false)
                                if(nodesStep[nodecounter].length==2)
                                {
                                
                                    setDoTwo(5==5)
                                }
                                else
                                {
                                    setDoTwo(5==4)
                                    

                                }
                                let prevnums = numbers;
                                setPrevNums(prevnums);
                            }
                            else if(count <= 15 && correct==false){
                                setInsText('Please get the answer correct to proceed!')
                                setIns(true)
                            }
                            else if (count == 16){
                                setInsText('You have completed this level! Proceed to next level by clicking the button above.')
                                setIns(true)
                                nextLevel();
                            }
                            
                            }}>
                            
                            Next
                        </Button>


                    </Stack>
                    <Stack id = 'nextLevel2Button' display = 'none'>
                        <Link to = {"/LevelThree"}>
                            <Button  variant="contained">
                                Next Level
                            </Button>
                        </Link>
                    </Stack>
                    
                    <Stack id = 'previousLevelButton' display = 'None' >
                        
                         <Button  sx={{justifyContent:'flex',mr:2}} variant="contained" onClick={() => {changeLevel(3)}}>
                                Restart Lvl
                        </Button>
                        <Button  sx={{justifyContent:'flex',mr:2}}  variant="contained" onClick={() => {changeLevel(1)}}>
                                Level One
                        </Button>
                        <Button  variant="contained" onClick={() => {changeLevel(0)}}>
                                HomePage
                        </Button>
                    </Stack>
                    <Stack>
                        <Typography color='#a61113' variant='h6'>{levelText}</Typography>
                    </Stack>


                    <Stack>
                        {instruction ? <Typography variant='h6'>{instructionText}</Typography> : <></> }
                    </Stack>
                    <Stack>
                    <Typography color='#d43378' variant='h5'>{'Step: '+count}</Typography>
                    </Stack>
                    
                </Stack>
                
                {/*Drag Drop Component*/}
                <Box>
                    
                    
                    {showDnD ? (<>
                        <DndProvider backend={HTML5Backend}>
                        <Box sx={{
                            display: 'flex',
                            width: '100%',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <DragDrop key={newNumberList} NumberList={newNumberList} getNumList={getNumList} doTwoz={doTwo} />


                        </Box>
                        </DndProvider>

                        <Box display={'flex'} textAlign={'center'} alignContent='center' justifyContent={'center'}>
                    <Button onClick={() => {
                        if(doTwo == true) {
                            
                            if(document.getElementById('check1')?.getElementsByTagName("h4")[0]?.innerHTML == undefined || document.getElementById('check2')?.getElementsByTagName("h4")[0]?.innerHTML == undefined ) {
                                setInsText('Please Drag Some Answers')
                                setIns(true)
                            }
                            else {
                                const answer1 = document.getElementById('check1')?.getElementsByTagName("h4")[0]?.innerHTML;
                                const answer2 = document.getElementById('check2')?.getElementsByTagName("h4")[0]?.innerHTML;
                                

                                //Checking answers
                                if(answer1 == numbers[0] && answer2 == numbers[1] && incorrectCount<=3) {
                                    setCorrect(true)
                                    setInsText('Correct answers entered. Proceed to next step!')
                                    setIns(true)
                                    win.play()
                                    showBreakdown()
                                    setincorrectCount(1)
                                } 
                                else
                                {
                                    setCorrect(false)
                                    
                                    
                                    setincorrectCount(incorrectCount+1);
                                    let blanktext = ''
                                    if(incorrectCount >= 4)
                                        blanktext = 3
                                    else
                                        blanktext = incorrectCount
                                    setInsText("Wrong answers entered try again. This is your " + blanktext + "/3 chance.")
                                    setIns(true)
                                    lose.play()

                                    if (incorrectCount>3){
                                        setLevText("Sorry out of tries. Please select an option above!");
                                        previousLevel();
                                    }
                                }
                            }
                        }
                        else {
                            if(document.getElementById('check1')?.getElementsByTagName("h4")[0]?.innerHTML == undefined) {
                                setInsText('Please Drag Some Answers')
                                setIns(true)
                            }
                            else {
                                const answer1 = document.getElementById('check1').getElementsByTagName("h4")[0].innerHTML;
                                

                                //Checking answers
                                if(answer1 == numbers[0] && incorrectCount<=3) {
                                    setCorrect(true)
                                    setInsText('Correct answers entered. Proceed to next step!')
                                    setIns(true)
                                    win.play()
                                    showBreakdown()
                                    setincorrectCount(1)
                                } 
                                else
                                {
                                    setCorrect(false)
                                    setincorrectCount(incorrectCount+1);
                                    let blanktext = ''
                                    if(incorrectCount >= 4)
                                        blanktext = 3
                                    else
                                        blanktext = incorrectCount
                                    setInsText("Wrong answers entered try again. This is your " + blanktext + "/3 chance.")
                                    setIns(true)
                                    lose.play()

                                    if (incorrectCount>3){
                                        setLevText("Sorry out of tries. Please select an option above!");
                                        previousLevel();
                                    }
                                }
                                
                            }
                        }
                    }}>Check Solution</Button></Box></>
                    ) : (<></>)}
                    
                    
                    

                </Box>

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

                    <VisNetwork numberArray={numArr} treeForm={steps[count]} count={count}/>{/* We need to make it so after count 19 it the buttons dont work */}

                <Box 
                sx = {{
                    height: '18vh',
                    width: '100vw',
                    backgroundColor: 'white'
                }}>

                </Box>
                {/*<Timer/>*/}

                
                
                

            </Box>)}

        </>

    );

}

export default LevelTwo;



