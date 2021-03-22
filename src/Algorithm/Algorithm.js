import React, { useContext } from 'react';
import './Algorithm.css';
import MainContext from '../MainContext'

function Algorithm() {

const context = useContext(MainContext)
const currentAlgorithm = context.currentAlgorithm


  return (
    <>
    
      <h2 className="algorithm-header">{currentAlgorithm.description.name}</h2>
      <p className="algorithm-description">{currentAlgorithm.description.summary}</p>
      <h3 className="algorithm-header">Example</h3>
      <p className="algorithm-description">{currentAlgorithm.description.input}</p>
      <p className="algorithm-description">{currentAlgorithm.description.output}</p>
      <p className="algorithm-description">{currentAlgorithm.description.explanation}</p>
      <div className="row">
        <div className="column"><button className="submit-button">CHECK</button></div>
        <div className="column"><button className="next-button" onClick={context.onNextPressed}>NEXT</button></div>
      </div>
     
    </>
  );
}

export default Algorithm;
