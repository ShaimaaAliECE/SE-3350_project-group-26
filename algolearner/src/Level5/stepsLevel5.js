import {getStep} from '../components/api/index'


var array
 function setArray(arr)
 {
    array=arr
 }
 const full_array = [];
/*
var nodes1 = [
    { id: 1, label: 'Node 1' },
    { id: 2, label: 'Node 2' },
    { id: 3, label: 'Node 3' },
]

var nodes2 = [
    { id: 1, label: 'Node 1' },
    { id: 2, label: 'Node 2' },
    { id: 3, label: 'Node 3' },
    { id: 4, label: 'Node 4' },
    { id: 5, label: 'Node 5' },
]

var nodes3 = [
     { id: 1, label: 'Node 1' },
    { id: 2, label: 'Node 2' },
    { id: 3, label: 'Node 3' },
    { id: 4, label: 'Node 4' },
    { id: 5, label: 'Node 5' },
    { id: 6, label: 'Node 6' },   
    { id: 7, label: 'Node 7' },
]

var nodes4 = [
     { id: 1, label: 'Node 1' },
    { id: 2, label: 'Node 2' },
    { id: 3, label: 'Node 3' },
    { id: 4, label: 'Node 4' },
    { id: 5, label: 'Node 5' },
    { id: 6, label: 'Node 6' },   
    { id: 7, label: 'Node 7' },
    { id: 8, label: 'Node 8' },   
    { id: 9, label: 'Node 9' },
]

var nodes5 = [
     { id: 1, label: 'Node 1' },
    { id: 2, label: 'Node 2' },
    { id: 3, label: 'Node 3' },
    { id: 4, label: 'Node 4' },
    { id: 5, label: 'Node 5' },
    { id: 6, label: 'Node 6' },   
    { id: 7, label: 'Node 7' },
    { id: 8, label: 'Node 8' },   
    { id: 9, label: 'Node 9' },
    { id: 10, label: 'Node 10' },   
    { id: 11, label: 'Node 11' },
]

var nodes6 = [
     { id: 1, label: 'Node 1' },
    { id: 2, label: 'Node 2' },
    { id: 3, label: 'Node 3' },
    { id: 4, label: 'Node 4' },
    { id: 5, label: 'Node 5' },
    { id: 6, label: 'Node 6' },   
    { id: 7, label: 'Node 7' },
    { id: 8, label: 'Node 8' },   
    { id: 9, label: 'Node 9' },
    { id: 10, label: 'Node 10' },   
    { id: 11, label: 'Node 11' },
    { id: 12, label: 'Node 12' },   
    { id: 13, label: 'Node 13' },
]
var nodes7 = [
     { id: 1, label: 'Node 1' },
    { id: 2, label: 'Node 2' },
    { id: 3, label: 'Node 3' },
    { id: 4, label: 'Node 4' },
    { id: 5, label: 'Node 5' },
    { id: 6, label: 'Node 6' },   
    { id: 7, label: 'Node 7' },
    { id: 8, label: 'Node 8' },   
    { id: 9, label: 'Node 9' },
    { id: 10, label: 'Node 10' },   
    { id: 11, label: 'Node 11' },
    { id: 15, label: 'Node 14' },   
    { id: 14, label: 'Node 15' },

]   

var nodes8 = [
     { id: 1, label: 'Node 1' },
    { id: 2, label: 'Node 2' },
    { id: 3, label: 'Node 3' },
    { id: 4, label: 'Node 4' },
    { id: 5, label: 'Node 5' },
    { id: 6, label: 'Node 6' },   
    { id: 7, label: 'Node 7' },
    { id: 8, label: 'Node 8' },   
    { id: 9, label: 'Node 9' },
    { id: 16, label: 'Node 16' },   
    { id: 17, label: 'Node 17' },
]
var nodes9 = [
     { id: 1, label: 'Node 1' },
    { id: 2, label: 'Node 2' },
    { id: 3, label: 'Node 3' },
    { id: 4, label: 'Node 4' },
    { id: 5, label: 'Node 5' },
    { id: 6, label: 'Node 6' },   
    { id: 7, label: 'Node 7' },
    { id: 8, label: 'Node 8' },   
    { id: 9, label: 'Node 9' },
    { id: 16, label: 'Node 16' },   
    { id: 17, label: 'Node 17' },
    { id: 18, label: 'Node 18' },   
    { id: 19, label: 'Node 19' },
]
var nodes10 = [
     { id: 1, label: 'Node 1' },
    { id: 2, label: 'Node 2' },
    { id: 3, label: 'Node 3' },
    { id: 4, label: 'Node 4' },
    { id: 5, label: 'Node 5' },
    { id: 6, label: 'Node 6' },   
    { id: 7, label: 'Node 7' },
    { id: 20, label: 'Node 20' },   
    { id: 21, label: 'Node 21' },
]
var nodes11 = [
     { id: 1, label: 'Node 1' },
    { id: 2, label: 'Node 2' },
    { id: 3, label: 'Node 3' },
    { id: 4, label: 'Node 4' },
    { id: 5, label: 'Node 5' },
    { id: 6, label: 'Node 6' },   
    { id: 7, label: 'Node 7' },
    { id: 20, label: 'Node 20' },   
    { id: 21, label: 'Node 21' },
    { id: 22, label: 'Node 22' },   
    { id: 23, label: 'Node 23' },
]
var nodes12 = [
     { id: 1, label: 'Node 1' },
    { id: 2, label: 'Node 2' },
    { id: 3, label: 'Node 3' },
    { id: 4, label: 'Node 4' },
    { id: 5, label: 'Node 5' },
    { id: 6, label: 'Node 6' },   
    { id: 7, label: 'Node 7' },
    { id: 20, label: 'Node 20' },   
    { id: 21, label: 'Node 21' },
    { id: 22, label: 'Node 22' },   
    { id: 23, label: 'Node 23' },
    { id: 24, label: 'Node 24' },   
    { id: 25, label: 'Node 25' },
]
var nodes13 = [
     { id: 1, label: 'Node 1' },
    { id: 2, label: 'Node 2' },
    { id: 3, label: 'Node 3' },
    { id: 4, label: 'Node 4' },
    { id: 5, label: 'Node 5' },
    { id: 6, label: 'Node 6' },   
    { id: 7, label: 'Node 7' },
    { id: 20, label: 'Node 20' },   
    { id: 21, label: 'Node 21' },
    { id: 22, label: 'Node 22' },   
    { id: 23, label: 'Node 23' },
]
*/

var nodes1=[
    { id: 1, label: 'Node 1' },
    { id: 2, label: 'Node 2' },
    { id: 3, label: 'Node 3' },
    
]



var nodes10=[
    { id: 1, label: 'Node 1' },
    { id: 2, label: 'Node 2' },
    { id: 3, label: 'Node 3' },
    { id: 4, label: 'Node 4' },
    { id: 5, label: 'Node 5' },
    { id: 6, label: 'Node 6' },   
    { id: 7, label: 'Node 7' },
    { id: 8, label: 'Node 8' },   
    { id: 9, label: 'Node 9' },
    { id: 10, label: 'Node 10' },   
    { id: 11, label: 'Node 11' },
]


function step1(count)
{
    const break_array = [];
    const full_array = [];
    let arr = [];
    if(count==0)
    {
        getStep(0,array)
        .then((data) => { break_array.push(data.break)
          full_array.push(data.full)})
          .then(()=>{
              //  console.log(break_array[0])
                nodes1[0]['label']=break_array[0].toString()
            }
          )
    }

    return nodes1
}



var nodes2=[
    { id: 1, label: 'Node 1' },
    { id: 2, label: 'Node 2' },
    { id: 3, label: 'Node 3' },
    { id: 4, label: 'Node 4' },
    { id: 5, label: 'Node 5' },
]



function step2(count)
{
    const break_array = [];
const full_array = [];
    if(count==1)
    {
        getStep(1,array)
        .then((data) => { break_array.push(data.break)
          full_array.push(data.full)})
          .then(()=>{

               // console.log(break_array[0][0])
                //nodes2[0]['label']=break_array[0][0].toString()
                nodes2[0]['label']=nodes1[0]['label']
                nodes2[1]['label']=break_array[0][0].toString()
                nodes2[2]['label']=break_array[0][1].toString()
               // console.log('Done')

            }
          )
    }

    if(count==9)
    {
        getStep(8,array)
        .then((data) => { break_array.push(data.break)
          full_array.push(data.full)})
          .then(()=>{

               console.log('COunt9')
                console.log(full_array)
     
                nodes10[0]['label']=nodes1[0]['label']
                nodes10[1]['label']=nodes2[1]['label']
                nodes10[2]['label']=nodes2[2]['label']
                nodes10[3]['label']=nodes3[3]['label']
                nodes10[4]['label']=nodes3[4]['label']
                nodes10[5]['label']=nodes4[5]['label']
                nodes10[6]['label']=nodes4[6]['label']
               // nodes9[7]['label']=nodes5[7]['label']
               nodes10[8]['label']=nodes5[8]['label']
                nodes10[9]['label']=nodes8[9]['label']
                nodes10[10]['label']=full_array[0][1].toString()



            }
          )
          return nodes10
    }

    return nodes2
}




