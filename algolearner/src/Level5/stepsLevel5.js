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
                nodes48[0]['label']=nodes1[0]['label']
                nodes48[1]['label']=nodes46[1]['label']
                nodes48[2]['label']=nodes2[2]['label']
                nodes48[3]['label']=nodes47[3]['label']
                nodes48[4]['label']=nodes47[4]['label']


                nodes48[5]['label']=break_array[0][0].toString()
                nodes48[6]['label']=break_array[0][1].toString()
               
            }
          )
          return nodes48
    }


    if(count==48)
    {
        getStep(28  ,array)
        .then((data) => { break_array.push(data.break)
          full_array.push(data.full)})
          .then(()=>{

               console.log('HelloTest'+count)
                console.log(break_array)
                nodes49[0]['label']=nodes1[0]['label']
                nodes49[1]['label']=nodes46[1]['label']
                nodes49[2]['label']=nodes2[2]['label']
                nodes49[3]['label']=nodes47[3]['label']
                nodes49[4]['label']=nodes47[4]['label']
                nodes49[5]['label']=nodes48[5]['label']
                nodes49[6]['label']=nodes48[6]['label']


                nodes49[7]['label']=break_array[0][0].toString()
                nodes49[8]['label']=break_array[0][1].toString()
               
            }
          )
          return nodes49
    }

    if(count==49)
    {
        getStep(29  ,array)
        .then((data) => { break_array.push(data.break)
          full_array.push(data.full)})
          .then(()=>{

               console.log('HelloTest'+count)
                console.log(break_array)
                nodes50[0]['label']=nodes1[0]['label']
                nodes50[1]['label']=nodes46[1]['label']
                nodes50[2]['label']=nodes2[2]['label']
                nodes50[3]['label']=nodes47[3]['label']
                nodes50[4]['label']=nodes47[4]['label']
                nodes50[5]['label']=nodes48[5]['label']
                nodes50[6]['label']=nodes48[6]['label']
                nodes50[7]['label']=nodes49[7]['label']
                nodes50[8]['label']=nodes49[8]['label']


                nodes50[9]['label']=break_array[0][0].toString()
                nodes50[10]['label']=break_array[0][1].toString()
                
            }
          )
          return nodes50
    }

    if(count==50)
    {
        getStep(30  ,array)
        .then((data) => { break_array.push(data.break)
          full_array.push(data.full)})
          .then(()=>{

               console.log('HelloTest'+count)
                console.log(break_array)
                nodes51[0]['label']=nodes1[0]['label']
                nodes51[1]['label']=nodes46[1]['label']
                nodes51[2]['label']=nodes2[2]['label']
                nodes51[3]['label']=nodes47[3]['label']
                nodes51[4]['label']=nodes47[4]['label']
                nodes51[5]['label']=nodes48[5]['label']
                nodes51[6]['label']=nodes48[6]['label']
                nodes51[7]['label']=nodes49[7]['label']
                nodes51[8]['label']=nodes49[8]['label']

                //nodes51[9]['label']=nodes50[9]['label']
                nodes51[10]['label']=nodes50[10]['label']


                nodes51[11]['label']=break_array[0][0].toString()
                nodes51[12]['label']=break_array[0][1].toString()
                
            }
          )
          return nodes51
    }


    if(count==51)
    {
        getStep(31  ,array)
        .then((data) => { break_array.push(data.break)
          full_array.push(data.full)})
          .then(()=>{

               console.log('HelloTest'+count)
                console.log(break_array)
                nodes52[0]['label']=nodes1[0]['label']
                nodes52[1]['label']=nodes46[1]['label']
                nodes52[2]['label']=nodes2[2]['label']
                nodes52[3]['label']=nodes47[3]['label']
                nodes52[4]['label']=nodes47[4]['label']
                nodes52[5]['label']=nodes48[5]['label']
                nodes52[6]['label']=nodes48[6]['label']
                nodes52[7]['label']=nodes49[7]['label']
                nodes52[8]['label']=nodes49[8]['label']

                nodes52[9]['label']=full_array[0][24].toString()
                nodes52[10]['label']=nodes50[10]['label']
                
            }
          )
          return nodes52
    }


    if(count==52)
    {
        getStep(31  ,array)
        .then((data) => { break_array.push(data.break)
          full_array.push(data.full)})
          .then(()=>{

               console.log('HelloTest'+count)
                console.log(break_array)
                nodes53[0]['label']=nodes1[0]['label']
                nodes53[1]['label']=nodes46[1]['label']
                nodes53[2]['label']=nodes2[2]['label']
                nodes53[3]['label']=nodes47[3]['label']
                nodes53[4]['label']=nodes47[4]['label']
                nodes53[5]['label']=nodes48[5]['label']
                nodes53[6]['label']=nodes48[6]['label']
                nodes53[7]['label']=nodes49[7]['label']
                nodes53[8]['label']=nodes49[8]['label']
                
                nodes53[9]['label']=nodes52[9]['label']
            // nodes53[10]['label']=nodes50[10]['label']

                
                nodes53[11]['label']=break_array[0][0].toString()
                nodes53[12]['label']=break_array[0][1].toString()
                
                
            }
          )
          return nodes53
    }


    if(count==53)
    {
        getStep(32  ,array)
        .then((data) => { break_array.push(data.break)
          full_array.push(data.full)})
          .then(()=>{

               console.log('HelloTest'+count)
                console.log(break_array)
                nodes54[0]['label']=nodes1[0]['label']
                nodes54[1]['label']=nodes46[1]['label']
                nodes54[2]['label']=nodes2[2]['label']
                nodes54[3]['label']=nodes47[3]['label']
                nodes54[4]['label']=nodes47[4]['label']
                nodes54[5]['label']=nodes48[5]['label']
                nodes54[6]['label']=nodes48[6]['label']
               // nodes54[7]['label']=nodes49[7]['label']
               nodes54[8]['label']=nodes49[8]['label']
                
               nodes54[9]['label']=nodes52[9]['label']
                nodes54[10]['label']=full_array[0][25].toString()

                
            }
          )
          return nodes54
    }


    if(count==54)
    {
        getStep(33  ,array)
        .then((data) => { break_array.push(data.break)
          full_array.push(data.full)})
          .then(()=>{

               console.log('HelloTest'+count)
                console.log(full_array)
                nodes55[0]['label']=nodes1[0]['label']
                nodes55[1]['label']=nodes46[1]['label']
                nodes55[2]['label']=nodes2[2]['label']
                nodes55[3]['label']=nodes47[3]['label']
                nodes55[4]['label']=nodes47[4]['label']
                nodes55[5]['label']=nodes48[5]['label']
                nodes55[6]['label']=nodes48[6]['label']
                nodes55[7]['label']=full_array[0][26].toString()
                nodes55[8]['label']=nodes49[8]['label']
         

                
            }
          )
          return nodes55
    }

    if(count==55)
    {
        getStep(32  ,array)
        .then((data) => { break_array.push(data.break)
          full_array.push(data.full)})
          .then(()=>{

               console.log('HelloTest'+count)
                console.log(full_array)
                nodes56[0]['label']=nodes1[0]['label']
                nodes56[1]['label']=nodes46[1]['label']
                nodes56[2]['label']=nodes2[2]['label']
                nodes56[3]['label']=nodes47[3]['label']
                nodes56[4]['label']=nodes47[4]['label']
                nodes56[5]['label']=nodes48[5]['label']
                nodes56[6]['label']=nodes48[6]['label']

                nodes56[7]['label']=nodes55[7]['label']
                nodes56[8]['label']=nodes49[8]['label']
         
   
                nodes56[9]['label']=break_array[0][0].toString()
                nodes56[10]['label']=break_array[0][1].toString()
                
                
            }
          )
          return nodes56
    }

    if(count==56)
    {
        getStep(33  ,array)
        .then((data) => { break_array.push(data.break)
          full_array.push(data.full)})
          .then(()=>{

               console.log('HelloTest'+count)
                console.log(full_array)
                nodes57[0]['label']=nodes1[0]['label']
                nodes57[1]['label']=nodes46[1]['label']
                nodes57[2]['label']=nodes2[2]['label']
                nodes57[3]['label']=nodes47[3]['label']
                nodes57[4]['label']=nodes47[4]['label']
                nodes57[5]['label']=nodes48[5]['label']
                nodes57[6]['label']=nodes48[6]['label']

                nodes57[7]['label']=nodes55[7]['label']
                nodes57[8]['label']=nodes49[8]['label']

                //nodes57[9]['label']= nodes56[9]['label']
                nodes57[10]['label']= nodes56[10]['label']

                nodes57[11]['label']=break_array[0][0].toString()
                nodes57[12]['label']=break_array[0][1].toString()

            }
          )
          return nodes57
    }

    if(count==57)
    {
        getStep(33  ,array)
        .then((data) => { break_array.push(data.break)
          full_array.push(data.full)})
          .then(()=>{

               console.log('HelloTest'+count)
                console.log(full_array)
                nodes58[0]['label']=nodes1[0]['label']
                nodes58[1]['label']=nodes46[1]['label']
                nodes58[2]['label']=nodes2[2]['label']
                nodes58[3]['label']=nodes47[3]['label']
                nodes58[4]['label']=nodes47[4]['label']
                nodes58[5]['label']=nodes48[5]['label']
                nodes58[6]['label']=nodes48[6]['label']

                nodes58[7]['label']=nodes55[7]['label']
                //nodes58[8]['label']=nodes49[8]['label']

                nodes58[9]['label']=full_array[0][27].toString()
                nodes58[10]['label']= nodes56[10]['label']


            }
          )
          return nodes58
    }

    if(count==58)
    {
        getStep(33  ,array)
        .then((data) => { break_array.push(data.break)
          full_array.push(data.full)})
          .then(()=>{

               console.log('HelloTest'+count)
                console.log(full_array)
                nodes59[0]['label']=nodes1[0]['label']
                nodes59[1]['label']=nodes46[1]['label']
                nodes59[2]['label']=nodes2[2]['label']
                nodes59[3]['label']=nodes47[3]['label']
                nodes59[4]['label']=nodes47[4]['label']
               // nodes59[5]['label']=nodes48[5]['label']
                nodes59[6]['label']=nodes48[6]['label']

                nodes59[7]['label']=nodes55[7]['label']
                nodes59[8]['label']=full_array[0][28].toString()

                

            }
          )
          return nodes59
    }

    if(count==59)
    {
        getStep(34  ,array)
        .then((data) => { break_array.push(data.break)
          full_array.push(data.full)})
          .then(()=>{

               console.log('HelloTest'+count)
                console.log(full_array)
                nodes60[0]['label']=nodes1[0]['label']
                nodes60[1]['label']=nodes46[1]['label']
                nodes60[2]['label']=nodes2[2]['label']
                nodes60[3]['label']=nodes47[3]['label']
                nodes60[4]['label']=nodes47[4]['label']
                nodes60[5]['label']=full_array[0][29].toString()
                nodes60[6]['label']=nodes48[6]['label']


                

            }
          )
          return nodes60
    }

    if(count==60)
    {
        getStep(34  ,array)
        .then((data) => { break_array.push(data.break)
          full_array.push(data.full)})
          .then(()=>{

               console.log('HelloTest'+count)
                console.log(full_array)
                nodes61[0]['label']=nodes1[0]['label']
                nodes61[1]['label']=nodes46[1]['label']
                nodes61[2]['label']=nodes2[2]['label']
                nodes61[3]['label']=nodes47[3]['label']
                nodes61[4]['label']=nodes47[4]['label']
                nodes61[5]['label']=nodes60[5]['label']
                nodes61[6]['label']=nodes48[6]['label']

                nodes61[7]['label']=break_array[0][0].toString()
                nodes61[8]['label']=break_array[0][1].toString()

            }
          )
          return nodes61
    }


    if(count==61)
    {
        getStep(35  ,array)
        .then((data) => { break_array.push(data.break)
          full_array.push(data.full)})
          .then(()=>{

               console.log('HelloTest'+count)
                console.log(break_array)
                nodes62[0]['label']=nodes1[0]['label']
                nodes62[1]['label']=nodes46[1]['label']
                nodes62[2]['label']=nodes2[2]['label']
                nodes62[3]['label']=nodes47[3]['label']
                nodes62[4]['label']=nodes47[4]['label']
                nodes62[5]['label']=nodes60[5]['label']
                nodes62[6]['label']=nodes48[6]['label']
                nodes62[7]['label']=nodes61[7]['label']

                nodes62[8]['label']=nodes61[8]['label']

                nodes62[9]['label']=break_array[0][0].toString()
                nodes62[10]['label']=break_array[0][1].toString()

            }
          )
          return nodes62
    }

    if(count==62)
    {
        getStep(36  ,array)
        .then((data) => { break_array.push(data.break)
          full_array.push(data.full)})
          .then(()=>{

               console.log('HelloTest'+count)
                console.log(break_array)
                nodes63[0]['label']=nodes1[0]['label']
                nodes63[1]['label']=nodes46[1]['label']
                nodes63[2]['label']=nodes2[2]['label']
                nodes63[3]['label']=nodes47[3]['label']
                nodes63[4]['label']=nodes47[4]['label']
                nodes63[5]['label']=nodes60[5]['label']
                nodes63[6]['label']=nodes48[6]['label']
                nodes63[7]['label']=nodes61[7]['label']
                nodes63[8]['label']=nodes61[8]['label']

                //nodes63[9]['label']=nodes62[9]['label']
                nodes63[10]['label']=nodes62[10]['label']


                nodes63[11]['label']=break_array[0][0].toString()
                nodes63[12]['label']=break_array[0][1].toString()

            }
          )
          return nodes63
    }


    if(count==63)
    {
        getStep(36  ,array)
        .then((data) => { break_array.push(data.break)
          full_array.push(data.full)})
          .then(()=>{

               console.log('HelloTest'+count)
                console.log(break_array)
                nodes64[0]['label']=nodes1[0]['label']
                nodes64[1]['label']=nodes46[1]['label']
                nodes64[2]['label']=nodes2[2]['label']
                nodes64[3]['label']=nodes47[3]['label']
                nodes64[4]['label']=nodes47[4]['label']
                nodes64[5]['label']=nodes60[5]['label']
                nodes64[6]['label']=nodes48[6]['label']
                //nodes64[7]['label']=nodes61[7]['label']
                nodes64[8]['label']=nodes61[8]['label']

                nodes64[9]['label']=full_array[0][30].toString()
                nodes64[10]['label']=nodes62[10]['label']


            }
          )
          return nodes64
    }

    if(count==64)
    {
        getStep(36  ,array)
        .then((data) => { break_array.push(data.break)
          full_array.push(data.full)})
          .then(()=>{

               console.log('HelloTest'+count)
                console.log(full_array)
                nodes65[0]['label']=nodes1[0]['label']
                nodes65[1]['label']=nodes46[1]['label']
                nodes65[2]['label']=nodes2[2]['label']
                nodes65[3]['label']=nodes47[3]['label']
                nodes65[4]['label']=nodes47[4]['label']
                nodes65[5]['label']=nodes60[5]['label']
                nodes65[6]['label']=nodes48[6]['label']
                nodes65[7]['label']=full_array[0][31].toString()
                nodes65[8]['label']=nodes61[8]['label']

            }
          )
          return nodes65
    }

    if(count==65)
    {
        getStep(37  ,array)
        .then((data) => { break_array.push(data.break)
          full_array.push(data.full)})
          .then(()=>{

               console.log('HelloTest'+count)
                console.log(full_array)
                nodes66[0]['label']=nodes1[0]['label']
                nodes66[1]['label']=nodes46[1]['label']
                nodes66[2]['label']=nodes2[2]['label']
                nodes66[3]['label']=nodes47[3]['label']
                nodes66[4]['label']=nodes47[4]['label']
                nodes66[5]['label']=nodes60[5]['label']
                nodes66[6]['label']=nodes48[6]['label']
                nodes66[7]['label']=nodes65[7]['label']
                nodes66[8]['label']=nodes61[8]['label']

                nodes66[9]['label']=break_array[0][0].toString()
                nodes66[10]['label']=break_array[0][1].toString()

            }
          )
          return nodes66
    }

    if(count==66)
    {
        getStep(38  ,array)
        .then((data) => { break_array.push(data.break)
          full_array.push(data.full)})
          .then(()=>{

               console.log('HelloTest'+count)
                console.log(full_array)
                nodes67[0]['label']=nodes1[0]['label']
                nodes67[1]['label']=nodes46[1]['label']
                nodes67[2]['label']=nodes2[2]['label']
                nodes67[3]['label']=nodes47[3]['label']
                nodes67[4]['label']=nodes47[4]['label']
                nodes67[5]['label']=nodes60[5]['label']
                nodes67[6]['label']=nodes48[6]['label']
                nodes67[7]['label']=nodes65[7]['label']
                nodes67[8]['label']=nodes61[8]['label']
               // nodes67[9]['label']=nodes66[9]['label']
                nodes67[10]['label']=nodes66[9]['label']

                nodes67[11]['label']=break_array[0][0].toString()
                nodes67[12]['label']=break_array[0][1].toString()

            }
          )
          return nodes67
    }

    if(count==67)
    {
        getStep(38  ,array)
        .then((data) => { break_array.push(data.break)
          full_array.push(data.full)})
          .then(()=>{

               console.log('HelloTest'+count)
                console.log(full_array)
                nodes68[0]['label']=nodes1[0]['label']
                nodes68[1]['label']=nodes46[1]['label']
                nodes68[2]['label']=nodes2[2]['label']
                nodes68[3]['label']=nodes47[3]['label']
                nodes68[4]['label']=nodes47[4]['label']
                nodes68[5]['label']=nodes60[5]['label']
                nodes68[6]['label']=nodes48[6]['label']
                nodes68[7]['label']=nodes65[7]['label']
                //nodes68[8]['label']=nodes61[8]['label']
               nodes68[9]['label']=full_array[0][32].toString()
               nodes68[10]['label']=nodes66[9]['label']


            }
          )
          return nodes68
    }


    if(count==68)
    {
        getStep(38  ,array)
        .then((data) => { break_array.push(data.break)
          full_array.push(data.full)})
          .then(()=>{

               console.log('HelloTest'+count)
                console.log(full_array)
                nodes69[0]['label']=nodes1[0]['label']
                nodes69[1]['label']=nodes46[1]['label']
                nodes69[2]['label']=nodes2[2]['label']
                nodes69[3]['label']=nodes47[3]['label']
                nodes69[4]['label']=nodes47[4]['label']
                nodes69[5]['label']=nodes60[5]['label']
                //nodes69[6]['label']=nodes48[6]['label']
                nodes69[7]['label']=nodes65[7]['label']
                nodes69[8]['label']=full_array[0][33].toString()
              

            }
          )
          return nodes69
    }

    if(count==69)
    {
        getStep(38  ,array)
        .then((data) => { break_array.push(data.break)
          full_array.push(data.full)})
          .then(()=>{

               console.log('HelloTest'+count)
                console.log(full_array)
                nodes70[0]['label']=nodes1[0]['label']
                nodes70[1]['label']=nodes46[1]['label']
                nodes70[2]['label']=nodes2[2]['label']
                //nodes70[3]['label']=nodes47[3]['label']
                nodes70[4]['label']=nodes47[4]['label']
                nodes70[5]['label']=nodes60[5]['label']
                nodes70[6]['label']=full_array[0][34].toString()
                
              

            }
          )
          return nodes70
    }

    if(count==70)
    {
        getStep(38  ,array)
        .then((data) => { break_array.push(data.break)
          full_array.push(data.full)})
          .then(()=>{

               console.log('HelloTest'+count)
                console.log(full_array)
                nodes71[0]['label']=nodes1[0]['label']
                nodes71[1]['label']=nodes46[1]['label']
                nodes71[2]['label']=nodes2[2]['label']
                nodes71[3]['label']=full_array[0][35].toString()
                nodes71[4]['label']=nodes47[4]['label']
                
                
              

            }
          )
          return nodes71
    }

    if(count==71)
    {
        getStep(39  ,array)
        .then((data) => { break_array.push(data.break)
          full_array.push(data.full)})
          .then(()=>{

               console.log('HelloTest'+count)
                console.log(break_array)
                nodes72[0]['label']=nodes1[0]['label']
                nodes72[1]['label']=nodes46[1]['label']
                nodes72[2]['label']=nodes2[2]['label']

                nodes72[3]['label']=nodes71[3]['label']

                nodes72[4]['label']=nodes47[4]['label']
                
                
                nodes72[5]['label']=break_array[0][0].toString()
                nodes72[6]['label']=break_array[0][1].toString()

            }
          )
          return nodes72
    }

    if(count==72)
    {
        getStep(40  ,array)
        .then((data) => { break_array.push(data.break)
          full_array.push(data.full)})
          .then(()=>{

               console.log('HelloTest'+count)
                console.log(break_array)
                nodes73[0]['label']=nodes1[0]['label']
                nodes73[1]['label']=nodes46[1]['label']
                nodes73[2]['label']=nodes2[2]['label']
                nodes73[3]['label']=nodes71[3]['label']
                nodes73[4]['label']=nodes47[4]['label']
                nodes73[5]['label']=nodes72[5]['label']
                nodes73[6]['label']=nodes72[6]['label']

                
                nodes73[7]['label']=break_array[0][0].toString()
                nodes73[8]['label']=break_array[0][1].toString()

            }
          )
          return nodes73
    }

    if(count==73)
    {
        getStep(41  ,array)
        .then((data) => { break_array.push(data.break)
          full_array.push(data.full)})
          .then(()=>{

               console.log('HelloTest'+count)
                console.log(break_array)
                nodes74[0]['label']=nodes1[0]['label']
                nodes74[1]['label']=nodes46[1]['label']
                nodes74[2]['label']=nodes2[2]['label']
                nodes74[3]['label']=nodes71[3]['label']
                nodes74[4]['label']=nodes47[4]['label']
                nodes74[5]['label']=nodes72[5]['label']
                nodes74[6]['label']=nodes72[6]['label']
                nodes74[7]['label']=nodes73[7]['label']
                nodes74[8]['label']=nodes73[8]['label']

                
                nodes74[9]['label']=break_array[0][0].toString()
                nodes74[10]['label']=break_array[0][1].toString()


            }
          )
          return nodes74
    }

    if(count==74)
    {
        getStep(42  ,array)
        .then((data) => { break_array.push(data.break)
          full_array.push(data.full)})
          .then(()=>{

               console.log('HelloTest'+count)
                console.log(break_array)

                nodes75[0]['label']=nodes1[0]['label']
                nodes75[1]['label']=nodes46[1]['label']
                nodes75[2]['label']=nodes2[2]['label']
                nodes75[3]['label']=nodes71[3]['label']
                nodes75[4]['label']=nodes47[4]['label']
                nodes75[5]['label']=nodes72[5]['label']
                nodes75[6]['label']=nodes72[6]['label']
                nodes75[7]['label']=nodes73[7]['label']
                nodes75[8]['label']=nodes73[8]['label']
                
               // nodes75[9]['label']=nodes74[9]['label']
                nodes75[10]['label']=nodes74[10]['label']

                
                nodes75[11]['label']=break_array[0][0].toString()
                nodes75[12]['label']=break_array[0][1].toString()

            }
          )
          return nodes75
    }

    if(count==75)
    {
        getStep(42  ,array)
        .then((data) => { break_array.push(data.break)
          full_array.push(data.full)})
          .then(()=>{

               console.log('HelloTest'+count)
                console.log(break_array)

                nodes76[0]['label']=nodes1[0]['label']
                nodes76[1]['label']=nodes46[1]['label']
                nodes76[2]['label']=nodes2[2]['label']
                nodes76[3]['label']=nodes71[3]['label']
                nodes76[4]['label']=nodes47[4]['label']
                nodes76[5]['label']=nodes72[5]['label']
                nodes76[6]['label']=nodes72[6]['label']
                //nodes75[7]['label']=nodes73[7]['label']
                nodes76[8]['label']=nodes73[8]['label']
                
                nodes76[9]['label']=full_array[0][36].toString()
                nodes76[10]['label']=nodes74[10]['label']

                
               
            }
          )
          return nodes76
    }

    if(count==76)
    {
        getStep(42  ,array)
        .then((data) => { break_array.push(data.break)
          full_array.push(data.full)})
          .then(()=>{

               console.log('HelloTest'+count)
                console.log(break_array)

                nodes77[0]['label']=nodes1[0]['label']
                nodes77[1]['label']=nodes46[1]['label']
                nodes77[2]['label']=nodes2[2]['label']
                nodes77[3]['label']=nodes71[3]['label']
                nodes77[4]['label']=nodes47[4]['label']
                //nodes77[5]['label']=nodes72[5]['label']
                nodes77[6]['label']=nodes72[6]['label']
                nodes77[7]['label']=full_array[0][37].toString()
                nodes77[8]['label']=nodes73[8]['label']
                
               
            }
          )
          return nodes77
    }

    if(count==77)
    {
        getStep(42  ,array)
        .then((data) => { break_array.push(data.break)
          full_array.push(data.full)})
          .then(()=>{

               console.log('HelloTest'+count)
                console.log(break_array)

                nodes78[0]['label']=nodes1[0]['label']
                nodes78[1]['label']=nodes46[1]['label']
                nodes78[2]['label']=nodes2[2]['label']
                nodes78[3]['label']=nodes71[3]['label']
                nodes78[4]['label']=nodes47[4]['label']
                nodes78[5]['label']=full_array[0][38].toString()
                nodes78[6]['label']=nodes72[6]['label']
               
               
            }
          )
          return nodes78
    }

    if(count==78)
    {
        getStep(45  ,array)
        .then((data) => { break_array.push(data.break)
          full_array.push(data.full)})
          .then(()=>{

               console.log('HelloTest'+count)
                console.log(break_array)

                nodes79[0]['label']=nodes1[0]['label']
                nodes79[1]['label']=nodes46[1]['label']
                nodes79[2]['label']=nodes2[2]['label']
                nodes79[3]['label']=nodes71[3]['label']
                nodes79[4]['label']=nodes47[4]['label']
                nodes79[5]['label']= nodes78[5]['label']
                nodes79[6]['label']=nodes72[6]['label']
               
                nodes79[7]['label']=break_array[0][0].toString()
                nodes79[8]['label']=break_array[0][1].toString()
            }
          )
          return nodes79
    }

    if(count==79)
    {
        getStep(46  ,array)
        .then((data) => { break_array.push(data.break)
          full_array.push(data.full)})
          .then(()=>{

               console.log('HelloTest'+count)
                console.log(break_array)

                nodes80[0]['label']=nodes1[0]['label']
                nodes80[1]['label']=nodes46[1]['label']
                nodes80[2]['label']=nodes2[2]['label']
                nodes80[3]['label']=nodes71[3]['label']
                nodes80[4]['label']=nodes47[4]['label']
                nodes80[5]['label']= nodes78[5]['label']
                nodes80[6]['label']=nodes72[6]['label']

                nodes80[7]['label']=nodes79[7]['label']
                nodes80[8]['label']=nodes79[8]['label']

                nodes80[9]['label']=break_array[0][0].toString()
                nodes80[10]['label']=break_array[0][1].toString()
            }
          )
          return nodes80
    }


    if(count==80)
    {
        getStep(47  ,array)
        .then((data) => { break_array.push(data.break)
          full_array.push(data.full)})
          .then(()=>{

               console.log('HelloTest'+count)
                console.log(break_array)

                nodes81[0]['label']=nodes1[0]['label']
                nodes81[1]['label']=nodes46[1]['label']
                nodes81[2]['label']=nodes2[2]['label']
                nodes81[3]['label']=nodes71[3]['label']
                nodes81[4]['label']=nodes47[4]['label']
                nodes81[5]['label']= nodes78[5]['label']
                nodes81[6]['label']=nodes72[6]['label']
                nodes81[7]['label']=nodes79[7]['label']
                nodes81[8]['label']=nodes79[8]['label']

               // nodes81[9]['label']=nodes81[9]['label']
                nodes81[10]['label']=nodes80[10]['label']

                nodes81[11]['label']=break_array[0][0].toString()
                nodes81[12]['label']=break_array[0][1].toString()
            }
          )
          return nodes81
    }

    if(count==81)
    {
        getStep(50  ,array)
        .then((data) => { break_array.push(data.break)
          full_array.push(data.full)})
          .then(()=>{

               console.log('HelloTest'+count)
                console.log(full_array)

                nodes82[0]['label']=nodes1[0]['label']
                nodes82[1]['label']=nodes46[1]['label']
                nodes82[2]['label']=nodes2[2]['label']
                nodes82[3]['label']=nodes71[3]['label']
                nodes82[4]['label']=nodes47[4]['label']
                nodes82[5]['label']= nodes78[5]['label']
                nodes82[6]['label']=nodes72[6]['label']
                //nodes82[7]['label']=nodes79[7]['label']
                nodes82[8]['label']=nodes79[8]['label']

               nodes82[9]['label']=full_array[0][41].toString()
               nodes82[10]['label']=nodes81[10]['label']

                
            }
          )
          return nodes82
    }


    if(count==82)
    {
        getStep(47  ,array)
        .then((data) => { break_array.push(data.break)
          full_array.push(data.full)})
          .then(()=>{

               console.log('HelloTest'+count)
                console.log(full_array)

                nodes83[0]['label']=nodes1[0]['label']
                nodes83[1]['label']=nodes46[1]['label']
                nodes83[2]['label']=nodes2[2]['label']
                nodes83[3]['label']=nodes71[3]['label']
                nodes83[4]['label']=nodes47[4]['label']
                nodes83[5]['label']= nodes78[5]['label']
                nodes83[6]['label']=nodes72[6]['label']
                nodes83[7]['label']=full_array[0][42].toString()
                nodes83[8]['label']=nodes79[8]['label']

            }
          )
          return nodes83
    }

    if(count==83)
    {
        getStep(48  ,array)
        .then((data) => { break_array.push(data.break)
          full_array.push(data.full)})
          .then(()=>{

               console.log('HelloTest'+count)
                console.log(break_array)

                nodes84[0]['label']=nodes1[0]['label']
                nodes84[1]['label']=nodes46[1]['label']
                nodes84[2]['label']=nodes2[2]['label']
                nodes84[3]['label']=nodes71[3]['label']
                nodes84[4]['label']=nodes47[4]['label']
                nodes84[5]['label']= nodes78[5]['label']
                nodes84[6]['label']=nodes72[6]['label']
                nodes84[7]['label']=nodes83[7]['label']

                nodes84[8]['label']=nodes79[8]['label']

                
                nodes84[9]['label']=break_array[0][0].toString()
                nodes84[10]['label']=break_array[0][1].toString()

            }
          )
          return nodes84
    }

    if(count==84)
    {
        getStep(49  ,array)
        .then((data) => { break_array.push(data.break)
          full_array.push(data.full)})
          .then(()=>{

               console.log('HelloTest'+count)
                console.log(full_array)

                nodes85[0]['label']=nodes1[0]['label']
                nodes85[1]['label']=nodes46[1]['label']
                nodes85[2]['label']=nodes2[2]['label']
                nodes85[3]['label']=nodes71[3]['label']
                nodes85[4]['label']=nodes47[4]['label']
                nodes85[5]['label']= nodes78[5]['label']
                nodes85[6]['label']=nodes72[6]['label']
                nodes85[7]['label']=nodes83[7]['label']

                nodes85[8]['label']=nodes79[8]['label']

               // nodes85[9]['label']= nodes84[9]['label']
                nodes85[10]['label']= nodes84[10]['label']

                nodes85[11]['label']=break_array[0][0].toString()
                nodes85[12]['label']=break_array[0][1].toString()

            }
          )
          return nodes85
    }

    if(count==85)
    {
        getStep(55  ,array)
        .then((data) => { break_array.push(data.break)
          full_array.push(data.full)})
          .then(()=>{

               console.log('HelloTest'+count)
                console.log(full_array)

                nodes86[0]['label']=nodes1[0]['label']
                nodes86[1]['label']=nodes46[1]['label']
                nodes86[2]['label']=nodes2[2]['label']
                nodes86[3]['label']=nodes71[3]['label']
                nodes86[4]['label']=nodes47[4]['label']
                nodes86[5]['label']= nodes78[5]['label']
                nodes86[6]['label']=nodes72[6]['label']
                nodes86[7]['label']=nodes83[7]['label']

                //nodes86[8]['label']=nodes79[8]['label']

                nodes86[9]['label']= full_array[0][43].toString()
               nodes86[10]['label']= nodes84[10]['label']


            }
          )
          return nodes86
    }


    if(count==86)
    {
        getStep(55  ,array)
        .then((data) => { break_array.push(data.break)
          full_array.push(data.full)})
          .then(()=>{

               console.log('HelloTest'+count)
                console.log(full_array)

                nodes87[0]['label']=nodes1[0]['label']
                nodes87[1]['label']=nodes46[1]['label']
                nodes87[2]['label']=nodes2[2]['label']
                nodes87[3]['label']=nodes71[3]['label']
                nodes87[4]['label']=nodes47[4]['label']
                nodes87[5]['label']= nodes78[5]['label']
                //nodes87[6]['label']=nodes72[6]['label']
                nodes87[7]['label']=nodes83[7]['label']

                nodes87[8]['label']=full_array[0][44].toString()



            }
          )
          return nodes87
    }

    if(count==87)
    {
        getStep(55  ,array)
        .then((data) => { break_array.push(data.break)
          full_array.push(data.full)})
          .then(()=>{

               console.log('HelloTest'+count)
                console.log(full_array)

                nodes88[0]['label']=nodes1[0]['label']
                nodes88[1]['label']=nodes46[1]['label']
                nodes88[2]['label']=nodes2[2]['label']
                nodes88[3]['label']=nodes71[3]['label']
               // nodes88[4]['label']=nodes47[4]['label']
                nodes88[5]['label']= nodes78[5]['label']
                nodes88[6]['label']=full_array[0][45].toString()


            }
          )
          return nodes88
    }

    if(count==88)
    {
        getStep(55  ,array)
        .then((data) => { break_array.push(data.break)
          full_array.push(data.full)})
          .then(()=>{

               console.log('HelloTest'+count)
                console.log(full_array)

                nodes89[0]['label']=nodes1[0]['label']
                nodes89[1]['label']=nodes46[1]['label']
               // nodes89[2]['label']=nodes2[2]['label']
                nodes89[3]['label']=nodes71[3]['label']
                nodes89[4]['label']=full_array[0][46].toString()
               
            }
          )
          return nodes89
    }

    if(count==89)
    {
        getStep(55  ,array)
        .then((data) => { break_array.push(data.break)
          full_array.push(data.full)})
          .then(()=>{

               console.log('HelloTest'+count)
                console.log(full_array)

               // nodes90[0]['label']=nodes1[0]['label']
                nodes90[1]['label']=nodes46[1]['label']
                nodes90[2]['label']=full_array[0][47].toString()
               
            }
          )
          return nodes90
    }

    if(count==90)
    {
        getStep(55  ,array)
        .then((data) => { break_array.push(data.break)
          full_array.push(data.full)})
          .then(()=>{

               console.log('HelloTest'+count)
                console.log(full_array)

                nodes91[0]['label']=full_array[0][48].toString()
               
            }
          )
          return nodes91
    }

    return nodes7
}
var nodes91=[
    { id: 1, label: 'Node 1' },
   
]

