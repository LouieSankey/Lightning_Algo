import React, { useContext } from 'react';
import './Algorithm.css';
import MainContext from '../MainContext'
import helpers from '../helpers'

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
      <h3 className="algorithm-header">Time Complexity</h3>
      <h3 className="algorithm-header">Solve Time</h3>

      {/* using 100000 here for simplicity in place of something like Number.MAX_VALUE */}
      <p>Best: {currentAlgorithm.solveTime.best < 100000 && helpers.fmtMSS(currentAlgorithm.solveTime.best)}</p>
      <span className="penalty-time">{currentAlgorithm.solveTime.bestPenalty > 0 ? `+ ${currentAlgorithm.solveTime.bestPenalty}m penalty` : <br/>}</span>
      <p>Current: <span> {context.currentSolveTime}</span></p>
      <p className="penalty-time">{context.currentPenalty}</p> 
    </>
  );
}

export default Algorithm;
