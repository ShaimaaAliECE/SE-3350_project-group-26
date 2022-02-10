import Box from '@mui/material/Box';
import {Stack,Item,TextField,Button, Typography} from '@mui/material';
import Header from '../components/Header';
import {useState, UseState,useEffect} from 'react';
import VisNetwork from '../tree.js'
import Timer from '../components/Timer';

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

    //Drag drop variables
    //numbers array contains the current ques selections, order properly based on nodes (ex. el1 of numbers is right answer to el1 node)
    const [numbers,setNumbers]=useState(['5,6,7','2,3,4']) 
    //nodes array contains the current nodes the question is for, this will display below the selection box
    const [nodes,setNodes]=useState([3,9])

    const [doTwo, setDoTwo] = useState(false); //This should be updated for every step whether one question or two questions
    const [correct,setCorrect] = useState(false); //Updated if the answer is correct --> Can use to allow to move to next step
    let counter=1; 
    const NumberList = []
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
                <VisNetwork treeForm={steps[count]} count={count}/>{/* We need to make it so after count 19 it the buttons dont work */}

                <Box 
                sx = {{
                    height: '18vh',
                    width: '100vw',
                    backgroundColor: 'white'
                }}>

                </Box>
                <Timer/>

                    {console.log(count)}
                <VisNetwork treeForm={steps[count]} count={count}/>{/* We need to make it so after count 19 it the buttons dont work */}
                
                

            </Box>

        </>

    );

}

export default LevelTwo;