var nodes90=[
    { id: 1, label: 'Node 1' },
    { id: 2, label: 'Node 2' },
    { id: 3, label: 'Node 3' },
    
]

var nodes89=[
    { id: 1, label: 'Node 1' },
    { id: 2, label: 'Node 2' },
    { id: 3, label: 'Node 3' },
    { id: 48, label: 'Node 48' },
    { id: 49, label: 'Node 49' },
]


var nodes88=[
    { id: 1, label: 'Node 1' },
    { id: 2, label: 'Node 2' },
    { id: 3, label: 'Node 3' },
    { id: 48, label: 'Node 48' },
    { id: 49, label: 'Node 49' },
    { id: 74, label: 'Node 74' },
    { id: 75, label: 'Node 75' },

]

var nodes87=[
    { id: 1, label: 'Node 1' },
    { id: 2, label: 'Node 2' },
    { id: 3, label: 'Node 3' },
    { id: 48, label: 'Node 48' },
    { id: 49, label: 'Node 49' },
    { id: 74, label: 'Node 74' },
    { id: 75, label: 'Node 75' },
    { id: 82, label: 'Node 82' },
    { id: 83, label: 'Node 83' },
  


]

var nodes86=[
    { id: 1, label: 'Node 1' },
    { id: 2, label: 'Node 2' },
    { id: 3, label: 'Node 3' },
    { id: 48, label: 'Node 48' },
    { id: 49, label: 'Node 49' },
    { id: 74, label: 'Node 74' },
    { id: 75, label: 'Node 75' },
    { id: 82, label: 'Node 82' },
    { id: 83, label: 'Node 83' },
    { id: 88, label: 'Node 88' },
    { id: 89, label: 'Node 89' },


]


