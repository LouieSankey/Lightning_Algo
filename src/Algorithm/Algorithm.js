import React, { useContext } from 'react';
import './Algorithm.css';
import MainContext from '../MainContext'
import helpers from '../helpers'
import Complexities from '../Complexities'

function Algorithm() {

  const context = useContext(MainContext)
  const currentAlgorithm = context.currentAlgorithm

  return (
    <>
      <h2 className="algorithm-header">{currentAlgorithm.algo_name}</h2>
      <p className="algorithm-description">{currentAlgorithm.algo_description}</p>
      <h3 className="algorithm-header">Example</h3>
      <p className="algorithm-description">{currentAlgorithm.algo_example}</p>

      <div class="row">
        <div class="column">
          <h3 className="algorithm-header">Time</h3>
          <select name="runtimes" id="algo-time-complexities">
            {Object.keys(Complexities).map((key, i) => {
              return <option value={key}>{Complexities[key]}</option>
            })}
          </select>
        </div>

        <div class="column">
          <h3 className="algorithm-header">Space</h3>
          <select name="time-complexity" id="algo-space-complexities">
            {Object.keys(Complexities).map((key, i) => {
              return <option value={key}>{Complexities[key]}</option>
            })}
          </select>
        </div>
      </div>

      <h3 className="algorithm-header">Solve Time</h3>
      <p>Best: {currentAlgorithm.best_plus_penalty < 100000 && helpers.fmtMSS(currentAlgorithm.best_plus_penalty)}</p>
      <span className="penalty-time">{currentAlgorithm.solve_time_penalty > 0 ? `+ ${currentAlgorithm.solve_time_penalty}m penalty` : <br />}</span>
      <p>Current: <span> {context.currentSolveTime}</span></p>
      <p className="penalty-time">{context.currentPenalty}</p>
    </>
  );
}

export default Algorithm;
