import './App.css';

function App() {
  var array = [ 12, 11, 13, 6, 9, 7 ];

  console.log(MergeSort(array))
  console.log("test")
  return (
    <div>This is the app!</div>
    
  );



}




function MergeSort(array)
{
  if(array.length<2)
  {
    return array
  }

  var mid=array.length/2
  var left=array.slice(0,mid)
  var right=array.slice(mid,array.length)

  var leftSorted=MergeSort(left)
  var rightSorted=MergeSort(right)
  return Merge(leftSorted,rightSorted)
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
  return array
  
}


export default App;
