import Box from '@mui/material/Box';
import {Stack,Item,TextField,Button, Typography} from '@mui/material';
import Header from '../components/Header';
import {useState, UseState,useEffect} from 'react';
import VisNetwork from './treeLevel2.js'
import Timer from '../components/Timer';
import {dragNum1,dragNum2,setArray} from './solutions'

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
const steps=[0,1,2,3,4,3,2,5,2,1,6,7,8,7,6,9,6,1,0]

function LevelTwo(props){
    //Algorithmn Variables
    const [numberString, setNumString] = useState('');
    const [numArr, setNumArr] = useState([]);
    const [testing11, setTesting] = useState([]);
    const [count, setCount] = useState(0);
    const [fullArr, setFull] = useState([]);
    var numbersDrag
    const nodesStep=[[2,3],[4,5],[6,7],[8,9],[6],[4],[10,11],[5],[2],[12,13],[14,15],[17,16],[14],[12],[18,19],[13],[3],[1]]

    //Drag drop variables
    //numbers array contains the current ques selections, order properly based on nodes (ex. el1 of numbers is right answer to el1 node)
    const [numbers,setNumbers]=useState(['5,6,8','4,5']) //we'd need to make a list manually for this 
    //nodes array contains the current nodes the question is for, this will display below the selection box
    const [nodes,setNodes]=useState(nodesStep[count])

    const [doTwo, setDoTwo] = useState(5==5); //This should be updated for every step whether one question or two questions, cant use true or false doesnt seem to work
    const [correct,setCorrect] = useState(false); //Updated if the answer is correct --> Can use to allow to move to next step
    let counter=1; 
    const NumberList = []
    //Gets the beginning array
    useEffect(()=>{
        setNumArr(generateArray());
    },[]);
// for the steps we can either create a new stepsLevel2.js with the steps each one and we can either return the correct answers or have a list manually 
// with each answer or 
//var test2= test(numArr)
setArray(numArr)
//ISSUES:
/*
    new numbers dragged in the boxes dont appear, only those that were initialized in line49 do, and whenever i try to make the first page with the right numbers
    either get an infinite loop or memory leak, didNotMount
    2.
*/
const dragNumSteps=[dragNum1().then((data) => {
    console.log(data)
    console.log('LInE 66')
    numbersDrag=data
    //setNumbers(data)//results in an infinite loop
})]
let callingEAchStep=dragNumSteps[0] 
    
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
            <Header level = "Level Two"/>
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
                                console.log(count)
                                setNodes(nodesStep[count-1])
                                if(nodesStep[count].length==2)
                                {
                                    setDoTwo(true)
                                }
                                else
                                {
                                    setDoTwo(false)
                                }
                            }}>
                            Prev
                        </Button>

                        <Button
                            onClick = {()=>{
                               
                                setCount(count +1);
                                setNodes(nodesStep[count+1])
                                setNumbers(numbersDrag)
                                if(nodesStep[count].length==2)
                                {
                                    console.log('Line139')
                                    setDoTwo(5==5)
                                }
                                else
                                {
                                    setDoTwo(5==4)
                                    console.log('Line144',nodesStep[count].length==1 )

                                }
                            //   console.log(count);
                            }}>
                            
                            Next
                        </Button>


                    </Stack>
                    <Stack>
                        {count}
                    </Stack>
                    
                </Stack>
                
                {/*Drag Drop Component*/}
                <Box>
                    
                    {
                        //Generate number list with id, number, node
                        numbers.forEach((element,i) => {
                            NumberList.push({id:counter++,number:element,node:nodes[i]})
                        })
                        
                    }
                    
                    <DndProvider backend={HTML5Backend}>
                        <Box sx={{
                            display: 'flex',
                            width: '100%',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <DragDrop NumberList={NumberList} doTwoz={doTwo} />


                        </Box>
                    </DndProvider>
                    
                    <Box display={'flex'} textAlign={'center'} alignContent='center' justifyContent={'center'}>
                    <Button onClick={() => {
                        if(doTwo == true) {
                            
                            if(document.getElementById('check1')?.getElementsByTagName("h4")[0]?.innerHTML == undefined || document.getElementById('check2')?.getElementsByTagName("h4")[0]?.innerHTML == undefined ) {
                                alert('Please Drag Some Answers')
                            }
                            else {
                                const answer1 = document.getElementById('check1')?.getElementsByTagName("h4")[0]?.innerHTML;
                                const answer2 = document.getElementById('check2')?.getElementsByTagName("h4")[0]?.innerHTML;
                                //console.log(answer1,answer2)

                                //Checking answers
                                if(answer1 == numbers[0] && answer2 == numbers[1]) {
                                    setCorrect(true)
                                    alert('correct answers entered.')
                                } 
                                else
                                {
                                    alert('wrong answers entered try again.')
                                }
                            }
                        }
                        else {
                            if(document.getElementById('check1')?.getElementsByTagName("h4")[0]?.innerHTML == undefined) {
                                alert('Please Drag Some Answers')
                            }
                            else {
                                const answer1 = document.getElementById('check1').getElementsByTagName("h4")[0].innerHTML;
                                //console.log(answer1)

                                //Checking answers
                                if(answer1 == numbers[0]) {
                                    setCorrect(true)
                                    alert('correct answers entered.')
                                } 
                                else
                                {
                                    alert('wrong answers entered try again.')
                                }
                                
                            }
                        }
                    }}>Check Solution</Button></Box>

                </Box>

                    {console.log(count)}
                    <VisNetwork numberArray={numArr} treeForm={steps[count]} count={count}/>{/* We need to make it so after count 19 it the buttons dont work */}

                <Box 
                sx = {{
                    height: '18vh',
                    width: '100vw',
                    backgroundColor: 'white'
                }}>

                </Box>
                {/*<Timer/>*/}

                    {console.log(count)}
                <VisNetwork numberArray={numArr} treeForm={steps[count]} count={count}/>{/* We need to make it so after count 19 it the buttons dont work */}
                
                

            </Box>

        </>

    );

}

export default LevelTwo;