var nodes3=[
    { id: 1, label: 'Node 1' },
    { id: 2, label: 'Node 2' },
    { id: 3, label: 'Node 3' },
    { id: 4, label: 'Node 4' },
    { id: 5, label: 'Node 5' },
    { id: 6, label: 'Node 6' },
    { id: 7, label: 'Node 7' },
]

var nodes7 = [
    { id: 1, label: 'Node 1' },
    { id: 2, label: 'Node 2' },
    { id: 3, label: 'Node 3' },
    { id: 4, label: 'Node 4' },
    { id: 5, label: 'Node 5' },
    { id: 6, label: 'Node 6' },   
    { id: 7, label: 'Node 7' },
    { id: 8, label: 'Node 8' },   
    { id: 9, label: 'Node 9' },
    { id: 10, label: 'Node 10' },   
    { id: 11, label: 'Node 11' },
    { id: 12, label: 'Node 12' },   
    { id: 13, label: 'Node 13' },
 

]   

var nodes9=[
    { id: 1, label: 'Node 1' },
    { id: 2, label: 'Node 2' },
    { id: 3, label: 'Node 3' },
    { id: 4, label: 'Node 4' },
    { id: 5, label: 'Node 5' },
    { id: 6, label: 'Node 6' },   
    { id: 7, label: 'Node 7' },
    { id: 8, label: 'Node 8' },   
    { id: 9, label: 'Node 9' },
    { id: 10, label: 'Node 10' },   
    { id: 11, label: 'Node 11' },
    { id: 15, label: 'Node 14' },   
    { id: 14, label: 'Node 15' },
]



function step3(count)
{
    const break_array = [];
const full_array = [];
    if(count==2)
    {
        getStep(2,array)
        .then((data) => { break_array.push(data.break)
          full_array.push(data.full)})
          .then(console.log(break_array))
          .then(()=>{

                //console.log(break_array[2][0])
                nodes3[0]['label']=nodes1[0]['label']
                nodes3[1]['label']=nodes2[1]['label']
                nodes3[2]['label']=nodes2[2]['label']
                nodes3[3]['label']=break_array[0][0].toString()
                nodes3[4]['label']=break_array[0][1].toString()

            }
          )
    }

    if(count==6)
    {
        console.log('COUNT6')
        getStep(6,array)
        .then((data) => { break_array.push(data.break)
          full_array.push(data.full)})
          .then(()=>{
                
                console.log(full_array)

                nodes7[0]['label']=nodes1[0]['label']
                nodes7[1]['label']=nodes2[1]['label']
                nodes7[2]['label']=nodes2[2]['label']
                nodes7[3]['label']=nodes3[3]['label']
                nodes7[4]['label']=nodes3[4]['label']
                nodes7[5]['label']=nodes4[5]['label']
                nodes7[6]['label']=nodes4[6]['label']
                nodes7[7]['label']=nodes5[7]['label']
                nodes7[8]['label']=nodes5[8]['label']

                //nodes7[9]['label']=nodes6[9]['label']
                nodes7[10]['label']=nodes6[10]['label']

                nodes7[11]['label']=break_array[0][0].toString()
                nodes7[12]['label']=break_array[0][1].toString()


                
            }   
          )
          return nodes7
    }

    if(count==8)
    {
        console.log('COUNT8')
        getStep(7,array)
        .then((data) => { break_array.push(data.break)
          full_array.push(data.full)})
          .then(()=>{

                console.log(break_array)

                nodes9[0]['label']=nodes1[0]['label']
                nodes9[1]['label']=nodes2[1]['label']
                nodes9[2]['label']=nodes2[2]['label']
                nodes9[3]['label']=nodes3[3]['label']
                nodes9[4]['label']=nodes3[4]['label']
                nodes9[5]['label']=nodes4[5]['label']
                nodes9[6]['label']=nodes4[6]['label']
                nodes9[7]['label']=nodes5[7]['label']
                nodes9[8]['label']=nodes5[8]['label']
                nodes9[9]['label']=nodes8[9]['label']
               // nodes9[10]['label']=nodes6[10]['label']

                nodes9[11]['label']= break_array[0][0].toString()
                nodes9[12]['label']= break_array[0][1].toString()
            }
          )
          return nodes9
    }
    return nodes3
}


var nodes4=[
    { id: 1, label: 'Node 1' },
    { id: 2, label: 'Node 2' },
    { id: 3, label: 'Node 3' },
    { id: 4, label: 'Node 4' },
    { id: 5, label: 'Node 5' },
    { id: 6, label: 'Node 6' },
    { id: 7, label: 'Node 7' },
    { id: 8, label: 'Node 8' },
    { id: 9, label: 'Node 9' },
]

var nodes5 = [
    { id: 1, label: 'Node 1' },
   { id: 2, label: 'Node 2' },
   { id: 3, label: 'Node 3' },
   { id: 4, label: 'Node 4' },
   { id: 5, label: 'Node 5' },
   { id: 6, label: 'Node 6' },   
   { id: 7, label: 'Node 7' },
   { id: 8, label: 'Node 8' },   
   { id: 9, label: 'Node 9' },
   { id: 10, label: 'Node 10' },   
   { id: 11, label: 'Node 11' },
]
/*
var nodes6=[
    { id: 1, label: 'Node 1' },
    { id: 2, label: 'Node 2' },
    { id: 3, label: 'Node 3' },
    { id: 4, label: 'Node 4' },
    { id: 5, label: 'Node 5' },
    { id: 6, label: 'Node 6' },
    { id: 7, label: 'Node 7' },
    { id: 8, label: 'Node 8' },
    { id: 9, label: 'Node 9' },

]*/

var nodes6 = [
    { id: 1, label: 'Node 1' },
   { id: 2, label: 'Node 2' },
   { id: 3, label: 'Node 3' },
   { id: 4, label: 'Node 4' },
   { id: 5, label: 'Node 5' },
   { id: 6, label: 'Node 6' },   
   { id: 7, label: 'Node 7' },
   { id: 8, label: 'Node 8' },   
   { id: 9, label: 'Node 9' },
   { id: 10, label: 'Node 10' },   
   { id: 11, label: 'Node 11' },
   { id: 12, label: 'Node 12' },   
   { id: 13, label: 'Node 13' },
]




function step4(count)
{
    const break_array = [];
    const full_array = [];
    if(count==3)
    {
        getStep(3,array)
        .then((data) => { break_array.push(data.break)
          full_array.push(data.full)})
          .then(()=>{

                console.log(break_array)
                nodes4[0]['label']=nodes1[0]['label']
                nodes4[1]['label']=nodes2[1]['label']
                nodes4[2]['label']=nodes2[2]['label']
                nodes4[3]['label']=nodes3[3]['label']
                nodes4[4]['label']=nodes3[4]['label']
                nodes4[5]['label']=break_array[0][0].toString()
                nodes4[6]['label']=break_array[0][1].toString()
            }
          )
    }

    if(count==5)
    {
        console.log('Count5')
        getStep(5,array)
        .then((data) => { break_array.push(data.break)
          full_array.push(data.full)})
          .then(()=>{
              console.log(break_array)


                nodes6[0]['label']=nodes1[0]['label']
                nodes6[1]['label']=nodes2[1]['label']
                nodes6[2]['label']=nodes2[2]['label']
                nodes6[3]['label']=nodes3[3]['label']
                nodes6[4]['label']=nodes3[4]['label']
                nodes6[5]['label']=nodes4[5]['label']
                nodes6[6]['label']=nodes4[6]['label']
                nodes6[7]['label']=nodes5[7]['label']
                nodes6[8]['label']=nodes5[8]['label']

                nodes6[9]['label']=break_array[0][0].toString()
                nodes6[10]['label']=break_array[0][1].toString()

   
         
                

            }
          )
          return nodes6
    }

    return nodes4
}




function step5(count)
{
    const break_array = [];
    const full_array = [];
    if(count==4)
    {
        console.log('sTEP 5')
        getStep(4,array)
        .then((data) => { break_array.push(data.break)
          full_array.push(data.full)})
          .then(()=>{
            console.log('Gettin5thStep')
            console.log(break_array)
            nodes5[0]['label']=nodes1[0]['label']
            nodes5[1]['label']=nodes2[1]['label']
            nodes5[2]['label']=nodes2[2]['label']
            nodes5[3]['label']=nodes3[3]['label']
            nodes5[4]['label']=nodes3[4]['label']
            nodes5[5]['label']=nodes4[5]['label']
            nodes5[6]['label']=nodes4[6]['label']
            nodes5[7]['label']=break_array[0][0].toString()
            nodes5[8]['label']=break_array[0][1].toString()



            }
          )
    }

    return nodes5
}






















































































var nodes3Ver2=[
    { id: 1, label: 'Node 1' },
    { id: 2, label: 'Node 2' },
    { id: 3, label: 'Node 3' },
    { id: 4, label: 'Node 4' },
    { id: 5, label: 'Node 5' },
  
]


