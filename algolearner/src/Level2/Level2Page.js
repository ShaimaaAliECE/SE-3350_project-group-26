import Box from '@mui/material/Box';
import {Stack,Item,TextField,Button, Typography} from '@mui/material';
import Header from '../components/Header';
import {useState, UseState,useEffect} from 'react';
import VisNetwork from '../tree.js'


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

                    {console.log(count)}
                <VisNetwork treeForm={steps[count]} count={count}/>{/* We need to make it so after count 19 it the buttons dont work */}

                <Box>
                        

                </Box>













               {/* <Stack direction={'row'}
                marginLeft = '2vw'>
                    {numArr.map((v) =>{
                        return(
                            <Box 
                            sx = {{
                                border: '2px solid Black',
                                width: "20px"
                            }}>
                                {v}
                            </Box>
                           
                        );
                    })}
                </Stack>
*/}

                
                {/* What ever is below here is for testing purposes */}
                

            
            
            </Box>

        </>

    );

}

export default LevelTwo;



