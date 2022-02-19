import {getStep} from '../components/api/index'


var array
 function setArray(arr)
 {
    array=arr
 }


function getBreakArraySolution(step)
{
    const full_array = [];
    const break_array = [];
    getStep(step,array)
        .then((data) => { break_array.push(data.break)
          full_array.push(data.full)})
          .then(()=>{

                return [break_array[0][0].toString(),break_array[0][1].toString()]
            }
          )
    
}

function getFullArraySolution(count)
{
    const full_array = [];
    const break_array = [];
    getStep(9,array)
        .then((data) => { break_array.push(data.break)
          full_array.push(data.full)})
          .then(()=>{

                return [full_array[0][count].toString()]
            }
          )
    
}

export {getFullArraySolution,getBreakArraySolution,setArray}