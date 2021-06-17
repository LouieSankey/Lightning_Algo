import React, { useContext, useState } from "react";
import "./Algorithm.css";
import MainContext from "../MainContext";
import helpers from "../helpers";
import Complexities from "../Complexities";
import { useSelector, useDispatch } from "react-redux";

function Algorithm() {
  const algorithms = useSelector((state) => state.algorithms.value);
  const algoIndex = useSelector((state) => state.algoIndex.value);
  const currentAlgorithm = algorithms[algoIndex];

  const context = useContext(MainContext);

  const timeComplexityCorrect =
    currentAlgorithm.time_complexity === context.selectedTimeComplexity;
  const spaceComplexityCorrect =
    currentAlgorithm.space_complexity === context.selectedSpaceComplexity;

  return (
    <>
      <h2 className="algorithm-header">{currentAlgorithm.algo_name}</h2>
      <p className="algorithm-description">
        {currentAlgorithm.algo_description}
      </p>
      <h3 className="algorithm-header">Example</h3>
      <p className="algorithm-description">{currentAlgorithm.algo_example}</p>

      <div className="row">
        <div className="column">
          <h3
            className={`"algorithm-header no-margin-bottom " + ${
              timeComplexityCorrect ? " blue " : " red "
            } + ${context.correctOrderIndicator}`}
          >
            Time
          </h3>
          <select
            value={context.selectedTimeComplexity}
            onChange={(e) => context.setSelectedTimeComplexity(e.target.value)}
            name="runtimes"
            id="algo-time-complexities"
          >
            {Object.keys(Complexities).map((key, i) => {
              return (
                <option key={i} value={key}>
                  {Complexities[key]}
                </option>
              );
            })}
          </select>
        </div>

        <div className="column">
          <h3
            className={`"algorithm-header no-margin-bottom " + ${
              spaceComplexityCorrect ? " blue " : " red "
            } + ${context.correctOrderIndicator}`}
          >
            Space
          </h3>
          <select
            value={context.selectedSpaceComplexity}
            onChange={(e) => context.setSelectedSpaceComplexity(e.target.value)}
            name="time-complexity"
            id="algo-space-complexities"
          >
            {Object.keys(Complexities).map((key, i) => {
              return (
                <option key={i} value={key}>
                  {Complexities[key]}
                </option>
              );
            })}
          </select>
        </div>
      </div>

      <h3 className="algorithm-header">Solve Time</h3>

      <p>
        Best:{" "}
        {currentAlgorithm.best_plus_penalty < 100000 &&
          helpers.fmtMSS(currentAlgorithm.solve_time_best)}
      </p>
      {currentAlgorithm.solve_time_penalty > 0 ? (
        <span className="penalty-time">
          {`+${currentAlgorithm.solve_time_penalty}m penalty`}
          <img
            className="red-bolt"
            src={require("../Img/redboltarrow.png")}
            alt=""
          />
        </span>
      ) : (
        <br />
      )}
      <p>
        Current: <span> {context.currentSolveTime}</span>
      </p>
      {context.currentPenalty && (
        <>
          <p className="penalty-time">
            {context.currentPenalty}
            <span>
              <img
                className="red-bolt"
                src={require("../Img/redboltarrow.png")}
                alt=""
              />
            </span>
          </p>
        </>
      )}
    </>
  );
}

export default Algorithm;
