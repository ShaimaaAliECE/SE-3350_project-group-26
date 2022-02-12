import {getStep} from '../components/api/index'


var array
 function setArray(arr)
 {
    array=arr
 }

async function dragNum1()
{
    const break_array = [];
    const full_array = [];
 await getStep(1,array)
    .then((data) => { break_array.push(data.break)
      full_array.push(data.full)})
      .then(()=>{

    
           
            console.log([break_array[0][0].toString(),break_array[0][1].toString()])

        }
      )
      return [break_array[0][0].toString(),break_array[0][1].toString()]
}

async function dragNum2()
{
    const break_array = [];
    const full_array = [];
 await getStep(2,array)
    .then((data) => { break_array.push(data.break)
      full_array.push(data.full)})
      .then(()=>{

    
           
            console.log([break_array[0][0].toString(),break_array[0][1].toString()])

        }
      )
      return [break_array[0][0].toString(),break_array[0][1].toString()]
}


export {dragNum1,dragNum2,setArray};