var nodes4Ver2=[
    { id: 1, label: 'Node 1' },
    { id: 2, label: 'Node 2' },
    { id: 3, label: 'Node 3' },
    { id: 4, label: 'Node 4' },
    { id: 5, label: 'Node 5' },
    { id: 6, label: 'Node 6' },
    { id: 7, label: 'Node 7' },
   
]
/*
var nodes5=[
    { id: 1, label: 'Node 1' },
    { id: 2, label: 'Node 2' },
    { id: 3, label: 'Node 3' },
    { id: 4, label: 'Node 4' },
    { id: 5, label: 'Node 5' },
    { id: 6, label: 'Node 6' },
    { id: 7, label: 'Node 7' },
    { id: 8, label: 'Node 8' },
    { id: 9, label: 'Node 9' },
]

var nodes6=[
    { id: 1, label: 'Node 1' },
    { id: 2, label: 'Node 2' },
    { id: 3, label: 'Node 3' },
    { id: 4, label: 'Node 4' },
    { id: 5, label: 'Node 5' },
    { id: 10, label: 'Node 10' },
    { id: 11, label: 'Node 11' },
]


var nodes7=[
    { id: 1, label: 'Node 1' },
    { id: 2, label: 'Node 2' },
    { id: 3, label: 'Node 3' },
    { id: 12, label: 'Node 12' },
    { id: 13, label: 'Node 13' },
]*/
/*
var nodes8=[
    { id: 1, label: 'Node 1' },
    { id: 2, label: 'Node 2' },
    { id: 3, label: 'Node 3' },
    { id: 12, label: 'Node 12' },
    { id: 13, label: 'Node 13' },
    { id: 14, label: 'Node 14' },
    { id: 15, label: 'Node 15' },
]
var nodes9=[
    { id: 1, label: 'Node 1' },
    { id: 2, label: 'Node 2' },
    { id: 3, label: 'Node 3' },
    { id: 12, label: 'Node 12' },
    { id: 13, label: 'Node 13' },
    { id: 14, label: 'Node 14' },
    { id: 15, label: 'Node 15' },
    { id: 16, label: 'Node 16' },
    { id: 17, label: 'Node 17' },
]

var nodes10=[
    { id: 1, label: 'Node 1' },
    { id: 2, label: 'Node 2' },
    { id: 3, label: 'Node 3' },
    { id: 12, label: 'Node 12' },
    { id: 13, label: 'Node 13' },
    { id: 18, label: 'Node 18' },
    { id: 19, label: 'Node 19' }
    
]*/

var allNodes=[
{ id: 1, label: 'Node 1' },
{ id: 2, label: 'Node 2' },
{ id: 3, label: 'Node 3' },
{ id: 4, label: 'Node 4' },
{ id: 5, label: 'Node 5' },
{ id: 6, label: 'Node 6' },
{ id: 7, label: 'Node 7' },
{ id: 8, label: 'Node 8' },
{ id: 9, label: 'Node 9' },
{ id: 10, label: 'Node 10' },
{ id: 11, label: 'Node 11' },
{ id: 12, label: 'Node 12' },
{ id: 13, label: 'Node 13' },
{ id: 14, label: 'Node 14' },
{ id: 15, label: 'Node 15' },
{ id: 16, label: 'Node 16' },
{ id: 17, label: 'Node 17' },
{ id: 18, label: 'Node 18' },
{ id: 19, label: 'Node 19' }

]












var nodes8=[
    { id: 1, label: 'Node 1' },
    { id: 2, label: 'Node 2' },
    { id: 3, label: 'Node 3' },
    { id: 4, label: 'Node 4' },
    { id: 5, label: 'Node 5' },
    { id: 6, label: 'Node 6' },   
    { id: 7, label: 'Node 7' },
    { id: 8, label: 'Node 8' },   
    { id: 9, label: 'Node 9' },
    { id: 10, label: 'Node 10' },   
    { id: 11, label: 'Node 11' },
    { id: 15, label: 'Node 14' },   
    { id: 14, label: 'Node 15' },
]







function step6(count)
{
    const full_array = [];
    const break_array = [];
    
    if(count==7)
    {
        //console.log('COUNT6')
        getStep(7,array)
        .then((data) => { break_array.push(data.break)
          full_array.push(data.full)})
          .then(()=>{
        
                console.log(full_array)
                nodes8[0]['label']=nodes1[0]['label']
                nodes8[1]['label']=nodes2[1]['label']
                nodes8[2]['label']=nodes2[2]['label']
                nodes8[3]['label']=nodes3[3]['label']
                nodes8[4]['label']=nodes3[4]['label']
                nodes8[5]['label']=nodes4[5]['label']
                nodes8[6]['label']=nodes4[6]['label']
                nodes8[7]['label']=nodes5[7]['label']
                nodes8[8]['label']=nodes5[8]['label']

                nodes8[9]['label']=full_array[0][0].toString()
                nodes8[10]['label']=nodes6[10]['label']

             //   nodes7[11]['label']=break_array[0][0].toString()
             //   nodes7[12]['label']=break_array[0][1].toString()


            }
          )
          return nodes8
    }

    return nodes6
}

var nodes11=[
    { id: 1, label: 'Node 1' },
    { id: 2, label: 'Node 2' },
    { id: 3, label: 'Node 3' },
    { id: 4, label: 'Node 4' },
    { id: 5, label: 'Node 5' },
    { id: 6, label: 'Node 6' },   
    { id: 7, label: 'Node 7' },
    { id: 8, label: 'Node 8' },   
    { id: 9, label: 'Node 9' },
    { id: 16, label: 'Node 16' },   
    { id: 17, label: 'Node 17' },
]


var nodes15=[
    { id: 1, label: 'Node 1' },
    { id: 2, label: 'Node 2' },
    { id: 3, label: 'Node 3' },
    { id: 4, label: 'Node 4' },
    { id: 5, label: 'Node 5' },
    { id: 6, label: 'Node 6' },   
    { id: 7, label: 'Node 7' },
    { id: 8, label: 'Node 8' },   
    { id: 9, label: 'Node 9' },
]

var nodes18=[
    { id: 1, label: 'Node 1' },
    { id: 2, label: 'Node 2' },
    { id: 3, label: 'Node 3' },
    { id: 4, label: 'Node 4' },
    { id: 5, label: 'Node 5' },
    { id: 6, label: 'Node 6' },   
    { id: 7, label: 'Node 7' },
    { id: 20, label: 'Node 20' },   
    { id: 21, label: 'Node 21' },
    { id: 22, label: 'Node 22' },   
    { id: 23, label: 'Node 23' },
    { id: 24, label: 'Node 24' },   
    { id: 25, label: 'Node 25' },

]

var nodes19=[
    { id: 1, label: 'Node 1' },
    { id: 2, label: 'Node 2' },
    { id: 3, label: 'Node 3' },
    { id: 4, label: 'Node 4' },
    { id: 5, label: 'Node 5' },
    { id: 6, label: 'Node 6' },   
    { id: 7, label: 'Node 7' },
    { id: 20, label: 'Node 20' },   
    { id: 21, label: 'Node 21' },
    { id: 22, label: 'Node 22' },   
    { id: 23, label: 'Node 23' },
    { id: 24, label: 'Node 24' },   
    { id: 25, label: 'Node 25' },

]

var nodes20=[
    { id: 1, label: 'Node 1' },
    { id: 2, label: 'Node 2' },
    { id: 3, label: 'Node 3' },
    { id: 4, label: 'Node 4' },
    { id: 5, label: 'Node 5' },
    { id: 6, label: 'Node 6' },   
    { id: 7, label: 'Node 7' },
    { id: 20, label: 'Node 20' },   
    { id: 21, label: 'Node 21' },
    { id: 22, label: 'Node 22' },   
    { id: 23, label: 'Node 23' },

    
]

var nodes21=[
    { id: 1, label: 'Node 1' },
    { id: 2, label: 'Node 2' },
    { id: 3, label: 'Node 3' },
    { id: 4, label: 'Node 4' },
    { id: 5, label: 'Node 5' },
    { id: 6, label: 'Node 6' },   
    { id: 7, label: 'Node 7' },
    { id: 20, label: 'Node 20' },   
    { id: 21, label: 'Node 21' },
]

var nodes22=[
    { id: 1, label: 'Node 1' },
    { id: 2, label: 'Node 2' },
    { id: 3, label: 'Node 3' },
    { id: 4, label: 'Node 4' },
    { id: 5, label: 'Node 5' },
    { id: 6, label: 'Node 6' },   
    { id: 7, label: 'Node 7' },

]


var nodes23=[
    { id: 1, label: 'Node 1' },
    { id: 2, label: 'Node 2' },
    { id: 3, label: 'Node 3' },
    { id: 4, label: 'Node 4' },
    { id: 5, label: 'Node 5' },
    { id: 26, label: 'Node 26' },
    { id: 27, label: 'Node 27' },

]


var nodes24=[
    { id: 1, label: 'Node 1' },
    { id: 2, label: 'Node 2' },
    { id: 3, label: 'Node 3' },
    { id: 4, label: 'Node 4' },
    { id: 5, label: 'Node 5' },
    { id: 26, label: 'Node 26' },
    { id: 27, label: 'Node 27' },
    { id: 28, label: 'Node 28' },
    { id: 29, label: 'Node 29' },

]

