import Box from '@mui/material/Box';
import {Stack,Item,TextField,Button, Typography} from '@mui/material';
import Header from '../components/Header';
import {useState, UseState} from 'react';
import VisNetwork from '../tree.js'

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
const steps=[0,1,2,3,4,3,2,5,2,1,6,7,8,7,6,9,6,1,0]

function LevelTwo(props){
    //Algorithmn Variables
    const [numberString, setNumString] = useState('');
    const [numArr, setNumArr] = useState([]);
    const [testing11, setTesting] = useState([]);
    const [count, setCount] = useState(0);
    const [fullArr, setFull] = useState([]);

    //Drag drop variables
    //numbers array contains the current ques selections, order properly based on nodes (ex. el1 of numbers is right answer to el1 node)
    const [numbers,setNumbers]=useState(['5,6,7','2,3,4']) 
    //nodes array contains the current nodes the question is for, this will display below the selection box
    const [nodes,setNodes]=useState([3,9])

    const [doTwo, setDoTwo] = useState(false); //This should be updated for every step whether one question or two questions
    const [correct,setCorrect] = useState(false); //Updated if the answer is correct --> Can use to allow to move to next step
    let counter=1; 
    const NumberList = []

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

                <Stack width = '100vw' alignItems={'center'} justifyItems={'center'}>
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
                </Stack>

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
                </Button>



                <Stack direction={'row'}
                marginLeft = '2vw'>
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
                    }}>Check Solution</Button>

                </Box>

                    {console.log(count)}
                <VisNetwork treeForm={steps[count]} count={count}/>{/* We need to make it so after count 19 it the buttons dont work */}
                
                

            </Box>

        </>

    );

}

export default LevelTwo;



