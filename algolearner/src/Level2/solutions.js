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
    else if (counter==20) { 
      const break_array = [];
      const full_array = [];
      
        await getStep(counter,array)
      .then((data) => { break_array.push(data.break)
        full_array.push(data.full)})
        .then(()=>{
  
           
          //  console.log('fullarray***',full_array)
          //  console.log('breakarray***',[break_array[0][0].toString(),break_array[0][1].toString()])
              
          }
        )
        
        
        return [full_array[0][1]]
    }
    else if (counter==5) { 
      const break_array = [];
      const full_array = [];
      
        await getStep(counter,array)
      .then((data) => { break_array.push(data.break)
        full_array.push(data.full)})
        .then(()=>{
  
           
          //  console.log('fullarray***',full_array)
          //  console.log('fullbreakarray***',break_array)
          //  console.log('breakarray***',[break_array[0][0].toString(),break_array[0][1].toString()])
          //  console.log('fullarray***',full_array[0][1])
          }
        )
        
        
        return [full_array[0][1].toString(),break_array[0][0].toString()+','+break_array[0][1].toString()]
    }
    else if (counter==6) { 
      const break_array = [];
      const full_array = [];
      
        await getStep(counter,array)
      .then((data) => { break_array.push(data.break)
        full_array.push(data.full)})
        .then(()=>{
  
           
          //  console.log('fullarray***',full_array)
          //  console.log('fullbreakarray***',break_array)
          //  console.log('breakarray***',[break_array[0][0].toString(),break_array[0][1].toString()])
          //  console.log('fullarray***',full_array[0][1])
          }
        )
        
        
        return full_array[0][2]
    }
    else if (counter==7) { 
      const break_array = [];
      const full_array = [];
      
        await getStep(counter,array)
      .then((data) => { break_array.push(data.break)
        full_array.push(data.full)})
        .then(()=>{
  
           
          //  console.log('fullarray***',full_array)
          //  console.log('fullbreakarray***',break_array)
          //  console.log('breakarray***',[break_array[0][0].toString(),break_array[0][1].toString()])
          //  console.log('fullarray***',full_array[0][1])
          }
        )
        
        
        return [full_array[0][3].toString(),break_array[0][0].toString()+','+break_array[0][1].toString()]
    }
    else if (counter==8) { 
      const break_array = [];
      const full_array = [];
      
        await getStep(counter,array)
      .then((data) => { break_array.push(data.break)
        full_array.push(data.full)})
        .then(()=>{
  
           
          //  console.log('fullarray***',full_array)
          //  console.log('fullbreakarray***',break_array)
          //  console.log('breakarray***',[break_array[0][0].toString(),break_array[0][1].toString()])
          //  console.log('fullarray***',full_array[0][1])
          }
        )
        const string1 = break_array[0][0].toString()+', '+break_array[0][1].toString()+', '+break_array[0][2].toString()
        const string2 = break_array[0][3].toString()
        return [string1,string2]
    }
    else if (counter==9) { 
      const break_array = [];
      const full_array = [];
      
        await getStep(counter-1,array)
      .then((data) => { break_array.push(data.break)
        full_array.push(data.full)})
        .then(()=>{
  
           
          //  console.log('fullarray***',full_array)
          //  console.log('fullbreakarray***',break_array)
          //  console.log('breakarray***',[break_array[0][0].toString(),break_array[0][1].toString()])
          //  console.log('fullarray***',full_array[0][1])
          }
        )
        const string1 = break_array[0][0].toString()+', '+break_array[0][1].toString()
        const string2 = break_array[0][2].toString()
        return [string1,string2]
    }
    else if (counter==10) { 
      const break_array = [];
      const full_array = [];
      
        await getStep(counter-2,array)
      .then((data) => { break_array.push(data.break)
        full_array.push(data.full)})
        .then(()=>{
  
           
          //  console.log('fullarray***',full_array)
          //  console.log('fullbreakarray***',break_array)
          //  console.log('breakarray***',[break_array[0][0].toString(),break_array[0][1].toString()])
          //  console.log('fullarray***',full_array[0][1])
          }
        )
        
        return [break_array[0][0].toString(),break_array[0][1].toString()]
    }
    else if (counter==11) { 
      const break_array = [];
      const full_array = [];
      
        await getStep(counter,array)
      .then((data) => { break_array.push(data.break)
        full_array.push(data.full)})
        .then(()=>{
  
           
          //  console.log('fullarray***',full_array)
          //  console.log('fullbreakarray***',break_array)
          //  //console.log('breakarray***',[break_array[0][0].toString(),break_array[0][1].toString()])
          //  console.log('fullarray***',[full_array[0][4].toString()])
          }
        )
        const string = full_array[0][4][0]+', '+full_array[0][4][1]
        const string2 = full_array[0][5].toString();
        return [string,string2]
    }
    else if (counter==12) { 
      const break_array = [];
      const full_array = [];
      
        await getStep(counter,array)
      .then((data) => { break_array.push(data.break)
        full_array.push(data.full)})
        .then(()=>{
  
           
          //  console.log('fullarray***',full_array)
          //  console.log('fullbreakarray***',break_array)
          //  //console.log('breakarray***',[break_array[0][0].toString(),break_array[0][1].toString()])
          //  console.log('fullarray***',[full_array[0][4].toString()])
          }
        )
        const string = full_array[0][5].toString()
        return [string,full_array[0][4].toString()]
    }
    else if (counter==13) { 
      const break_array = [];
      const full_array = [];
      
        await getStep(counter,array)
      .then((data) => { break_array.push(data.break)
        full_array.push(data.full)})
        .then(()=>{
  
           
          //  console.log('fullarray***',full_array)
          //  console.log('fullbreakarray***',break_array)
          //  //console.log('breakarray***',[break_array[0][0].toString(),break_array[0][1].toString()])
          //  console.log('fullarray***',[full_array[0][4].toString()])
          }
        )
        
        return full_array[0][6]
    }
    else if (counter==14) { 
      const break_array = [];
      const full_array = [];
      
        await getStep(counter,array)
      .then((data) => { break_array.push(data.break)
        full_array.push(data.full)})
        .then(()=>{
  
           
          //  console.log('fullarray***',full_array)
          //  console.log('fullbreakarray***',break_array)
          //  //console.log('breakarray***',[break_array[0][0].toString(),break_array[0][1].toString()])
          //  console.log('fullarray***',[full_array[0][4].toString()])
          }
        )
        
        return [full_array[0][6].toString(),full_array[0][3].toString()]
    }
    else if (counter==15) { 
      const break_array = [];
      const full_array = [];
      
        await getStep(counter,array)
      .then((data) => { break_array.push(data.break)
        full_array.push(data.full)})
        .then(()=>{
  
           
          //  console.log('fullarray***',full_array)
          //  console.log('fullbreakarray***',break_array)
          //  //console.log('breakarray***',[break_array[0][0].toString(),break_array[0][1].toString()])
          //  console.log('fullarray***',[full_array[0][4].toString()])
          }
        )
        
        return [full_array[0][7].toString(),full_array[0][5].toString()]
    }
    else if (counter==16) { 
      const break_array = [];
      const full_array = [];
      
        await getStep(counter,array)
      .then((data) => { break_array.push(data.break)
        full_array.push(data.full)})
        .then(()=>{
  
           
          //  console.log('fullarray***',full_array)
          //  console.log('fullbreakarray***',break_array)
          //  //console.log('breakarray***',[break_array[0][0].toString(),break_array[0][1].toString()])
          //  console.log('fullarray***',[full_array[0][4].toString()])
          }
        )
        
        return [full_array[0][8].toString(),full_array[0][7].toString()]
    }
    else{ 
      const break_array = [];
      const full_array = [];
      
        await getStep(counter,array)
      .then((data) => { break_array.push(data.break)
        full_array.push(data.full)})
        .then(()=>{
  
           
          //  console.log('fullarray***',full_array)
          //  console.log('fullbreakarray***',break_array)
           //console.log('breakarray***',[break_array[0][0].toString(),break_array[0][1].toString()])
              
          }
        )
        
        
        return [0,1]
    }
    /*else if (counter == 6) {
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
      }*/
    
}

