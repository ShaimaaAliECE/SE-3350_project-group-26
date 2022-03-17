import './App.css';
import styled from "@emotion/styled";
import LevelOne from './Level1/Level1Page';
import LevelTwo from './Level2/Level2Page';
import Boxes from './components/Boxes/Boxes';
import Header from './components/Header'
import VisNetwork from './Level1/treeLevel1.js'
import {getStep} from './components/api/index'

import {HashRouter as Router, Switch, Route} from 'react-router-dom';

import HomePage from './HomePage/home';
import LevelThree from './Level3/Level3Page';
import LevelFour from './Level4/Level4Page';

import Login from './LoginPage/login';



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

  return (
    <div className='Main'>

      <Router>
        <Switch>
          <Route exact path="/"><HomePage/></Route>
          <Route path="/LevelOne"><LevelOne/></Route>
          <Route path="/LevelTwo"><LevelTwo/></Route>
          <Route path="/LevelThree"><LevelThree/></Route>
          <Route path="/LevelFour"><LevelFour/></Route>
          <Route path = "/Login"><Login/></Route>

        </Switch>
        
      </Router>

    </div>
    
  );



}

export default App;