var nodes85=[
    { id: 1, label: 'Node 1' },
    { id: 2, label: 'Node 2' },
    { id: 3, label: 'Node 3' },
    { id: 48, label: 'Node 48' },
    { id: 49, label: 'Node 49' },
    { id: 74, label: 'Node 74' },
    { id: 75, label: 'Node 75' },
    { id: 82, label: 'Node 82' },
    { id: 83, label: 'Node 83' },
    { id: 88, label: 'Node 88' },
    { id: 89, label: 'Node 89' },
    { id: 90, label: 'Node 90' },
    { id: 91, label: 'Node 91' },

]

var nodes84=[
    { id: 1, label: 'Node 1' },
    { id: 2, label: 'Node 2' },
    { id: 3, label: 'Node 3' },
    { id: 48, label: 'Node 48' },
    { id: 49, label: 'Node 49' },
    { id: 74, label: 'Node 74' },
    { id: 75, label: 'Node 75' },
    { id: 82, label: 'Node 82' },
    { id: 83, label: 'Node 83' },
    { id: 88, label: 'Node 88' },
    { id: 89, label: 'Node 89' },
    { id: 90, label: 'Node 90' },
    { id: 91, label: 'Node 91' },

]

var nodes83=[
    { id: 1, label: 'Node 1' },
    { id: 2, label: 'Node 2' },
    { id: 3, label: 'Node 3' },
    { id: 48, label: 'Node 48' },
    { id: 49, label: 'Node 49' },
    { id: 74, label: 'Node 74' },
    { id: 75, label: 'Node 75' },
    { id: 82, label: 'Node 82' },
    { id: 83, label: 'Node 83' },
    { id: 88, label: 'Node 88' },
    { id: 89, label: 'Node 89' },

]

