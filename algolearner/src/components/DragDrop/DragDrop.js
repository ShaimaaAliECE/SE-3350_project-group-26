import React, {useState, useEffect, useLayoutEffect} from 'react';
import DragText from './DragText'
import './DragDrop.css'
import {useDrop} from 'react-dnd'
import {Typography} from '@mui/material'

function DragDrop({NumberList,doTwoz,getNumList}) {

    
    const [isLoading,setIsLoading] = useState(true);
    const [doTwo,setDoTwo] = useState(doTwoz);
    
    //Boards
    const [board,setBoard] = useState([]);
    const [board2,setBoard2] = useState([]);
    const counter=0;
       

    //Dragging functions
    const [{isOver}, drop] = useDrop(() => ({
        accept: "text",
        drop: (item) => addTextToBoard(item.id,1),
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
        }),

        

    }))

    const [{isOverv2}, drop2] = useDrop(() => ({
        accept: "text",
        drop: (item) => addTextToBoard(item.id,2),
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
        }),

        

    }))

    //Add to board function
    const addTextToBoard = (id,num) => {
        const numberList = NumberList.filter((number) => id === number.id);
        
        //Specify depending on boards
        if (num==1) setBoard([numberList[0]])
        else setBoard2([numberList[0]])
        

    }

  return (
    <>
        <div className='total'>
            <div className='text'> {isLoading ? (NumberList.map((number) => { return <DragText number={number.number} id={number.id} ></DragText>})) : (<h4>No Data</h4>)}</div>
            <div className='boards'>
                {   
                    doTwo ? (
                        <div>
                            <div className='board-text'>
                                <div className='board' id='check1' ref={drop}>
                                    {board.map((number) => {
                                                return <DragText number={number.number} id={number.id} ></DragText>
                                    })}
                                
                                </div>
                                <Typography variant='subtitle'>Node {NumberList[0].node}</Typography>
                            </div>
                            
                            <div className='board-text'>
                                <div className='board' id='check2' ref={drop2}>
                                    {board2.map((number) => {
                                        return <DragText number={number.number} id={number.id} ></DragText>
                                    })}
                        
                                </div>
                                <Typography variant='subtitle'>Node {NumberList[1].node}</Typography>
                            </div>


                    </div>

                        
                    ) : (
                        <div>
                            <div className='board' id='check1' ref={drop}>
                                {board.map((number) => {
                                            return <DragText number={number.number} id={number.id} ></DragText>
                                })}</div>
                            <Typography variant='subtitle'>Node {NumberList[0].node}</Typography>
                        </div>)
                }
            </div>


        </div>
    </>


  );
}

export default DragDrop;
