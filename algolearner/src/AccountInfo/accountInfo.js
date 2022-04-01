import Box from '@mui/material/Box';
import {Stack,Item,TextField,Button, Typography} from '@mui/material';
import Header from '../components/Header';
import {useEffect, useState, UseState} from 'react';
import { Link } from "react-router-dom";
import axios from 'axios'


function setPath(level){
    if(level == 1){
        return '/LevelOne';
    }
    else if(level == 2){
        return '/LevelTwo';
    }
    else if(level == 3){
        return '/LevelThree';
    }
    else if(level == 4){
        return '/LevelFour';
    }
    else if(level == 5){
        return '/LevelFive';
    }
}

function AccInfo(){


    const [userLevel, setUserLevel] = useState(0);
    const [info, setInfo] = useState([]);

    useEffect(()=>{
        axios.get("http://35.225.166.73:3001/api/getTime", { withCredentials: true })
        .then(response =>{
            setInfo(response.data);        
        })
        axios.get("http://35.225.166.73:3001/api/getLevel", { withCredentials: true })
        .then(response =>{
            setUserLevel(response.data[0].currentLevel);

        })
    },[]);

    console.log(userLevel);
    console.log(info);
   


    return(
        <>
        <Box
            sx = {{
                height: '60vh',
                width: '100vw',
                backgroundColor: 'white'
            }}>
            <Header level = ""/>

            <Box>Current Level: {userLevel}</Box>
            {info.map((v) =>{
                return(
                    <Box marginTop = {3}>
                        <Link to = {setPath(v.level)}>Level {v.level}:</Link>
                        <Box>
                            Time Spent: {v.timespent} seconds
                        </Box>
                    </Box>
                );
            })}




        </Box>
        </>
    );

}

export default AccInfo;