var nodes82=[
    { id: 1, label: 'Node 1' },
    { id: 2, label: 'Node 2' },
    { id: 3, label: 'Node 3' },
    { id: 48, label: 'Node 48' },
    { id: 49, label: 'Node 49' },
    { id: 74, label: 'Node 74' },
    { id: 75, label: 'Node 75' },
    { id: 82, label: 'Node 82' },
    { id: 83, label: 'Node 83' },
    { id: 84, label: 'Node 84' },
    { id: 85, label: 'Node 85' },

]

var nodes81=[
    { id: 1, label: 'Node 1' },
    { id: 2, label: 'Node 2' },
    { id: 3, label: 'Node 3' },
    { id: 48, label: 'Node 48' },
    { id: 49, label: 'Node 49' },
    { id: 74, label: 'Node 74' },
    { id: 75, label: 'Node 75' },
    { id: 82, label: 'Node 82' },
    { id: 83, label: 'Node 83' },
    { id: 84, label: 'Node 84' },
    { id: 85, label: 'Node 85' },
    { id: 86, label: 'Node 86' },
    { id: 87, label: 'Node 87' },

]

var nodes80=[
    { id: 1, label: 'Node 1' },
    { id: 2, label: 'Node 2' },
    { id: 3, label: 'Node 3' },
    { id: 48, label: 'Node 48' },
    { id: 49, label: 'Node 49' },
    { id: 74, label: 'Node 74' },
    { id: 75, label: 'Node 75' },
    { id: 82, label: 'Node 82' },
    { id: 83, label: 'Node 83' },
    { id: 84, label: 'Node 84' },
    { id: 85, label: 'Node 85' },
    { id: 86, label: 'Node 86' },
    { id: 87, label: 'Node 87' },

]

