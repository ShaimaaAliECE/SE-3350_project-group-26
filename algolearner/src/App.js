import './App.css';
import styled from "@emotion/styled";
import LevelOne from './Level1/Level1Page';
import LevelTwo from './Level2/Level2Page';
import Boxes from './components/Boxes/Boxes';
import Header from './components/Header'
import VisNetwork from './Level1/treeLevel1.js'
import {getStep} from './components/api/index'

import {Routes, Route} from 'react-router-dom';

import HomePage from './HomePage/home';
import LevelThree from './Level3/Level3Page';




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

      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="LevelOne" element={<LevelOne/>}/>
        <Route path="LevelTwo" element={<LevelTwo/>}/>
        <Route path="LevelThree" element={<LevelThree/>}/>

      </Routes>

    </div>
    
  );



}

export default App;