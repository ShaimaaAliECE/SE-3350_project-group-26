import './App.css';
import LevelOne from './Level1/Level1Page';


function App() {
  var array = [5,4,6,8,9,2,1,3,0,7]
  console.log("Step#:",depth)
  
  
  console.log(MergeSort(array))
  
  console.log("Breakdown",breakdown)
  console.log("Sorting",sorting)
  

  return (
    <div>

     

    <LevelOne/>
    main
    </div>
    
  );



}

function arrayPrint(breakdown)
  {
    var line=""
    
    for (var i=0; i < breakdown.length; i++)
     {  
         line+= breakdown[i]+", "
     }
    return line
  }



var count=0
var count2=0
var depth=1
var sorting=[]
var breakdown=[]

function MergeSort(array)
{
  if( depth > 0)
  {
    if(array.length<2 )
    {
      return array
    }
   
  
    var mid=array.length/2
    var left=array.slice(0,mid)
    var right=array.slice(mid,array.length)
  
    depth--
    var leftSorted=MergeSort(left)
    var rightSorted=MergeSort(right)
  
    //console.log(array,"Line23",count++)
    return Merge(leftSorted,rightSorted)
  }
  else
  {
    //  console.log("line29")
    breakdown.push(array)
   // console.log("l29",array)
      return array
  }
  
}


function Merge(leftArray,rightArray)
{

  var num=0, num3=0, num2=0
  var array=[]

  while(num<leftArray.length && num2<rightArray.length)
  {
    if(leftArray[num]<= rightArray[num2])
    {
      array[num3++]=leftArray[num++]
    }
    else
    {
      array[num3++]=rightArray[num2++]
    }
  }

  while(num<leftArray.length)
  {
    array[num3++]=leftArray[num++]
  }
  while(num2<rightArray.length)
  {
    array[num3++]=rightArray[num2++]
  }
  //console.log(array,"Line54",count2++)
  sorting.push(array)

  return array
  
}




export default App;