var nodes79=[
    { id: 1, label: 'Node 1' },
    { id: 2, label: 'Node 2' },
    { id: 3, label: 'Node 3' },
    { id: 48, label: 'Node 48' },
    { id: 49, label: 'Node 49' },
    { id: 74, label: 'Node 74' },
    { id: 75, label: 'Node 75' },
    { id: 82, label: 'Node 82' },
    { id: 83, label: 'Node 83' },
    { id: 84, label: 'Node 84' },
    { id: 85, label: 'Node 85' },

]

var nodes78=[
    { id: 1, label: 'Node 1' },
    { id: 2, label: 'Node 2' },
    { id: 3, label: 'Node 3' },
    { id: 48, label: 'Node 48' },
    { id: 49, label: 'Node 49' },
    { id: 74, label: 'Node 74' },
    { id: 75, label: 'Node 75' },
    { id: 82, label: 'Node 82' },
    { id: 83, label: 'Node 83' },




]

var nodes77=[
    { id: 1, label: 'Node 1' },
    { id: 2, label: 'Node 2' },
    { id: 3, label: 'Node 3' },
    { id: 48, label: 'Node 48' },
    { id: 49, label: 'Node 49' },
    { id: 74, label: 'Node 74' },
    { id: 75, label: 'Node 75' },
    { id: 76, label: 'Node 76' },
    { id: 77, label: 'Node 77' },
    



]

