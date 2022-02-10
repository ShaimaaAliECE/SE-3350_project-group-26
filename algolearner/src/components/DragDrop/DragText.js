import React from 'react';
import {useDrag} from 'react-dnd';

function DragText({id,number}) {
    //true if dragging, drag references element which is being dragged
    const [{isDragging}, drag] = useDrag(() => ({
        type: "text",
        item: {id: id},
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        }),
    }));

  return <h4 ref={drag} style={{border: isDragging ? "5px solid pink" : "0px", margin:'5px'}}>{number}</h4>;
}

export default DragText;