var nodes25=[
    { id: 1, label: 'Node 1' },
    { id: 2, label: 'Node 2' },
    { id: 3, label: 'Node 3' },
    { id: 4, label: 'Node 4' },
    { id: 5, label: 'Node 5' },
    { id: 26, label: 'Node 26' },
    { id: 27, label: 'Node 27' },
    { id: 28, label: 'Node 28' },
    { id: 29, label: 'Node 29' },
    { id: 30, label: 'Node 30' },
    { id: 31, label: 'Node 31' },
]

var nodes26=[
    { id: 1, label: 'Node 1' },
    { id: 2, label: 'Node 2' },
    { id: 3, label: 'Node 3' },
    { id: 4, label: 'Node 4' },
    { id: 5, label: 'Node 5' },
    { id: 26, label: 'Node 26' },
    { id: 27, label: 'Node 27' },
    { id: 28, label: 'Node 28' },
    { id: 29, label: 'Node 29' },
    { id: 30, label: 'Node 30' },
    { id: 31, label: 'Node 31' },
    { id: 32, label: 'Node 32' },
    { id: 33, label: 'Node 33' },

]

var nodes27=[
    { id: 1, label: 'Node 1' },
    { id: 2, label: 'Node 2' },
    { id: 3, label: 'Node 3' },
    { id: 4, label: 'Node 4' },
    { id: 5, label: 'Node 5' },
    { id: 26, label: 'Node 26' },
    { id: 27, label: 'Node 27' },
    { id: 28, label: 'Node 28' },
    { id: 29, label: 'Node 29' },
    { id: 30, label: 'Node 30' },
    { id: 31, label: 'Node 31' },
    { id: 32, label: 'Node 32' },
    { id: 33, label: 'Node 33' },



]

var nodes28=[
    { id: 1, label: 'Node 1' },
    { id: 2, label: 'Node 2' },
    { id: 3, label: 'Node 3' },
    { id: 4, label: 'Node 4' },
    { id: 5, label: 'Node 5' },
    { id: 26, label: 'Node 26' },
    { id: 27, label: 'Node 27' },
    { id: 28, label: 'Node 28' },
    { id: 29, label: 'Node 29' },
    { id: 30, label: 'Node 30' },
    { id: 31, label: 'Node 31' },


]

var nodes29=[
    { id: 1, label: 'Node 1' },
    { id: 2, label: 'Node 2' },
    { id: 3, label: 'Node 3' },
    { id: 4, label: 'Node 4' },
    { id: 5, label: 'Node 5' },
    { id: 26, label: 'Node 26' },
    { id: 27, label: 'Node 27' },
    { id: 28, label: 'Node 28' },
    { id: 29, label: 'Node 29' },
    { id: 34, label: 'Node 34' },
    { id: 35, label: 'Node 35' },
]

var nodes30=[
    { id: 1, label: 'Node 1' },
    { id: 2, label: 'Node 2' },
    { id: 3, label: 'Node 3' },
    { id: 4, label: 'Node 4' },
    { id: 5, label: 'Node 5' },
    { id: 26, label: 'Node 26' },
    { id: 27, label: 'Node 27' },
    { id: 28, label: 'Node 28' },
    { id: 29, label: 'Node 29' },
    { id: 34, label: 'Node 34' },
    { id: 35, label: 'Node 35' },
    { id: 36, label: 'Node 36' },
    { id: 37, label: 'Node 37' },

]

var nodes31=[
    { id: 1, label: 'Node 1' },
    { id: 2, label: 'Node 2' },
    { id: 3, label: 'Node 3' },
    { id: 4, label: 'Node 4' },
    { id: 5, label: 'Node 5' },
    { id: 26, label: 'Node 26' },
    { id: 27, label: 'Node 27' },
    { id: 28, label: 'Node 28' },
    { id: 29, label: 'Node 29' },
    { id: 34, label: 'Node 34' },
    { id: 35, label: 'Node 35' },
    { id: 36, label: 'Node 36' },
    { id: 37, label: 'Node 37' },

]

var nodes32=[
    { id: 1, label: 'Node 1' },
    { id: 2, label: 'Node 2' },
    { id: 3, label: 'Node 3' },
    { id: 4, label: 'Node 4' },
    { id: 5, label: 'Node 5' },
    { id: 26, label: 'Node 26' },
    { id: 27, label: 'Node 27' },
    { id: 28, label: 'Node 28' },
    { id: 29, label: 'Node 29' },
    { id: 34, label: 'Node 34' },
    { id: 35, label: 'Node 35' },

]

var nodes33=[
    { id: 1, label: 'Node 1' },
    { id: 2, label: 'Node 2' },
    { id: 3, label: 'Node 3' },
    { id: 4, label: 'Node 4' },
    { id: 5, label: 'Node 5' },
    { id: 26, label: 'Node 26' },
    { id: 27, label: 'Node 27' },
    { id: 28, label: 'Node 28' },
    { id: 29, label: 'Node 29' },
]

var nodes34=[
    { id: 1, label: 'Node 1' },
    { id: 2, label: 'Node 2' },
    { id: 3, label: 'Node 3' },
    { id: 4, label: 'Node 4' },
    { id: 5, label: 'Node 5' },
    { id: 26, label: 'Node 26' },
    { id: 27, label: 'Node 27' },
    { id: 38, label: 'Node 38' },
    { id: 39, label: 'Node 39' },


]

var nodes35=[
    { id: 1, label: 'Node 1' },
    { id: 2, label: 'Node 2' },
    { id: 3, label: 'Node 3' },
    { id: 4, label: 'Node 4' },
    { id: 5, label: 'Node 5' },
    { id: 26, label: 'Node 26' },
    { id: 27, label: 'Node 27' },
    { id: 38, label: 'Node 38' },
    { id: 39, label: 'Node 39' },
    { id: 40, label: 'Node 40' },
    { id: 41, label: 'Node 41' },

]

var nodes36=[
    { id: 1, label: 'Node 1' },
    { id: 2, label: 'Node 2' },
    { id: 3, label: 'Node 3' },
    { id: 4, label: 'Node 4' },
    { id: 5, label: 'Node 5' },
    { id: 26, label: 'Node 26' },
    { id: 27, label: 'Node 27' },
    { id: 38, label: 'Node 38' },
    { id: 39, label: 'Node 39' },
    { id: 40, label: 'Node 40' },
    { id: 41, label: 'Node 41' },
    { id: 42, label: 'Node 42' },
    { id: 43, label: 'Node 43' },

]


var nodes37=[
    { id: 1, label: 'Node 1' },
    { id: 2, label: 'Node 2' },
    { id: 3, label: 'Node 3' },
    { id: 4, label: 'Node 4' },
    { id: 5, label: 'Node 5' },
    { id: 26, label: 'Node 26' },
    { id: 27, label: 'Node 27' },
    { id: 38, label: 'Node 38' },
    { id: 39, label: 'Node 39' },
    { id: 40, label: 'Node 40' },
    { id: 41, label: 'Node 41' },
    { id: 42, label: 'Node 42' },
    { id: 43, label: 'Node 43' },

]