var nodes76=[
    { id: 1, label: 'Node 1' },
    { id: 2, label: 'Node 2' },
    { id: 3, label: 'Node 3' },
    { id: 48, label: 'Node 48' },
    { id: 49, label: 'Node 49' },
    { id: 74, label: 'Node 74' },
    { id: 75, label: 'Node 75' },
    { id: 76, label: 'Node 76' },
    { id: 77, label: 'Node 77' },
    { id: 78, label: 'Node 78' },
    { id: 79, label: 'Node 79' },



]

var nodes75=[
    { id: 1, label: 'Node 1' },
    { id: 2, label: 'Node 2' },
    { id: 3, label: 'Node 3' },
    { id: 48, label: 'Node 48' },
    { id: 49, label: 'Node 49' },
    { id: 74, label: 'Node 74' },
    { id: 75, label: 'Node 75' },
    { id: 76, label: 'Node 76' },
    { id: 77, label: 'Node 77' },
    { id: 78, label: 'Node 78' },
    { id: 79, label: 'Node 79' },
    { id: 80, label: 'Node 80' },
    { id: 81, label: 'Node 81' },


]

var nodes74=[
    { id: 1, label: 'Node 1' },
    { id: 2, label: 'Node 2' },
    { id: 3, label: 'Node 3' },
    { id: 48, label: 'Node 48' },
    { id: 49, label: 'Node 49' },
    { id: 74, label: 'Node 74' },
    { id: 75, label: 'Node 75' },
    { id: 76, label: 'Node 76' },
    { id: 77, label: 'Node 77' },
    { id: 78, label: 'Node 78' },
    { id: 79, label: 'Node 79' },
    { id: 80, label: 'Node 80' },
    { id: 81, label: 'Node 81' },


]