async function dragNum2()
{
   
   if(counter > 1){
     
         counter = counter -1;
      
   }
   else counter=1

   
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
    else if (counter==20) { 
      const break_array = [];
      const full_array = [];
      
        await getStep(counter,array)
      .then((data) => { break_array.push(data.break)
        full_array.push(data.full)})
        .then(()=>{
  
           
          //  console.log('fullarray***',full_array)
          //  console.log('breakarray***',[break_array[0][0].toString(),break_array[0][1].toString()])
              
          }
        )
        
        
        return [full_array[0][1]]
    }
    else if (counter==5) { 
      const break_array = [];
      const full_array = [];
      
        await getStep(counter,array)
      .then((data) => { break_array.push(data.break)
        full_array.push(data.full)})
        .then(()=>{
  
           
          //  console.log('fullarray***',full_array)
          //  console.log('fullbreakarray***',break_array)
          //  console.log('breakarray***',[break_array[0][0].toString(),break_array[0][1].toString()])
          //  console.log('fullarray***',full_array[0][1])
          }
        )
        
        
        return [full_array[0][1].toString(),break_array[0][0].toString()+','+break_array[0][1].toString()]
    }
    else if (counter==6) { 
      const break_array = [];
      const full_array = [];
      
        await getStep(counter,array)
      .then((data) => { break_array.push(data.break)
        full_array.push(data.full)})
        .then(()=>{
  
           
          //  console.log('fullarray***',full_array)
          //  console.log('fullbreakarray***',break_array)
          //  console.log('breakarray***',[break_array[0][0].toString(),break_array[0][1].toString()])
          //  console.log('fullarray***',full_array[0][1])
          }
        )
        
        
        return full_array[0][2]
    }
    else if (counter==7) { 
      const break_array = [];
      const full_array = [];
      
        await getStep(counter,array)
      .then((data) => { break_array.push(data.break)
        full_array.push(data.full)})
        .then(()=>{
  
           
          //  console.log('fullarray***',full_array)
          //  console.log('fullbreakarray***',break_array)
          //  console.log('breakarray***',[break_array[0][0].toString(),break_array[0][1].toString()])
          //  console.log('fullarray***',full_array[0][1])
          }
        )
        
        
        return [full_array[0][3].toString(),break_array[0][0].toString()+','+break_array[0][1].toString()]
    }
    else if (counter==8) { 
      const break_array = [];
      const full_array = [];
      
        await getStep(counter,array)
      .then((data) => { break_array.push(data.break)
        full_array.push(data.full)})
        .then(()=>{
  
           
          //  console.log('fullarray***',full_array)
          //  console.log('fullbreakarray***',break_array)
          //  console.log('breakarray***',[break_array[0][0].toString(),break_array[0][1].toString()])
          //  console.log('fullarray***',full_array[0][1])
          }
        )
        const string1 = break_array[0][0].toString()+' ,'+break_array[0][1].toString()+' ,'+break_array[0][2].toString()
        const string2 = break_array[0][3].toString()
        return [string1,string2]
    }
    else if (counter==9) { 
      const break_array = [];
      const full_array = [];
      
        await getStep(counter-1,array)
      .then((data) => { break_array.push(data.break)
        full_array.push(data.full)})
        .then(()=>{
  
           
          //  console.log('fullarray***',full_array)
          //  console.log('fullbreakarray***',break_array)
          //  console.log('breakarray***',[break_array[0][0].toString(),break_array[0][1].toString()])
          //  console.log('fullarray***',full_array[0][1])
          }
        )
        const string1 = break_array[0][0].toString()+', '+break_array[0][1].toString()
        const string2 = break_array[0][2].toString()
        return [string1,string2]
    }
    else if (counter==10) { 
      const break_array = [];
      const full_array = [];
      
        await getStep(counter-2,array)
      .then((data) => { break_array.push(data.break)
        full_array.push(data.full)})
        .then(()=>{
  
           
          //  console.log('fullarray***',full_array)
          //  console.log('fullbreakarray***',break_array)
          //  console.log('breakarray***',[break_array[0][0].toString(),break_array[0][1].toString()])
          //  console.log('fullarray***',full_array[0][1])
          }
        )
        
        return [break_array[0][0].toString(),break_array[0][1].toString()]
    }
    else if (counter==11) { 
      const break_array = [];
      const full_array = [];
      
        await getStep(counter,array)
      .then((data) => { break_array.push(data.break)
        full_array.push(data.full)})
        .then(()=>{
  
           
          //  console.log('fullarray***',full_array)
          //  console.log('fullbreakarray***',break_array)
          //  //console.log('breakarray***',[break_array[0][0].toString(),break_array[0][1].toString()])
          //  console.log('fullarray***',[full_array[0][4].toString()])
          }
        )
        const string = full_array[0][4][0]+', '+full_array[0][4][1]
        const string2 = full_array[0][5].toString();
        return [string,string2]
    }
    else if (counter==12) { 
      const break_array = [];
      const full_array = [];
      
        await getStep(counter,array)
      .then((data) => { break_array.push(data.break)
        full_array.push(data.full)})
        .then(()=>{
  
           
          //  console.log('fullarray***',full_array)
          //  console.log('fullbreakarray***',break_array)
          //  //console.log('breakarray***',[break_array[0][0].toString(),break_array[0][1].toString()])
          //  console.log('fullarray***',[full_array[0][4].toString()])
          }
        )
        const string = full_array[0][5].toString()
        return [string,full_array[0][4].toString()]
    }
    else if (counter==13) { 
      const break_array = [];
      const full_array = [];
      
        await getStep(counter,array)
      .then((data) => { break_array.push(data.break)
        full_array.push(data.full)})
        .then(()=>{
  
           
          //  console.log('fullarray***',full_array)
          //  console.log('fullbreakarray***',break_array)
          //  //console.log('breakarray***',[break_array[0][0].toString(),break_array[0][1].toString()])
          //  console.log('fullarray***',[full_array[0][4].toString()])
          }
        )
        
        return full_array[0][6]
    }
    else if (counter==14) { 
      const break_array = [];
      const full_array = [];
      
        await getStep(counter,array)
      .then((data) => { break_array.push(data.break)
        full_array.push(data.full)})
        .then(()=>{
  
           
          //  console.log('fullarray***',full_array)
          //  console.log('fullbreakarray***',break_array)
          //  //console.log('breakarray***',[break_array[0][0].toString(),break_array[0][1].toString()])
          //  console.log('fullarray***',[full_array[0][4].toString()])
          }
        )
        
        return [full_array[0][6].toString(),full_array[0][3].toString()]
    }
    else if (counter==15) { 
      const break_array = [];
      const full_array = [];
      
        await getStep(counter,array)
      .then((data) => { break_array.push(data.break)
        full_array.push(data.full)})
        .then(()=>{
  
           
          //  console.log('fullarray***',full_array)
          //  console.log('fullbreakarray***',break_array)
          //  //console.log('breakarray***',[break_array[0][0].toString(),break_array[0][1].toString()])
          //  console.log('fullarray***',[full_array[0][4].toString()])
          }
        )
        
        return [full_array[0][7].toString(),full_array[0][5].toString()]
    }
    else if (counter==16) { 
      const break_array = [];
      const full_array = [];
      
        await getStep(counter,array)
      .then((data) => { break_array.push(data.break)
        full_array.push(data.full)})
        .then(()=>{
  
           
          //  console.log('fullarray***',full_array)
          //  console.log('fullbreakarray***',break_array)
          //  //console.log('breakarray***',[break_array[0][0].toString(),break_array[0][1].toString()])
          //  console.log('fullarray***',[full_array[0][4].toString()])
          }
        )
        
        return [full_array[0][8].toString(),full_array[0][7].toString()]
    }
    else{ 
      const break_array = [];
      const full_array = [];
      
        await getStep(counter,array)
      .then((data) => { break_array.push(data.break)
        full_array.push(data.full)})
        .then(()=>{
  
           
          //  console.log('fullarray***',full_array)
          //  console.log('fullbreakarray***',break_array)
           //console.log('breakarray***',[break_array[0][0].toString(),break_array[0][1].toString()])
              
          }
        )
        
        
        return [0,1]
    }
}


export {dragNum1,dragNum2,setArray};