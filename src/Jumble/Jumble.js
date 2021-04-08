import React, { useState, useEffect, useContext } from 'react';
import './Jumble.css';
import MainContext from '../MainContext'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { updateSteps } from '../features/updateStepsSlice'
import { useSelector, useDispatch } from 'react-redux'

function Jumble() {

  const context = useContext(MainContext)
  const dispatch = useDispatch()
  const steps = useSelector((state) => state.steps.value)
  const algorithms = useSelector((state) => state.algorithms.value)
  const algoIndex =  useSelector((state) => state.algoIndex.value)
  const currentAlgorithm = algorithms[algoIndex]

  useEffect(() => {
    if (currentAlgorithm.algo_steps) {
      dispatch(updateSteps([...shuffleSteps(currentAlgorithm.algo_steps)]))
    }
  }, [currentAlgorithm])

  function shuffleSteps(array) {
    array = array.slice()
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      if(array[i] && array[j])
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array
  }

  const onDragEnd = (result) => {

    const localSteps = Array.from(steps);
    const [reorderedItem] = localSteps.splice(result.source.index, 1);
    localSteps.splice(result.destination.index, 0, reorderedItem);
    dispatch(updateSteps(localSteps))

  }


  return (
    <>
      <h2 className="drag-list-header" >Drag the steps of the algorithm into the correct order.</h2>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="step">
          {(provided) => (
            <ul className="step" {...provided.droppableProps} ref={provided.innerRef}>
              {steps.map(({ id, item }, index) => {
                return (
                  <Draggable key={id} draggableId={id} index={index}>
                    {(provided) => (
                      <>
                        <li key={id} ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}
                          className={(id == index ? " blue " : " red ") + context.correctOrderIndicator}>
                          <p>
                            {item}
                          </p>
                        </li>


                      </>

                    )}
                  </Draggable>
                );
              })}
              {provided.placeholder}
            </ul>
          )}
        </Droppable>
      </DragDropContext>
      <div className="next-check-buttons-row">
        <div className="next-check-buttons-column"><button className="submit-button" onClick={context.onCheckPressed}>CHECK</button></div>
        <div className="next-check-buttons-column"><button className="next-button" onClick={context.onNextPressed}>NEXT</button></div>
      </div>
    </>
  );

}

export default Jumble;