var nodes73=[
    { id: 1, label: 'Node 1' },
    { id: 2, label: 'Node 2' },
    { id: 3, label: 'Node 3' },
    { id: 48, label: 'Node 48' },
    { id: 49, label: 'Node 49' },
    { id: 74, label: 'Node 74' },
    { id: 75, label: 'Node 75' },
    { id: 76, label: 'Node 76' },
    { id: 77, label: 'Node 77' },
    { id: 78, label: 'Node 78' },
    { id: 79, label: 'Node 79' },


]

var nodes72=[
    { id: 1, label: 'Node 1' },
    { id: 2, label: 'Node 2' },
    { id: 3, label: 'Node 3' },
    { id: 48, label: 'Node 48' },
    { id: 49, label: 'Node 49' },
    { id: 74, label: 'Node 74' },
    { id: 75, label: 'Node 75' },
    { id: 76, label: 'Node 76' },
    { id: 77, label: 'Node 77' },


]

var nodes71=[
    { id: 1, label: 'Node 1' },
    { id: 2, label: 'Node 2' },
    { id: 3, label: 'Node 3' },
    { id: 48, label: 'Node 48' },
    { id: 49, label: 'Node 49' },
    { id: 74, label: 'Node 74' },
    { id: 75, label: 'Node 75' },


]

var nodes70=[
    { id: 1, label: 'Node 1' },
    { id: 2, label: 'Node 2' },
    { id: 3, label: 'Node 3' },
    { id: 48, label: 'Node 48' },
    { id: 49, label: 'Node 49' },
    { id: 50, label: 'Node 50' },
    { id: 51, label: 'Node 51' },


]

var nodes69=[
    { id: 1, label: 'Node 1' },
    { id: 2, label: 'Node 2' },
    { id: 3, label: 'Node 3' },
    { id: 48, label: 'Node 48' },
    { id: 49, label: 'Node 49' },
    { id: 50, label: 'Node 50' },
    { id: 51, label: 'Node 51' },
    { id: 64, label: 'Node 64' },
    { id: 65, label: 'Node 65' },

]

var nodes68=[
    { id: 1, label: 'Node 1' },
    { id: 2, label: 'Node 2' },
    { id: 3, label: 'Node 3' },
    { id: 48, label: 'Node 48' },
    { id: 49, label: 'Node 49' },
    { id: 50, label: 'Node 50' },
    { id: 51, label: 'Node 51' },
    { id: 64, label: 'Node 64' },
    { id: 65, label: 'Node 65' },
    { id: 70, label: 'Node 70' },
    { id: 71, label: 'Node 71' },

]

var nodes67=[
    { id: 1, label: 'Node 1' },
    { id: 2, label: 'Node 2' },
    { id: 3, label: 'Node 3' },
    { id: 48, label: 'Node 48' },
    { id: 49, label: 'Node 49' },
    { id: 50, label: 'Node 50' },
    { id: 51, label: 'Node 51' },
    { id: 64, label: 'Node 64' },
    { id: 65, label: 'Node 65' },
    { id: 70, label: 'Node 70' },
    { id: 71, label: 'Node 71' },
    { id: 72, label: 'Node 72' },
    { id: 73, label: 'Node 73' },

]

var nodes66=[
    { id: 1, label: 'Node 1' },
    { id: 2, label: 'Node 2' },
    { id: 3, label: 'Node 3' },
    { id: 48, label: 'Node 48' },
    { id: 49, label: 'Node 49' },
    { id: 50, label: 'Node 50' },
    { id: 51, label: 'Node 51' },
    { id: 64, label: 'Node 64' },
    { id: 65, label: 'Node 65' },
    { id: 70, label: 'Node 70' },
    { id: 71, label: 'Node 71' },
    { id: 72, label: 'Node 72' },
    { id: 73, label: 'Node 73' },

]


var nodes65=[
    { id: 1, label: 'Node 1' },
    { id: 2, label: 'Node 2' },
    { id: 3, label: 'Node 3' },
    { id: 48, label: 'Node 48' },
    { id: 49, label: 'Node 49' },
    { id: 50, label: 'Node 50' },
    { id: 51, label: 'Node 51' },
    { id: 64, label: 'Node 64' },
    { id: 65, label: 'Node 65' },
    { id: 70, label: 'Node 70' },
    { id: 71, label: 'Node 71' },
]

var nodes64=[
    { id: 1, label: 'Node 1' },
    { id: 2, label: 'Node 2' },
    { id: 3, label: 'Node 3' },
    { id: 48, label: 'Node 48' },
    { id: 49, label: 'Node 49' },
    { id: 50, label: 'Node 50' },
    { id: 51, label: 'Node 51' },
    { id: 64, label: 'Node 64' },
    { id: 65, label: 'Node 65' },
    { id: 66, label: 'Node 66' },
    { id: 67, label: 'Node 67' },
]

var nodes63=[
    { id: 1, label: 'Node 1' },
    { id: 2, label: 'Node 2' },
    { id: 3, label: 'Node 3' },
    { id: 48, label: 'Node 48' },
    { id: 49, label: 'Node 49' },
    { id: 50, label: 'Node 50' },
    { id: 51, label: 'Node 51' },
    { id: 64, label: 'Node 64' },
    { id: 65, label: 'Node 65' },
    { id: 66, label: 'Node 66' },
    { id: 67, label: 'Node 67' },
    { id: 68, label: 'Node 68' },
    { id: 69, label: 'Node 69' },


]

var nodes62=[
    { id: 1, label: 'Node 1' },
    { id: 2, label: 'Node 2' },
    { id: 3, label: 'Node 3' },
    { id: 48, label: 'Node 48' },
    { id: 49, label: 'Node 49' },
    { id: 50, label: 'Node 50' },
    { id: 51, label: 'Node 51' },
    { id: 64, label: 'Node 64' },
    { id: 65, label: 'Node 65' },
    { id: 66, label: 'Node 66' },
    { id: 67, label: 'Node 67' },
    { id: 68, label: 'Node 68' },
    { id: 69, label: 'Node 69' },


]

var nodes61=[
    { id: 1, label: 'Node 1' },
    { id: 2, label: 'Node 2' },
    { id: 3, label: 'Node 3' },
    { id: 48, label: 'Node 48' },
    { id: 49, label: 'Node 49' },
    { id: 50, label: 'Node 50' },
    { id: 51, label: 'Node 51' },
    { id: 64, label: 'Node 64' },
    { id: 65, label: 'Node 65' },
    { id: 66, label: 'Node 66' },
    { id: 67, label: 'Node 67' },

]