function step7(count)
{
    
    const full_array = [];
    const break_array = [];
    
    if(count==10)
    {
        getStep(9,array)
        .then((data) => { break_array.push(data.break)
          full_array.push(data.full)})
          .then(()=>{

               console.log('COunt10')
                console.log(full_array)
     
                nodes11[0]['label']=nodes1[0]['label']
                nodes11[1]['label']=nodes2[1]['label']
                nodes11[2]['label']=nodes2[2]['label']
                nodes11[3]['label']=nodes3[3]['label']
                nodes11[4]['label']=nodes3[4]['label']
                nodes11[5]['label']=nodes4[5]['label']
                nodes11[6]['label']=nodes4[6]['label']
                nodes11[7]['label']=full_array[0][2].toString()
               nodes11[8]['label']=nodes5[8]['label']
          


            }
          )
          return nodes11
    }

    if(count==14)
    {
        getStep(11,array)
        .then((data) => { break_array.push(data.break)
          full_array.push(data.full)})
          .then(()=>{

               console.log('COunt14')
                console.log(full_array)
                
                nodes15[0]['label']=nodes1[0]['label']
                nodes15[1]['label']=nodes2[1]['label']
                nodes15[2]['label']=nodes2[2]['label']
                nodes15[3]['label']=nodes3[3]['label']
                nodes15[4]['label']=nodes3[4]['label']
                //nodes15[5]['label']=nodes4[5]['label']
                nodes15[6]['label']=nodes4[6]['label']
                nodes15[7]['label']=nodes11[7]['label']
                nodes15[8]['label']=full_array[0][4].toString()
               
               
            }
          )
          return nodes15
    }


    if(count==16)
    {
        getStep(10,array)
        .then((data) => { break_array.push(data.break)
          full_array.push(data.full)})
          .then(()=>{

               console.log('HelloTest'+count)
                console.log(break_array)

                nodes17[0]['label']=nodes1[0]['label']
                nodes17[1]['label']=nodes2[1]['label']
                nodes17[2]['label']=nodes2[2]['label']
                nodes17[3]['label']=nodes3[3]['label']
                nodes17[4]['label']=nodes3[4]['label']
                nodes17[5]['label']=nodes16[5]['label']
                nodes17[6]['label']=nodes4[6]['label']
               
                nodes17[7]['label']=break_array[0][0].toString()
                nodes17[8]['label']=break_array[0][1].toString()

               
            }
          )
          return nodes17
    }
    if(count==17)
    {
        getStep(11,array)
        .then((data) => { break_array.push(data.break)
          full_array.push(data.full)})
          .then(()=>{

               console.log('HelloTest'+count)
                console.log(break_array)
                nodes18[0]['label']=nodes1[0]['label']
                nodes18[1]['label']=nodes2[1]['label']
                nodes18[2]['label']=nodes2[2]['label']
                nodes18[3]['label']=nodes3[3]['label']
                nodes18[4]['label']=nodes3[4]['label']
                nodes18[5]['label']=nodes16[5]['label']
                nodes18[6]['label']=nodes4[6]['label']
                nodes18[7]['label']=nodes17[7]['label']
                nodes18[8]['label']=nodes17[8]['label']

               
                nodes18[9]['label']=break_array[0][0].toString()
                nodes18[10]['label']=break_array[0][1].toString()

               
            }
          )
          return nodes18
    }

    if(count==18)
    {
        getStep(12,array)
        .then((data) => { break_array.push(data.break)
          full_array.push(data.full)})
          .then(()=>{

               console.log('HelloTest'+count)
                console.log(break_array)

                nodes19[0]['label']=nodes1[0]['label']
                nodes19[1]['label']=nodes2[1]['label']
                nodes19[2]['label']=nodes2[2]['label']
                nodes19[3]['label']=nodes3[3]['label']
                nodes19[4]['label']=nodes3[4]['label']
                nodes19[5]['label']=nodes16[5]['label']
                nodes19[6]['label']=nodes4[6]['label']
                nodes19[7]['label']=nodes17[7]['label']
                nodes19[8]['label']=nodes17[8]['label']

               // nodes19[9]['label']=nodes18[9]['label']
                nodes19[10]['label']=nodes18[10]['label']
                
                nodes19[11]['label']=break_array[0][0].toString()
                nodes19[12]['label']=break_array[0][1].toString()

               
            }
          )
          return nodes19
    }



    if(count==19)
    {
        getStep(13,array)
        .then((data) => { break_array.push(data.break)
          full_array.push(data.full)})
          .then(()=>{

               console.log('HelloTest'+count)
                console.log(full_array)

                nodes20[0]['label']=nodes1[0]['label']
                nodes20[1]['label']=nodes2[1]['label']
                nodes20[2]['label']=nodes2[2]['label']
                nodes20[3]['label']=nodes3[3]['label']
                nodes20[4]['label']=nodes3[4]['label']
                nodes20[5]['label']=nodes16[5]['label']
                nodes20[6]['label']=nodes4[6]['label']
                //nodes20[7]['label']=nodes17[7]['label']
                nodes20[8]['label']=nodes17[8]['label']

               nodes20[9]['label']=full_array[0][6].toString()
               nodes20[10]['label']=nodes18[10]['label']
                
                

               
            }
          )
          return nodes20
    }

    if(count==20)
    {
        getStep(14,array)
        .then((data) => { break_array.push(data.break)
          full_array.push(data.full)})
          .then(()=>{

               console.log('HelloTest'+count)
                console.log(full_array)

                nodes21[0]['label']=nodes1[0]['label']
                nodes21[1]['label']=nodes2[1]['label']
                nodes21[2]['label']=nodes2[2]['label']
                nodes21[3]['label']=nodes3[3]['label']
                nodes21[4]['label']=nodes3[4]['label']
                nodes21[5]['label']=nodes16[5]['label']
               // nodes21[6]['label']=nodes4[6]['label']
                nodes21[7]['label']=full_array[0][7].toString()
                nodes21[8]['label']=full_array[0][9].toString()

               
               
            }
          )
          return nodes21
    }

    if(count==21)
    {
        getStep(14,array)
        .then((data) => { break_array.push(data.break)
          full_array.push(data.full)})
          .then(()=>{

               console.log('HelloTest'+count)
                console.log(full_array)
    
                nodes22[0]['label']=nodes1[0]['label']
                nodes22[1]['label']=nodes2[1]['label']
                nodes22[2]['label']=nodes2[2]['label']
              //  nodes22[3]['label']=nodes3[3]['label']
                nodes22[4]['label']=nodes3[4]['label']
                nodes22[5]['label']=nodes16[5]['label']
                nodes22[6]['label']=full_array[0][10].toString()
               

               
               
            }
          )
          return nodes22
    }

    if(count==22)
    {
        getStep(14,array)
        .then((data) => { break_array.push(data.break)
          full_array.push(data.full)})
          .then(()=>{

               console.log('HelloTest'+count)
                console.log(full_array)

               
                nodes23[0]['label']=nodes1[0]['label']
                nodes23[1]['label']=nodes2[1]['label']
                nodes23[2]['label']=nodes2[2]['label']
                nodes23[3]['label']=full_array[0][11].toString()
                nodes23[4]['label']=nodes3[4]['label']
               
               
            }
          )
          return nodes23
    }

    if(count==23)
    {
        getStep(15,array)
        .then((data) => { break_array.push(data.break)
          full_array.push(data.full)})
          .then(()=>{

               console.log('HelloTest'+count)
                console.log(break_array)

                nodes24[0]['label']=nodes1[0]['label']
                nodes24[1]['label']=nodes2[1]['label']
                nodes24[2]['label']=nodes2[2]['label']
                nodes24[3]['label']=nodes23[3]['label']
                nodes24[4]['label']=nodes3[4]['label']
               
                  
                nodes24[5]['label']=break_array[0][0].toString()
                nodes24[6]['label']=break_array[0][1].toString()
            }
          )
          return nodes24
    }


    if(count==24)
    {
        getStep(16  ,array)
        .then((data) => { break_array.push(data.break)
          full_array.push(data.full)})
          .then(()=>{

               console.log('HelloTest'+count)
                console.log(break_array)
           
                nodes25[0]['label']=nodes1[0]['label']
                nodes25[1]['label']=nodes2[1]['label']
                nodes25[2]['label']=nodes2[2]['label']
                nodes25[3]['label']=nodes23[3]['label']
                nodes25[4]['label']=nodes3[4]['label']
               
                nodes25[5]['label']=nodes24[5]['label']
                nodes25[6]['label']=nodes24[6]['label']

                nodes25[7]['label']=break_array[0][0].toString()
                nodes25[8]['label']=break_array[0][1].toString()

               
               
               
            }
          )
          return nodes25
    }

    if(count==25)
    {
        getStep(17  ,array)
        .then((data) => { break_array.push(data.break)
          full_array.push(data.full)})
          .then(()=>{

               console.log('HelloTest'+count)
                console.log(break_array)

                nodes26[0]['label']=nodes1[0]['label']
                nodes26[1]['label']=nodes2[1]['label']
                nodes26[2]['label']=nodes2[2]['label']
                nodes26[3]['label']=nodes23[3]['label']
                nodes26[4]['label']=nodes3[4]['label']
               
                nodes26[5]['label']=nodes24[5]['label']
                nodes26[6]['label']=nodes24[6]['label']

                nodes26[7]['label']=nodes25[7]['label']
                nodes26[8]['label']=nodes25[8]['label']

                nodes26[9]['label']=break_array[0][0].toString()
                nodes26[10]['label']=break_array[0][1].toString()
               

               
               
               
            }
          )
          return nodes26
    }

    if(count==26)
    {
        getStep(18  ,array)
        .then((data) => { break_array.push(data.break)
          full_array.push(data.full)})
          .then(()=>{

               console.log('HelloTest'+count)
                console.log(break_array)

                nodes27[0]['label']=nodes1[0]['label']
                nodes27[1]['label']=nodes2[1]['label']
                nodes27[2]['label']=nodes2[2]['label']
                nodes27[3]['label']=nodes23[3]['label']
                nodes27[4]['label']=nodes3[4]['label']
               
                nodes27[5]['label']=nodes24[5]['label']
                nodes27[6]['label']=nodes24[6]['label']

                nodes27[7]['label']=nodes25[7]['label']
                nodes27[8]['label']=nodes25[8]['label']

                //nodes27[9]['label']= nodes26[9]['label']
                nodes27[10]['label']= nodes26[10]['label']

                nodes27[11]['label']=break_array[0][0].toString()
                nodes27[12]['label']=break_array[0][1].toString()
               
               
            }
          )
          return nodes27
    }

    if(count==27)
    {
        getStep(21  ,array)
        .then((data) => { break_array.push(data.break)
          full_array.push(data.full)})
          .then(()=>{

               console.log('HelloTest'+count)
                console.log(full_array)

                nodes28[0]['label']=nodes1[0]['label']
                nodes28[1]['label']=nodes2[1]['label']
                nodes28[2]['label']=nodes2[2]['label']
                nodes28[3]['label']=nodes23[3]['label']
                nodes28[4]['label']=nodes3[4]['label']
               
                nodes28[5]['label']=nodes24[5]['label']
                nodes28[6]['label']=nodes24[6]['label']

                //nodes28[7]['label']=nodes25[7]['label']
                nodes28[8]['label']=nodes25[8]['label']

                nodes28[9]['label']= full_array[0][12].toString()
                nodes28[10]['label']= nodes26[10]['label']

            }
          )
          return nodes28
    }

    if(count==28)
    {
        getStep(22  ,array)
        .then((data) => { break_array.push(data.break)
          full_array.push(data.full)})
          .then(()=>{

               console.log('HelloTest'+count)
                console.log(full_array)
  
                nodes29[0]['label']=nodes1[0]['label']
                nodes29[1]['label']=nodes2[1]['label']
                nodes29[2]['label']=nodes2[2]['label']
                nodes29[3]['label']=nodes23[3]['label']
                nodes29[4]['label']=nodes3[4]['label']
               
                nodes29[5]['label']=nodes24[5]['label']
                nodes29[6]['label']=nodes24[6]['label']

                nodes29[7]['label']=full_array[0][13].toString()
                nodes29[8]['label']=nodes25[8]['label']

            }
          )
          return nodes29
    }

    if(count==29)
    {
        getStep(19  ,array)
        .then((data) => { break_array.push(data.break)
          full_array.push(data.full)})
          .then(()=>{

               console.log('HelloTest'+count)
                console.log(break_array)

                nodes30[0]['label']=nodes1[0]['label']
                nodes30[1]['label']=nodes2[1]['label']
                nodes30[2]['label']=nodes2[2]['label']
                nodes30[3]['label']=nodes23[3]['label']
                nodes30[4]['label']=nodes3[4]['label']
               
                nodes30[5]['label']=nodes24[5]['label']
                nodes30[6]['label']=nodes24[6]['label']

                nodes30[7]['label']=nodes29[7]['label']
                nodes30[8]['label']=nodes25[8]['label']

                nodes30[9]['label']=break_array[0][0].toString()
                nodes30[10]['label']=break_array[0][1].toString()
            }
          )
          return nodes30
    }

    if(count==30)
    {
        getStep(20  ,array)
        .then((data) => { break_array.push(data.break)
          full_array.push(data.full)})
          .then(()=>{

               console.log('HelloTest'+count)
                console.log(break_array)
                nodes31[0]['label']=nodes1[0]['label']
                nodes31[1]['label']=nodes2[1]['label']
                nodes31[2]['label']=nodes2[2]['label']
                nodes31[3]['label']=nodes23[3]['label']
                nodes31[4]['label']=nodes3[4]['label']
               
                nodes31[5]['label']=nodes24[5]['label']
                nodes31[6]['label']=nodes24[6]['label']

                nodes31[7]['label']=nodes29[7]['label']
                nodes31[8]['label']=nodes25[8]['label']

               // nodes31[9]['label']=nodes30[9]['label']
                nodes31[10]['label']=nodes30[10]['label']

                nodes31[11]['label']=break_array[0][0].toString()
                nodes31[12]['label']=break_array[0][1].toString()
                
            }
          )
          return nodes31
    }

    if(count==31)
    {
        getStep(21  ,array)
        .then((data) => { break_array.push(data.break)
          full_array.push(data.full)})
          .then(()=>{

               console.log('HelloTest'+count)
                console.log(full_array)
                nodes32[0]['label']=nodes1[0]['label']
                nodes32[1]['label']=nodes2[1]['label']
                nodes32[2]['label']=nodes2[2]['label']
                nodes32[3]['label']=nodes23[3]['label']
                nodes32[4]['label']=nodes3[4]['label']
               
                nodes32[5]['label']=nodes24[5]['label']
                nodes32[6]['label']=nodes24[6]['label']

                nodes32[7]['label']=nodes29[7]['label']
               // nodes32[8]['label']=nodes25[8]['label']

                nodes32[9]['label']=full_array[0][14].toString()
                nodes32[10]['label']=nodes30[10]['label']

            }
          )
          return nodes32
    }

    if(count==32)
    {
        getStep(22  ,array)
        .then((data) => { break_array.push(data.break)
          full_array.push(data.full)})
          .then(()=>{

               console.log('HelloTest'+count)
                console.log(full_array)
                nodes33[0]['label']=nodes1[0]['label']
                nodes33[1]['label']=nodes2[1]['label']
                nodes33[2]['label']=nodes2[2]['label']
                nodes33[3]['label']=nodes23[3]['label']
                nodes33[4]['label']=nodes3[4]['label']
               
               // nodes32[5]['label']=nodes24[5]['label']
               nodes33[6]['label']=nodes24[6]['label']

               nodes33[7]['label']=nodes29[7]['label']
               nodes33[8]['label']=full_array[0][15].toString()

                
            }
          )
          return nodes33
    }

    if(count==33)
    {
        getStep(23  ,array)
        .then((data) => { break_array.push(data.break)
          full_array.push(data.full)})
          .then(()=>{

               console.log('HelloTest'+count)
                console.log(break_array)
                nodes34[0]['label']=nodes1[0]['label']
                nodes34[1]['label']=nodes2[1]['label']
                nodes34[2]['label']=nodes2[2]['label']
                nodes34[3]['label']=nodes23[3]['label']
                nodes34[4]['label']=nodes3[4]['label']
               
               nodes34[5]['label']=full_array[0][16].toString()
               nodes34[6]['label']=nodes24[6]['label']


                
            }
          )
          return nodes34
    }

    if(count==34)
    {
        getStep(21  ,array)
        .then((data) => { break_array.push(data.break)
          full_array.push(data.full)})
          .then(()=>{

               console.log('HelloTest'+count)
                console.log(break_array)
                nodes35[0]['label']=nodes1[0]['label']
                nodes35[1]['label']=nodes2[1]['label']
                nodes35[2]['label']=nodes2[2]['label']
                nodes35[3]['label']=nodes23[3]['label']
                nodes35[4]['label']=nodes3[4]['label']
                nodes35[5]['label']=nodes34[5]['label']
                nodes35[6]['label']=nodes24[6]['label']
                
                nodes35[7]['label']=break_array[0][0].toString()
                nodes35[8]['label']=break_array[0][1].toString()
               
                
            }
          )
          return nodes35
    }

    
    if(count==35)
    {
        getStep(22  ,array)
        .then((data) => { break_array.push(data.break)
          full_array.push(data.full)})
          .then(()=>{

               console.log('HelloTest'+count)
                console.log(break_array)
                nodes36[0]['label']=nodes1[0]['label']
                nodes36[1]['label']=nodes2[1]['label']
                nodes36[2]['label']=nodes2[2]['label']
                nodes36[3]['label']=nodes23[3]['label']
                nodes36[4]['label']=nodes3[4]['label']
                nodes36[5]['label']=nodes34[5]['label']
                nodes36[6]['label']=nodes24[6]['label']
                nodes36[7]['label']=nodes35[7]['label']

                nodes36[8]['label']=nodes35[8]['label']

                
                nodes36[9]['label']=break_array[0][0].toString()
                nodes36[10]['label']=break_array[0][1].toString()


                
            }
          )
          return nodes36
    }


    if(count==36)
    {
        getStep(23  ,array)
        .then((data) => { break_array.push(data.break)
          full_array.push(data.full)})
          .then(()=>{

               console.log('HelloTest'+count)
                console.log(break_array)
                nodes37[0]['label']=nodes1[0]['label']
                nodes37[1]['label']=nodes2[1]['label']
                nodes37[2]['label']=nodes2[2]['label']
                nodes37[3]['label']=nodes23[3]['label']
                nodes37[4]['label']=nodes3[4]['label']
                nodes37[5]['label']=nodes34[5]['label']
                nodes37[6]['label']=nodes24[6]['label']
                nodes37[7]['label']=nodes35[7]['label']

                nodes37[8]['label']=nodes35[8]['label']
                //nodes37[9]['label']=nodes36[9]['label']
                nodes37[10]['label']=nodes36[10]['label']

                
                nodes37[11]['label']=break_array[0][0].toString()
                nodes37[12]['label']=break_array[0][1].toString()


                
            }
          )
          return nodes37
    }

    if(count==37)
    {
        getStep(23  ,array)
        .then((data) => { break_array.push(data.break)
          full_array.push(data.full)})
          .then(()=>{

               console.log('HelloTest'+count)
                console.log(break_array)
                nodes38[0]['label']=nodes1[0]['label']
                nodes38[1]['label']=nodes2[1]['label']
                nodes38[2]['label']=nodes2[2]['label']
                nodes38[3]['label']=nodes23[3]['label']
                nodes38[4]['label']=nodes3[4]['label']
                nodes38[5]['label']=nodes34[5]['label']
                nodes38[6]['label']=nodes24[6]['label']
               // nodes38[7]['label']=nodes35[7]['label']
                nodes38[8]['label']=nodes35[8]['label']
                nodes38[9]['label']=full_array[0][17].toString()
                nodes38[10]['label']=nodes36[10]['label']
                
            }
          )
          return nodes38
    }


    if(count==38)
    {
        getStep(24  ,array)
        .then((data) => { break_array.push(data.break)
          full_array.push(data.full)})
          .then(()=>{

               console.log('HelloTest'+count)
                console.log(break_array)
                nodes39[0]['label']=nodes1[0]['label']
                nodes39[1]['label']=nodes2[1]['label']
                nodes39[2]['label']=nodes2[2]['label']
                nodes39[3]['label']=nodes23[3]['label']
                nodes39[4]['label']=nodes3[4]['label']
                nodes39[5]['label']=nodes34[5]['label']
                nodes39[6]['label']=nodes24[6]['label']

                nodes39[7]['label']=full_array[0][18].toString()
                nodes39[8]['label']=nodes35[8]['label']

                
            }
          )
          return nodes39
    }


    if(count==39)
    {
        getStep(24  ,array)
        .then((data) => { break_array.push(data.break)
          full_array.push(data.full)})
          .then(()=>{

               console.log('HelloTest'+count)
                console.log(break_array)
                nodes40[0]['label']=nodes1[0]['label']
                nodes40[1]['label']=nodes2[1]['label']
                nodes40[2]['label']=nodes2[2]['label']
                nodes40[3]['label']=nodes23[3]['label']
                nodes40[4]['label']=nodes3[4]['label']
                nodes40[5]['label']=nodes34[5]['label']
                nodes40[6]['label']=nodes24[6]['label']

                nodes40[7]['label']=nodes39[7]['label']
                nodes40[8]['label']=nodes35[8]['label']

                nodes40[9]['label']=break_array[0][0].toString()
                nodes40[10]['label']=break_array[0][1].toString()



                
            }
          )
          return nodes40
    }

    if(count==40)
    {
        getStep(25  ,array)
        .then((data) => { break_array.push(data.break)
          full_array.push(data.full)})
          .then(()=>{

               console.log('HelloTest'+count)
                console.log(break_array)
                nodes41[0]['label']=nodes1[0]['label']
                nodes41[1]['label']=nodes2[1]['label']
                nodes41[2]['label']=nodes2[2]['label']
                nodes41[3]['label']=nodes23[3]['label']
                nodes41[4]['label']=nodes3[4]['label']
                nodes41[5]['label']=nodes34[5]['label']
                nodes41[6]['label']=nodes24[6]['label']

                nodes41[7]['label']=nodes39[7]['label']
                nodes41[8]['label']=nodes35[8]['label']
                //nodes41[9]['label']= nodes40[9]['label']
                nodes41[10]['label']= nodes40[10]['label']


                nodes41[11]['label']=break_array[0][0].toString()
                nodes41[12]['label']=break_array[0][1].toString()



                
            }
          )
          return nodes41
    }

    if(count==41)
    {
        getStep(26  ,array)
        .then((data) => { break_array.push(data.break)
          full_array.push(data.full)})
          .then(()=>{

               console.log('HelloTest'+count)
                console.log(break_array)
                nodes42[0]['label']=nodes1[0]['label']
                nodes42[1]['label']=nodes2[1]['label']
                nodes42[2]['label']=nodes2[2]['label']
                nodes42[3]['label']=nodes23[3]['label']
                nodes42[4]['label']=nodes3[4]['label']
                nodes42[5]['label']=nodes34[5]['label']
                nodes42[6]['label']=nodes24[6]['label']

                nodes42[7]['label']=nodes39[7]['label']
                //nodes41[8]['label']=nodes35[8]['label']

                nodes42[9]['label']= full_array[0][19].toString()
                nodes42[10]['label']= nodes40[10]['label']


                
            }
          )
          return nodes42
    }

    if(count==42)
    {
        getStep(26  ,array)
        .then((data) => { break_array.push(data.break)
          full_array.push(data.full)})
          .then(()=>{

               console.log('HelloTest'+count)
                console.log(full_array)
                nodes43[0]['label']=nodes1[0]['label']
                nodes43[1]['label']=nodes2[1]['label']
                nodes43[2]['label']=nodes2[2]['label']
                nodes43[3]['label']=nodes23[3]['label']
                nodes43[4]['label']=nodes3[4]['label']
                nodes43[5]['label']=nodes34[5]['label']
                //nodes42[6]['label']=nodes24[6]['label']

                nodes43[7]['label']=nodes39[7]['label']
                nodes43[8]['label']= full_array[0][20].toString()




                
            }
          )
          return nodes43
    }


    if(count==43)
    {
        getStep(26  ,array)
        .then((data) => { break_array.push(data.break)
          full_array.push(data.full)})
          .then(()=>{

               console.log('HelloTest'+count)
                console.log(full_array)
                nodes44[0]['label']=nodes1[0]['label']
                nodes44[1]['label']=nodes2[1]['label']
                nodes44[2]['label']=nodes2[2]['label']
                nodes44[3]['label']=nodes23[3]['label']
                //nodes44[4]['label']=nodes3[4]['label']
                nodes44[5]['label']=nodes34[5]['label']
                nodes44[6]['label']=full_array[0][21].toString()
                
            }
          )
          return nodes44
    }


    if(count==44)
    {
        getStep(26  ,array)
        .then((data) => { break_array.push(data.break)
          full_array.push(data.full)})
          .then(()=>{

               console.log('HelloTest'+count)
                console.log(full_array)
                nodes45[0]['label']=nodes1[0]['label']
               // nodes45[1]['label']=nodes2[1]['label']
                nodes44[2]['label']=nodes2[2]['label']
               nodes45[3]['label']=nodes23[3]['label']
               nodes45[4]['label']=full_array[0][22].toString()
               
            }
          )
          return nodes45
    }

    if(count==45)
    {
        getStep(26  ,array)
        .then((data) => { break_array.push(data.break)
          full_array.push(data.full)})
          .then(()=>{

               console.log('HelloTest'+count)
                console.log(full_array)
                nodes46[0]['label']=nodes1[0]['label']
                nodes46[1]['label']=full_array[0][23].toString()
                nodes46[2]['label']=nodes2[2]['label']
    
               
            }
          )
          return nodes46
    }

    if(count==46)
    {
        getStep(26  ,array)
        .then((data) => { break_array.push(data.break)
          full_array.push(data.full)})
          .then(()=>{

               console.log('HelloTest'+count)
                console.log(break_array)
                nodes47[0]['label']=nodes1[0]['label']
                nodes47[1]['label']=nodes46[1]['label']
                nodes47[2]['label']=nodes2[2]['label']

                nodes47[3]['label']=break_array[0][0].toString()
                nodes47[4]['label']=break_array[0][1].toString()
               
            }
          )
          return nodes47
    }

    if(count==47)
    {
        getStep(27  ,array)
        .then((data) => { break_array.push(data.break)
          full_array.push(data.full)})
          .then(()=>{

               console.log('HelloTest'+count)
                console.log(break_array)
                nodes47[0]['label']=nodes1[0]['label']
                nodes47[1]['label']=nodes46[1]['label']
                nodes47[2]['label']=nodes2[2]['label']

                nodes47[3]['label']=break_array[0][0].toString()
                nodes47[4]['label']=break_array[0][1].toString()
               
            }
          )
          return nodes47
    }

    return nodes7
}
var nodes47=[
    { id: 1, label: 'Node 1' },
    { id: 2, label: 'Node 2' },
    { id: 3, label: 'Node 3' },
    { id: 48, label: 'Node 48' },
    { id: 49, label: 'Node 49' },
    { id: 50, label: 'Node 50' },
    { id: 51, label: 'Node 51' },
]

