import React, { useState, useContext } from 'react';
import './Jumble.css';
import MainContext from '../MainContext'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';


function Jumble() {

  const currentAlgorithm = useContext(MainContext)
  const [steps, updateSteps] = useState(currentAlgorithm.items);

  const onDragEnd = (result) => {
    const items = Array.from(steps);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    updateSteps(items);
  }

  return (
    <>
      <h2 className="drag-list-header" >Drag the steps of the algorithm into the correct order.</h2>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="step">
          {(provided) => (
            <ul className="step" {...provided.droppableProps} ref={provided.innerRef}>
              {steps.map(({ id, name, thumb }, index) => {
                return (
                  <Draggable key={id} draggableId={id} index={index}>
                    {(provided) => (
                      <li key={id} ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                        <p>
                          {name}
                        </p>
                      </li>
                    )}
                  </Draggable>
                );
              })}
              {provided.placeholder}
            </ul>
          )}
        </Droppable>
      </DragDropContext>
    </>
  );

}

export default Jumble;