var nodes60=[
    { id: 1, label: 'Node 1' },
    { id: 2, label: 'Node 2' },
    { id: 3, label: 'Node 3' },
    { id: 48, label: 'Node 48' },
    { id: 49, label: 'Node 49' },
    { id: 50, label: 'Node 50' },
    { id: 51, label: 'Node 51' },
    { id: 64, label: 'Node 64' },
    { id: 65, label: 'Node 65' },
   
]

var nodes59=[
    { id: 1, label: 'Node 1' },
    { id: 2, label: 'Node 2' },
    { id: 3, label: 'Node 3' },
    { id: 48, label: 'Node 48' },
    { id: 49, label: 'Node 49' },
    { id: 50, label: 'Node 50' },
    { id: 51, label: 'Node 51' },
    { id: 52, label: 'Node 52' },
    { id: 53, label: 'Node 53' },
   
]

var nodes58=[
    { id: 1, label: 'Node 1' },
    { id: 2, label: 'Node 2' },
    { id: 3, label: 'Node 3' },
    { id: 48, label: 'Node 48' },
    { id: 49, label: 'Node 49' },
    { id: 50, label: 'Node 50' },
    { id: 51, label: 'Node 51' },
    { id: 52, label: 'Node 52' },
    { id: 53, label: 'Node 53' },
    { id: 60, label: 'Node 60' },
    { id: 61, label: 'Node 61' },
]

var nodes57=[
    { id: 1, label: 'Node 1' },
    { id: 2, label: 'Node 2' },
    { id: 3, label: 'Node 3' },
    { id: 48, label: 'Node 48' },
    { id: 49, label: 'Node 49' },
    { id: 50, label: 'Node 50' },
    { id: 51, label: 'Node 51' },
    { id: 52, label: 'Node 52' },
    { id: 53, label: 'Node 53' },
    { id: 60, label: 'Node 60' },
    { id: 61, label: 'Node 61' },
    { id: 62, label: 'Node 62' },
    { id: 63, label: 'Node 63' },


]

var nodes56=[
    { id: 1, label: 'Node 1' },
    { id: 2, label: 'Node 2' },
    { id: 3, label: 'Node 3' },
    { id: 48, label: 'Node 48' },
    { id: 49, label: 'Node 49' },
    { id: 50, label: 'Node 50' },
    { id: 51, label: 'Node 51' },
    { id: 52, label: 'Node 52' },
    { id: 53, label: 'Node 53' },
    { id: 60, label: 'Node 60' },
    { id: 61, label: 'Node 61' },
    { id: 62, label: 'Node 62' },
    { id: 63, label: 'Node 63' },


]

var nodes55=[
    { id: 1, label: 'Node 1' },
    { id: 2, label: 'Node 2' },
    { id: 3, label: 'Node 3' },
    { id: 48, label: 'Node 48' },
    { id: 49, label: 'Node 49' },
    { id: 50, label: 'Node 50' },
    { id: 51, label: 'Node 51' },
    { id: 52, label: 'Node 52' },
    { id: 53, label: 'Node 53' },
    { id: 60, label: 'Node 60' },
    { id: 61, label: 'Node 61' },


]

var nodes54=[
    { id: 1, label: 'Node 1' },
    { id: 2, label: 'Node 2' },
    { id: 3, label: 'Node 3' },
    { id: 48, label: 'Node 48' },
    { id: 49, label: 'Node 49' },
    { id: 50, label: 'Node 50' },
    { id: 51, label: 'Node 51' },
    { id: 52, label: 'Node 52' },
    { id: 53, label: 'Node 53' },
    { id: 54, label: 'Node 54' },
    { id: 55, label: 'Node 55' },


]

var nodes53=[
    { id: 1, label: 'Node 1' },
    { id: 2, label: 'Node 2' },
    { id: 3, label: 'Node 3' },
    { id: 48, label: 'Node 48' },
    { id: 49, label: 'Node 49' },
    { id: 50, label: 'Node 50' },
    { id: 51, label: 'Node 51' },
    { id: 52, label: 'Node 52' },
    { id: 53, label: 'Node 53' },
    { id: 54, label: 'Node 54' },
    { id: 55, label: 'Node 55' },
    { id: 58, label: 'Node 58' },
    { id: 59, label: 'Node 59' },

]

var nodes52=[
    { id: 1, label: 'Node 1' },
    { id: 2, label: 'Node 2' },
    { id: 3, label: 'Node 3' },
    { id: 48, label: 'Node 48' },
    { id: 49, label: 'Node 49' },
    { id: 50, label: 'Node 50' },
    { id: 51, label: 'Node 51' },
    { id: 52, label: 'Node 52' },
    { id: 53, label: 'Node 53' },
    { id: 54, label: 'Node 54' },
    { id: 55, label: 'Node 55' },
    { id: 58, label: 'Node 58' },
    { id: 59, label: 'Node 59' },

]

var nodes51=[
    { id: 1, label: 'Node 1' },
    { id: 2, label: 'Node 2' },
    { id: 3, label: 'Node 3' },
    { id: 48, label: 'Node 48' },
    { id: 49, label: 'Node 49' },
    { id: 50, label: 'Node 50' },
    { id: 51, label: 'Node 51' },
    { id: 52, label: 'Node 52' },
    { id: 53, label: 'Node 53' },
    { id: 54, label: 'Node 54' },
    { id: 55, label: 'Node 55' },
    { id: 56, label: 'Node 56' },
    { id: 57, label: 'Node 57' },

]


var nodes50=[
    { id: 1, label: 'Node 1' },
    { id: 2, label: 'Node 2' },
    { id: 3, label: 'Node 3' },
    { id: 48, label: 'Node 48' },
    { id: 49, label: 'Node 49' },
    { id: 50, label: 'Node 50' },
    { id: 51, label: 'Node 51' },
    { id: 52, label: 'Node 52' },
    { id: 53, label: 'Node 53' },
    { id: 54, label: 'Node 54' },
    { id: 55, label: 'Node 55' },
    { id: 56, label: 'Node 56' },
    { id: 57, label: 'Node 57' },

]

var nodes49=[
    { id: 1, label: 'Node 1' },
    { id: 2, label: 'Node 2' },
    { id: 3, label: 'Node 3' },
    { id: 48, label: 'Node 48' },
    { id: 49, label: 'Node 49' },
    { id: 50, label: 'Node 50' },
    { id: 51, label: 'Node 51' },
    { id: 52, label: 'Node 52' },
    { id: 53, label: 'Node 53' },
    { id: 54, label: 'Node 54' },
    { id: 55, label: 'Node 55' },

]

var nodes48=[
    { id: 1, label: 'Node 1' },
    { id: 2, label: 'Node 2' },
    { id: 3, label: 'Node 3' },
    { id: 48, label: 'Node 48' },
    { id: 49, label: 'Node 49' },
    { id: 50, label: 'Node 50' },
    { id: 51, label: 'Node 51' },
    { id: 52, label: 'Node 52' },
    { id: 53, label: 'Node 53' },

]


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