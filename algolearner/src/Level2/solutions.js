import {getStep} from '../components/api/index'


var array
 function setArray(arr)
 {
    array=arr
 }
 let counter = 0;
async function dragNum1()
{

   counter++
    const break_array = [];
    const full_array = [];
    if(counter <= 4) {
      await getStep(counter,array)
    .then((data) => { break_array.push(data.break)
      full_array.push(data.full)})
      .then(()=>{

    
           
            // console.log('next step from backend',[break_array[0][0].toString(),break_array[0][1].toString()])
            
        }
      )
      
      
      return [break_array[0][0].toString(),break_array[0][1].toString()]
    }
    else if (counter == 6) {
      const break_array = [];
    const full_array = [];
    
      await getStep(counter,array)
    .then((data) => { break_array.push(data.break)
      full_array.push(data.full)})
      .then(()=>{

         
         //   console.log(full_array[0][0])
         //    console.log([break_array[0][0].toString(),break_array[0][1].toString()])
            
        }
      )
      
      
       return [full_array[0][0][0].toString(),full_array[0][0][1].toString()]
      }
      else { 
         
         
         return [0,1]
      }
    
}

async function dragNum2()
{
   
   if(counter > 1){
     
         counter = counter -1;
      
   }
   else counter=1

   
    const break_array = [];
    const full_array = [];
    if(counter <=4) {
      await getStep(counter,array)
    .then((data) => { break_array.push(data.break)
      full_array.push(data.full)})
      .then(()=>{

    
           
            // console.log('prev step from backend',[break_array[0][0].toString(),break_array[0][1].toString()])
        }
      )
      return [break_array[0][0].toString(),break_array[0][1].toString()]


    }
    else if (counter == 6) {
      const break_array = [];
      const full_array = [];
      
        await getStep(counter,array)
      .then((data) => { break_array.push(data.break)
        full_array.push(data.full)})
        .then(()=>{
  
           
            //   console.log('prev step from backend',[break_array[0][0].toString(),break_array[0][1].toString()])
              
          }
        )
  
         return [full_array[0][0][0].toString(),full_array[0][0][1].toString()]
    }
    else {
      return [0,1]
    }
}


export {dragNum1,dragNum2,setArray};