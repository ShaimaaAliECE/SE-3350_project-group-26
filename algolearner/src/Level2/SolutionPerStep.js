import {getStep} from '../components/api/index'


var array
 function setArray2(arr)
 {
    array=arr
 }


async function getBreakArraySolution(step)
{
    

    const full_array = [];
    const break_array = [];
    await getStep(step,array)
        .then((data) => { break_array.push(data.break)
          full_array.push(data.full)})
          .then(()=>{

            console.log(break_array)

                
            }
          )
          console.log(break_array)
          return [break_array[0][0].toString(),break_array[0][1].toString()]
}

async function getFullArraySolution(count)
{
  


    const full_array = [];
    const break_array = [];
    await getStep(9,array)
        .then((data) => { break_array.push(data.break)
          full_array.push(data.full)})
          .then(()=>{
                
                
            }
          )
          console.log(full_array)

          return [full_array[0][count].toString()]
}

export {getFullArraySolution,getBreakArraySolution,setArray2}