var nodes46=[
    { id: 1, label: 'Node 1' },
    { id: 2, label: 'Node 2' },
    { id: 3, label: 'Node 3' },
    { id: 48, label: 'Node 48' },
    { id: 49, label: 'Node 49' },

]

var nodes45=[
    { id: 1, label: 'Node 1' },
    { id: 2, label: 'Node 2' },
    { id: 3, label: 'Node 3' },
    { id: 4, label: 'Node 4' },
    { id: 5, label: 'Node 5' },
    

]

var nodes44=[
    { id: 1, label: 'Node 1' },
    { id: 2, label: 'Node 2' },
    { id: 3, label: 'Node 3' },
    { id: 4, label: 'Node 4' },
    { id: 5, label: 'Node 5' },
    { id: 26, label: 'Node 26' },
    { id: 27, label: 'Node 27' },

]

var nodes43=[
    { id: 1, label: 'Node 1' },
    { id: 2, label: 'Node 2' },
    { id: 3, label: 'Node 3' },
    { id: 4, label: 'Node 4' },
    { id: 5, label: 'Node 5' },
    { id: 26, label: 'Node 26' },
    { id: 27, label: 'Node 27' },
    { id: 38, label: 'Node 38' },
    { id: 39, label: 'Node 39' },
]

var nodes42=[
    { id: 1, label: 'Node 1' },
    { id: 2, label: 'Node 2' },
    { id: 3, label: 'Node 3' },
    { id: 4, label: 'Node 4' },
    { id: 5, label: 'Node 5' },
    { id: 26, label: 'Node 26' },
    { id: 27, label: 'Node 27' },
    { id: 38, label: 'Node 38' },
    { id: 39, label: 'Node 39' },
    { id: 44, label: 'Node 44' },
    { id: 45, label: 'Node 45' },


]

