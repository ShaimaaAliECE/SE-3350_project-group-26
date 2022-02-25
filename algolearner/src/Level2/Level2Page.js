import Box from '@mui/material/Box';
import {Stack,Item,TextField,Button, Typography} from '@mui/material';
import Header from '../components/Header';
import {useState, UseState,useEffect} from 'react';
import VisNetwork from './treeLevel2.js'
import Timer from '../components/Timer';
import {dragNum1,dragNum2,setArray} from './solutions'
import { Link } from "react-router-dom";


//Drag Drop Imports
import {DndProvider} from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import DragDrop from '../components/DragDrop/DragDrop'




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
    const nodesStep=[[2,3],[4,5],[6,7],[10,11],[4],[8,9],[2],[12,13],[14,15],[17,16],[14],[12],[18,19],[13],[3],[1],[13],[3],[1]]
    
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

    //sound effect
    let win = new Audio("/win.mp3")
    let lose = new Audio("/lose.mp3")


    //Gets the beginning array
    useEffect(()=>{
        setNumArr(generateArray());
    },[]);

setArray(numArr)

    
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
        
        counter=1;
        const ranArr2 = []
        ranArr.forEach((element,i) => {
            
            ranArr2.push({id:counter++,number:element,node:nodesStep[nodecounter][i]});
            //nodes[i]
        })
        setNewNumberList(ranArr2)
        setDontShow(false);
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
                                    width: '1vw'

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
                                if(count <= 15 && correct!=false) {
                                    
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
                    <Stack>
                        {instruction ? <Typography variant='h6'>{instructionText}</Typography> : <></> }
                    </Stack>
                    <Stack>
                        Step {count}
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
                                if(answer1 == numbers[0] && answer2 == numbers[1]) {
                                    setCorrect(true)
                                    setInsText('Correct answers entered. Proceed to next step!')
                                    setIns(true)
                                    win.play()
                                } 
                                else
                                {
                                    setCorrect(false)
                                    setInsText('Wrong answers entered try again.')
                                    setIns(true)
                                    lose.play()
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
                                if(answer1 == numbers[0]) {
                                    setCorrect(true)
                                    setInsText('Correct answers entered. Proceed to next step!')
                                    setIns(true)
                                    win.play()
                                } 
                                else
                                {
                                    setCorrect(false)
                                    setInsText('Wrong answers entered try again.')
                                    setIns(true)
                                    lose.play()
                                }
                                
                            }
                        }
                    }}>Check Solution</Button></Box></>
                    ) : (<></>)}
                    
                    
                    

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



