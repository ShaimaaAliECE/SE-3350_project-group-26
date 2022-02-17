import {getStep} from '../components/api/index'


var nodes1=[
    { id: 1, label: 'Node 1' },
    { id: 2, label: 'Node 2' },
    { id: 3, label: 'Node 3' },
]
//console.log("here")
//console.log(nodes1[0]['label']='4,5')
//nodes1[0]['label']='4,5'// to change label of node
var nodes2=[
    { id: 1, label: 'Node 1' },
    { id: 2, label: 'Node 2' },
    { id: 3, label: 'Node 3' },
]
var nodes3=[
    { id: 1, label: 'Node 1' },
    { id: 2, label: 'Node 2' },
    { id: 3, label: 'Node 3' },
    { id: 4, label: 'Node 4' },
    { id: 5, label: 'Node 5' },
]

var nodes4=[
    { id: 1, label: 'Node 1' },
    { id: 2, label: 'Node 2' },
    { id: 3, label: 'Node 3' },
    { id: 4, label: 'Node 4' },
    { id: 5, label: 'Node 5' },
    { id: 6, label: 'Node 6' },
    { id: 7, label: 'Node 7' },
]


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
]

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
    
]

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
var array
 function setArray(arr)
 {
    array=arr
 }
 const full_array = [];

console.log(array)
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
    if(count==18)
    {
        getStep(11,array)
        .then((data) => { break_array.push(data.break)
          full_array.push(data.full)})
          .then(()=>{
                console.log(full_array)
                nodes1[0]['label']=full_array[0][8].toString()
            }
          )
    }
    // to change label of node

    return nodes1
}


function step2(count)
{
    const break_array = [];
const full_array = [];
    if(count==1)
    {
        getStep(1,array)
        .then((data) => { break_array.push(data.break)
          full_array.push(data.full)})
          .then(console.log(break_array))
          .then(()=>{

               // console.log(break_array[0][0])
                //nodes2[0]['label']=break_array[0][0].toString()
                nodes2[0]['label']=nodes1[0]['label']
                nodes2[1]['label']=break_array[0][0].toString()
                nodes2[2]['label']=break_array[0][1].toString()
                console.log('Done')

            }
          )
    }

    if(count==9)
    {
        getStep(7,array)
        .then((data) => { break_array.push(data.break)
          full_array.push(data.full)})
          .then(console.log(break_array))
          .then(()=>{

               console.log('COunt9')
                console.log(full_array)
                nodes2[0]['label']=nodes1[0]['label']
                nodes2[1]['label']=full_array[0][3].toString()
                nodes2[2]['label']=nodes2[2]['label']
                console.log('Done')

            }
          )
    }

    if(count==17)
    {
        getStep(9,array)
        .then((data) => { break_array.push(data.break)
          full_array.push(data.full)})
          .then(console.log(break_array))
          .then(()=>{

               console.log('COunt17')
                console.log(full_array)
                nodes2[0]['label']=nodes1[0]['label']
                nodes2[1]['label']=nodes2[1]['label']
                nodes2[2]['label']=full_array[0][7].toString()

            }
          )
    }

    return nodes2
}


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
        getStep(4,array)
        .then((data) => { break_array.push(data.break)
          full_array.push(data.full)})
          .then(()=>{

                console.log(break_array)
                nodes3[0]['label']=nodes1[0]['label']
                nodes3[1]['label']=nodes2[1]['label']
                nodes3[2]['label']=nodes2[2]['label']
                nodes3[3]['label']=full_array[0][1].toString()
                nodes3[4]['label']=nodes3[4]['label']
                
            }
          )
    }

    if(count==8)
    {
        console.log('COUNT8')
        getStep(6,array)
        .then((data) => { break_array.push(data.break)
          full_array.push(data.full)})
          .then(()=>{

                console.log(full_array)
                nodes3[0]['label']=nodes1[0]['label']
                nodes3[1]['label']=nodes2[1]['label']
                nodes3[2]['label']=nodes2[2]['label']
                nodes3[3]['label']=nodes3[3]['label']
                nodes3[4]['label']=full_array[0][2].toString()
                
            }
          )
    }
    return nodes3
}


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

                //console.log(break_array)
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
        console.log('Here156465465')
        getStep(4,array)
        .then((data) => { break_array.push(data.break)
          full_array.push(data.full)})
          .then(()=>{

                console.log(full_array[0][0].toString())
                nodes4[0]['label']=nodes1[0]['label']
                nodes4[1]['label']=nodes2[1]['label']
                nodes4[2]['label']=nodes2[2]['label']
                nodes4[3]['label']=nodes3[3]['label']
                nodes4[4]['label']=nodes3[4]['label']
                nodes4[5]['label']=full_array[0][0].toString()
                nodes4[6]['label']=nodes4[6]['label']

            }
          )
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

                //console.log(full_array)
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

