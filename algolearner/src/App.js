import './App.css';
import styled from "@emotion/styled";
import LevelOne from './Level1/Level1Page';
import Boxes from './components/Boxes/Boxes';
import Header from './components/Header'
import VisNetwork from './tree.js'
import {getStep} from './components/api/index'



function App() {
  var array = [5,4,6,8,9,2,1,3,0,7]
  //Api Query To Backend
  const break_array = [];
  const full_array = [];

  //First parameter is depth, second is the array
  //Puts the breakdown into break_array and full array into full_array
  //Start backend first before running
  getStep(1,array)
    .then((data) => { break_array.push(data.break)
      full_array.push(data.full)  })
    .then(console.log(break_array,full_array))

  

  return (
    <div className='Main'>
  
    
    <LevelOne/>

    </div>
    
  );



}

export default App;