var nodes41=[
    { id: 1, label: 'Node 1' },
    { id: 2, label: 'Node 2' },
    { id: 3, label: 'Node 3' },
    { id: 4, label: 'Node 4' },
    { id: 5, label: 'Node 5' },
    { id: 26, label: 'Node 26' },
    { id: 27, label: 'Node 27' },
    { id: 38, label: 'Node 38' },
    { id: 39, label: 'Node 39' },
    { id: 44, label: 'Node 44' },
    { id: 45, label: 'Node 45' },
    { id: 46, label: 'Node 46' },
    { id: 47, label: 'Node 47' },

]

var nodes40=[
    { id: 1, label: 'Node 1' },
    { id: 2, label: 'Node 2' },
    { id: 3, label: 'Node 3' },
    { id: 4, label: 'Node 4' },
    { id: 5, label: 'Node 5' },
    { id: 26, label: 'Node 26' },
    { id: 27, label: 'Node 27' },
    { id: 38, label: 'Node 38' },
    { id: 39, label: 'Node 39' },
    { id: 44, label: 'Node 44' },
    { id: 45, label: 'Node 45' },
    { id: 46, label: 'Node 46' },
    { id: 47, label: 'Node 47' },

]
var nodes39=[
    { id: 1, label: 'Node 1' },
    { id: 2, label: 'Node 2' },
    { id: 3, label: 'Node 3' },
    { id: 4, label: 'Node 4' },
    { id: 5, label: 'Node 5' },
    { id: 26, label: 'Node 26' },
    { id: 27, label: 'Node 27' },
    { id: 38, label: 'Node 38' },
    { id: 39, label: 'Node 39' },
    { id: 44, label: 'Node 44' },
    { id: 45, label: 'Node 45' },

]

