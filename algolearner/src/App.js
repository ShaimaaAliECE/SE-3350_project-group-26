import './App.css';
import styled from "@emotion/styled";
import LevelOne from './Level1/Level1Page';
import LevelTwo from './Level2/Level2Page';
import Boxes from './components/Boxes/Boxes';
import Header from './components/Header'
import VisNetwork from './Level1/treeLevel1.js'
import {getStep} from './components/api/index'
import { useIdleTimer } from 'react-idle-timer'


import {HashRouter as Router, Switch, Route} from 'react-router-dom';
import AccHeader from './components/accHeader';

import HomePage from './HomePage/home';
import LevelThree from './Level3/Level3Page';
import LevelFour from './Level4/Level4Page';
import LevelFive from './Level5/Level5Page';

import Login from './LoginPage/login';
import AccInfo from './AccountInfo/accountInfo';


import axios from 'axios';
import { useEffect,useState } from 'react';
const URL = '104.197.238.91';



function App() {
  var array = [5,4,6,8,9,2,1,3,0,7]
  //Api Query To Backend
  /*const break_array = [];
  const full_array = [];

  //First parameter is depth, second is the array
  //Puts the breakdown into break_array and full array into full_array
  //Start backend first before running
  getStep(1,array)
    .then((data) => { break_array.push(data.break)
      full_array.push(data.full)  })
      //.then(console.log(break_array,full_array))

  //console.log(break_array)*/




  /**
   * 
   * 
   * 
   * THESE variables and functions are used to check if idle (ALL THESE ARE SENT AS PROPS TO EACH LEVEL)
   * 
   * 
   * 
   * 
   */
  const timeout = 1000*60*5;
  const [remaining, setRemaining] = useState(timeout)
  const [elapsed, setElapsed] = useState(0)
  const [lastActive, setLastActive] = useState(+new Date())
  const [isIdle, setIsIdle] = useState(false)

  const handleOnActive = () => setIsIdle(false)
  const handleOnIdle = () => setIsIdle(true)

  const {
    reset,
    pause,
    resume,
    getRemainingTime,
    getLastActiveTime,
    getElapsedTime
  } = useIdleTimer({
    timeout,
    onActive: handleOnActive,
    onIdle: handleOnIdle
  })

  const handleReset = () => reset()
  const handlePause = () => pause()
  const handleResume = () => resume()
  
  /* Disabled timer running 
  useEffect(() => {
    setRemaining(getRemainingTime())
    setLastActive(getLastActiveTime())
    setElapsed(getElapsedTime())

    setInterval(() => {
      setRemaining(getRemainingTime())
      setLastActive(getLastActiveTime())
      setElapsed(getElapsedTime())
    }, 1000)
  }, [])

  console.log(isIdle);*/


  /** */
  const [userLevel, setUserLevel] = useState(1);
    useEffect(()=>{
        axios.get(`http://${URL}:3001/api/userLevel`, { withCredentials: true })
        .then(response =>{
            setUserLevel(response.data[0].currentLevel);
        })
    },[]);


  return (
    <div className='Main'>

      <Router>
        <Switch>
          <Route exact path="/"><HomePage/></Route>
          <Route path="/LevelOne"><LevelOne idle = {isIdle}/></Route>
          <Route path="/LevelTwo"><LevelTwo idle = {isIdle} userLevel = {userLevel}/></Route>
          <Route path="/LevelThree"><LevelThree idle = {isIdle} userLevel = {userLevel}/></Route>
          <Route path="/LevelFour"><LevelFour idle = {isIdle} userLevel = {userLevel}/></Route>
          <Route path = "/Login"><Login/></Route>
          <Route path="/LevelFive"><LevelFive idle = {isIdle} userLevel = {userLevel}/></Route>
          <Route path ="/AccountInfo"><AccInfo/></Route>

        </Switch>
        
      </Router>

    </div>
    
  );



}

export default App;