function step6(count)
{
    const full_array = [];
    const break_array = [];
    
    if(count==7)
    {
        console.log('COUNT6')
        getStep(5,array)
        .then((data) => { break_array.push(data.break)
          full_array.push(data.full)})
          .then(()=>{
                console.log('COUNT7')
                console.log(break_array)
                nodes6[0]['label']=nodes1[0]['label']
                nodes6[1]['label']=nodes2[1]['label']
                nodes6[2]['label']=nodes2[2]['label']
                nodes6[3]['label']=nodes3[3]['label']
                nodes6[4]['label']=nodes3[4]['label']
                nodes6[5]['label']=break_array[0][0].toString()
                nodes6[6]['label']=break_array[0][1].toString()

            }
          )
    }

    return nodes6
}


function step7(count)
{
    
    const full_array = [];
    const break_array = [];
    
    if(count==10)
    {
        getStep(6,array)
        .then((data) => { break_array.push(data.break)
          full_array.push(data.full)})
          .then(()=>{

               console.log('COunt10')
                console.log(break_array)
                nodes7[0]['label']=nodes1[0]['label']
                nodes7[1]['label']=nodes2[1]['label']
                nodes7[2]['label']=nodes2[2]['label']
                nodes7[3]['label']=break_array[0][0].toString()
                nodes7[4]['label']=break_array[0][1].toString()
            }
          )
    }

    if(count==14)
    {
        getStep(8,array)
        .then((data) => { break_array.push(data.break)
          full_array.push(data.full)})
          .then(()=>{

               console.log('COunt14')
                console.log(full_array)
                nodes7[0]['label']=nodes1[0]['label']
                nodes7[1]['label']=nodes2[1]['label']
                nodes7[2]['label']=nodes2[2]['label']
                nodes7[3]['label']=full_array[0][5].toString()
                nodes7[4]['label']=nodes7[4]['label']
               
            }
          )
    }

    if(count==16)
    {
        getStep(9,array)
        .then((data) => { break_array.push(data.break)
          full_array.push(data.full)})
          .then(()=>{

               console.log('COunt16')
                console.log(full_array)
                nodes7[0]['label']=nodes1[0]['label']
                nodes7[1]['label']=nodes2[1]['label']
                nodes7[2]['label']=nodes2[2]['label']
                nodes7[3]['label']=nodes7[3]['label']
                nodes7[4]['label']=full_array[0][6].toString()
               
            }
          )
    }

    return nodes7
}


function step8(count)
{
    const full_array = [];
    const break_array = [];
    
    if(count==11)
    {
        getStep(7,array)
        .then((data) => { break_array.push(data.break)
          full_array.push(data.full)})
          .then(()=>{

               console.log('COunt11')
                console.log(break_array)
                nodes8[0]['label']=nodes1[0]['label']
                nodes8[1]['label']=nodes2[1]['label']
                nodes8[2]['label']=nodes2[2]['label']
                nodes8[3]['label']=nodes7[3]['label']
                nodes8[4]['label']=nodes7[4]['label']
                nodes8[5]['label']=break_array[0][0].toString()
                nodes8[6]['label']=break_array[0][1].toString()
            }
          )
    }

    if(count==13)
    {
        getStep(8,array)
        .then((data) => { break_array.push(data.break)
          full_array.push(data.full)})
          .then(()=>{

               console.log('COunt13')
                console.log(full_array)
                nodes8[0]['label']=nodes1[0]['label']
                nodes8[1]['label']=nodes2[1]['label']
                nodes8[2]['label']=nodes2[2]['label']
                nodes8[3]['label']=nodes7[3]['label']
                nodes8[4]['label']=nodes7[4]['label']
                nodes8[5]['label']=full_array[0][4].toString()
                nodes8[6]['label']=nodes8[6]['label']
                
            }
          )
    }

    return nodes8
}


function step9(count)
{

    const full_array = [];
    const break_array = [];
    
    if(count==12)
    {
        getStep(8,array)
        .then((data) => { break_array.push(data.break)
          full_array.push(data.full)})
          .then(()=>{

               console.log('COunt12')
                console.log(break_array)
                nodes9[0]['label']=nodes1[0]['label']
                nodes9[1]['label']=nodes2[1]['label']
                nodes9[2]['label']=nodes2[2]['label']
                nodes9[3]['label']=nodes7[3]['label']
                nodes9[4]['label']=nodes7[4]['label']
                nodes9[5]['label']=nodes8[5]['label']
                nodes9[6]['label']=nodes8[6]['label']
                nodes9[7]['label']=break_array[0][1].toString()
                nodes9[8]['label']=break_array[0][0].toString()
            }
          )
    }

    return nodes9
}


function step10(count)
{
    const full_array = [];
    const break_array = [];

    if(count==15)
    {
        getStep(9,array)
        .then((data) => { break_array.push(data.break)
          full_array.push(data.full)})
          .then(()=>{

               console.log('COunt15')
                console.log(break_array)
                nodes10[0]['label']=nodes1[0]['label']
                nodes10[1]['label']=nodes2[1]['label']
                nodes10[2]['label']=nodes2[2]['label']
                nodes10[3]['label']=nodes7[3]['label']
                nodes10[4]['label']=nodes7[4]['label']
                nodes10[5]['label']=break_array[0][0].toString()
                nodes10[6]['label']=break_array[0][1].toString()
            }
          )
    }

    return nodes10
}

export {step1,step2,step3,step4,step5,step6,step7,step8,step9,step10,setArray};