var nodes38=[
    { id: 1, label: 'Node 1' },
    { id: 2, label: 'Node 2' },
    { id: 3, label: 'Node 3' },
    { id: 4, label: 'Node 4' },
    { id: 5, label: 'Node 5' },
    { id: 26, label: 'Node 26' },
    { id: 27, label: 'Node 27' },
    { id: 38, label: 'Node 38' },
    { id: 39, label: 'Node 39' },
    { id: 40, label: 'Node 40' },
    { id: 41, label: 'Node 41' },

]




var nodes12=[
    { id: 1, label: 'Node 1' },
    { id: 2, label: 'Node 2' },
    { id: 3, label: 'Node 3' },
    { id: 4, label: 'Node 4' },
    { id: 5, label: 'Node 5' },
    { id: 6, label: 'Node 6' },   
    { id: 7, label: 'Node 7' },
    { id: 8, label: 'Node 8' },   
    { id: 9, label: 'Node 9' },
    { id: 16, label: 'Node 16' },   
    { id: 17, label: 'Node 17' },
    { id: 18, label: 'Node 18' },   
    { id: 19, label: 'Node 19' },
]

var nodes14=[
    { id: 1, label: 'Node 1' },
    { id: 2, label: 'Node 2' },
    { id: 3, label: 'Node 3' },
    { id: 4, label: 'Node 4' },
    { id: 5, label: 'Node 5' },
    { id: 6, label: 'Node 6' },   
    { id: 7, label: 'Node 7' },
    { id: 8, label: 'Node 8' },   
    { id: 9, label: 'Node 9' },
    { id: 16, label: 'Node 16' },   
    { id: 17, label: 'Node 17' },
]


var nodes17=[
    { id: 1, label: 'Node 1' },
    { id: 2, label: 'Node 2' },
    { id: 3, label: 'Node 3' },
    { id: 4, label: 'Node 4' },
    { id: 5, label: 'Node 5' },
    { id: 6, label: 'Node 6' },   
    { id: 7, label: 'Node 7' },
    { id: 20, label: 'Node 20' },   
    { id: 21, label: 'Node 21' },
    { id: 22, label: 'Node 22' },   
    { id: 23, label: 'Node 23' },

]

function step8(count)
{
    const full_array = [];
    const break_array = [];
    
    if(count==11)
    {
        getStep(8,array)
        .then((data) => { break_array.push(data.break)
          full_array.push(data.full)})
          .then(()=>{

               console.log('COunt11')
               console.log(break_array)
                
                nodes12[0]['label']=nodes1[0]['label']
                nodes12[1]['label']=nodes2[1]['label']
                nodes12[2]['label']=nodes2[2]['label']
                nodes12[3]['label']=nodes3[3]['label']
                nodes12[4]['label']=nodes3[4]['label']
                nodes12[5]['label']=nodes4[5]['label']
                nodes12[6]['label']=nodes4[6]['label']
                nodes12[7]['label']=nodes11[7]['label']
                nodes12[8]['label']=nodes5[8]['label']

                
                nodes12[9]['label']=break_array[0][0].toString()
                nodes12[10]['label']= break_array[0][1].toString()
               
            }
          )
          return nodes12
    }

    return nodes8
}


var nodes13=[
    { id: 1, label: 'Node 1' },
    { id: 2, label: 'Node 2' },
    { id: 3, label: 'Node 3' },
    { id: 4, label: 'Node 4' },
    { id: 5, label: 'Node 5' },
    { id: 6, label: 'Node 6' },   
    { id: 7, label: 'Node 7' },
    { id: 8, label: 'Node 8' },   
    { id: 9, label: 'Node 9' },
    { id: 16, label: 'Node 16' },   
    { id: 17, label: 'Node 17' },
    { id: 18, label: 'Node 18' },   
    { id: 19, label: 'Node 19' },
]

var nodes16=[
    { id: 1, label: 'Node 1' },
    { id: 2, label: 'Node 2' },
    { id: 3, label: 'Node 3' },
    { id: 4, label: 'Node 4' },
    { id: 5, label: 'Node 5' },
    { id: 6, label: 'Node 6' },   
    { id: 7, label: 'Node 7' },
    { id: 20, label: 'Node 20' },   
    { id: 21, label: 'Node 21' },
    
]


function step9(count)
{

    const full_array = [];
    const break_array = [];
    
    if(count==12)
    {
        getStep(9,array)
        .then((data) => { break_array.push(data.break)
          full_array.push(data.full)})
          .then(()=>{
              console.log(break_array)

               console.log('COunt12')
               nodes13[0]['label']=nodes1[0]['label']
               nodes13[1]['label']=nodes2[1]['label']
               nodes13[2]['label']=nodes2[2]['label']
               nodes13[3]['label']=nodes3[3]['label']
               nodes13[4]['label']=nodes3[4]['label']
               nodes13[5]['label']=nodes4[5]['label']
               nodes13[6]['label']=nodes4[6]['label']
               nodes13[7]['label']=nodes11[7]['label']
               nodes13[8]['label']=nodes5[8]['label']
              // nodes13[9]['label']=nodes12[9]['label']
               nodes13[10]['label']= nodes12[10]['label']
                
               nodes13[11]['label']=break_array[0][0].toString()
               nodes13[12]['label']= break_array[0][1].toString()
               
              

            }
          )
          return nodes13
    }


    if(count==15)
    {
        getStep(12,array)
        .then((data) => { break_array.push(data.break)
          full_array.push(data.full)})
          .then(()=>{

               console.log('HelloTest'+count)
                console.log(full_array)

                nodes16[0]['label']=nodes1[0]['label']
                nodes16[1]['label']=nodes2[1]['label']
                nodes16[2]['label']=nodes2[2]['label']
                nodes16[3]['label']=nodes3[3]['label']
                nodes16[4]['label']=nodes3[4]['label']
                nodes16[5]['label']=full_array[0][5].toString()
                nodes16[6]['label']=nodes4[6]['label']
               

               
            }
          )
          return nodes16
    }


    return nodes9
}


function step10(count)
{
    const full_array = [];
    const break_array = [];

    if(count==13)
    {
        getStep(9,array)
        .then((data) => { break_array.push(data.break)
          full_array.push(data.full)})
          .then(()=>{

               console.log('COunt'+count)
                console.log(full_array)

                nodes14[0]['label']=nodes1[0]['label']
                nodes14[1]['label']=nodes2[1]['label']
                nodes14[2]['label']=nodes2[2]['label']
                nodes14[3]['label']=nodes3[3]['label']
                nodes14[4]['label']=nodes3[4]['label']
                nodes14[5]['label']=nodes4[5]['label']
                nodes14[6]['label']=nodes4[6]['label']
                nodes14[7]['label']=nodes11[7]['label']
                //nodes14[8]['label']=nodes5[8]['label']
                nodes14[9]['label']=full_array[0][3].toString()
                nodes14[10]['label']= nodes12[10]['label']


            }
          )
          return nodes14
    }

    return nodes10
}

export {step1,step2,step3,step4,step5,step6,step7,step8,step9,step10,setArray};