import {getStep} from './components/api/index'

var nodes1=[
    { id: 1, label: 'Node 1' }
]
console.log("here")
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
var array = [5,4,6,8,9,2,1,3,0,7]
const break_array = [];
const full_array = [];
function step1(count)
{

    let arr = [];
    if(count==0)
    {
        getStep(1,array)
        .then((data) => { break_array.push(data.break)
          full_array.push(data.full)})
          .then(console.log(break_array))
          .then(()=>{

                console.log(break_array[0][1])
                nodes1[0]['label']=break_array[0]
            }
          )
    }
    else if(count==18)
    {
        nodes1[0]['label']='Changed'

    }
    // to change label of node

    return nodes1
}


function step2()
{
    return nodes2
}


function step3()
{
    return nodes3
}


function step4()
{
    return nodes4
}


function step5()
{
    return nodes5
}


function step6()
{
    return nodes6
}


function step7()
{
    return nodes7
}


function step8()
{
    return nodes8
}


function step9()
{
    return nodes9
}


function step10()
{
    return nodes10
}

export {step1,step2,step3,step4,step5,step6,step7,step8,step9,step10};