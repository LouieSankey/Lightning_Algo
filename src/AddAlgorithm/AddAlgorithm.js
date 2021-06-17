import React, { useState, useContext } from "react";
import "./AddAlgorithm.css";
import MainContext from "../MainContext";
import APIService from "../api_services";
import Complexities from "../Complexities";
import { useSelector, useDispatch } from "react-redux";
import {
  updateAlgorithms,
  setExampleAlgorithm,
} from "../features/algorithmSlice";

const AddAlgorithm = () => {
  const context = useContext(MainContext);

  const dispatch = useDispatch();

  const [algoName, setAlgoName] = useState("");
  const [algoDescription, setAlgoDescription] = useState("");
  const [algoExample, setAlgoExample] = useState("");
  const [algoTimeComplexity, setAlgoTimeComplexity] = useState("Select");
  const [algoSpaceComplexity, setAlgoSpaceComplexity] = useState("Select");
  const [addAlgoSteps, setAlgoSteps] = useState("");
  const [addButtonEnabled, setAddButtonEnabled] = useState(true);

  const currentProblemSet = useSelector(
    (state) => state.currentProblemSet.value
  );

  const algorithms = useSelector((state) => state.algorithms.value);
  const algoIndex = useSelector((state) => state.algoIndex.value);
  const currentAlgorithm = algorithms[algoIndex];

  console.log(currentProblemSet);

  function addAlgo() {
    let algoSteps = addAlgoSteps
      .split("\n")
      .filter((step) => {
        return step.trim() !== "";
      })
      .map((step, i) => {
        return { id: i + "", item: step };
      });
    const newAlgo = {
      algo_name: algoName,
      algo_description: algoDescription,
      algo_example: algoExample,
      time_complexity: algoTimeComplexity,
      space_complexity: algoSpaceComplexity,
      algo_steps: algoSteps,
      problem_set: currentProblemSet,
      solve_time_best: 1000000,
      solve_time_penalty: 0,
      best_plus_penalty: 1000000,
    };

    APIService.addAlgorithm(newAlgo).then(() => {
      dispatch(updateAlgorithms([...algorithms, newAlgo]));
    });

    setAlgoName("");
    setAlgoDescription("");
    setAlgoExample("");
    setAlgoTimeComplexity("Select");
    setAlgoSpaceComplexity("Select");
    setAlgoSteps("");
  }

  const loadCurrentAlgo = () => {
    setAddButtonEnabled(!addButtonEnabled);
    const cur = currentAlgorithm;

    setAlgoName(cur.algo_name);
    setAlgoDescription(cur.algo_description);
    setAlgoExample(cur.algo_example);
    setAlgoTimeComplexity(cur.time_complexity);
    setAlgoSpaceComplexity(cur.space_complexity);

    let result = "";
    let steps = [...cur.algo_steps];
    steps.sort(function (a, b) {
      return a.id - b.id;
    });
    steps.forEach((step) => {
      result += step.item + "\n";
    });
    setAlgoSteps(result);
  };

  const patchAlgo = () => {
    let algoSteps = addAlgoSteps
      .split("\n")
      .filter((step) => {
        return step.trim() !== "";
      })
      .map((step, i) => {
        return { id: i + "", item: step };
      });
    const newAlgo = {
      id: currentAlgorithm.id,
      algo_name: algoName,
      algo_description: algoDescription,
      algo_example: algoExample,
      time_complexity: algoTimeComplexity,
      space_complexity: algoSpaceComplexity,
      algo_steps: algoSteps,
      problem_set: currentProblemSet,
      solve_time_best: 1000000,
      solve_time_penalty: 0,
      best_plus_penalty: 1000000,
    };
    APIService.patchAlgorithm(newAlgo);

    setAlgoName("");
    setAlgoDescription("");
    setAlgoExample("");
    setAlgoTimeComplexity("Select");
    setAlgoSpaceComplexity("Select");
    setAlgoSteps("");
  };

  return (
    <div className="modal">
      <h2>Add Algorithm - {context.currentProblemSet}</h2>
      <p className="patch-current-algorithm" onClick={loadCurrentAlgo}>
        Patch Current
      </p>
      <textarea
        className={"enter-algorithm-name"}
        onChange={(e) => setAlgoName(e.target.value)}
        placeholder="Name"
        rows="1"
        name=""
        id=""
        value={algoName}
      ></textarea>
      <textarea
        className={"enter-algorithm-description"}
        onChange={(e) => setAlgoDescription(e.target.value)}
        placeholder="Description"
        name=""
        id=""
        value={algoDescription}
      ></textarea>
      <textarea
        className={"enter-algorithm-example"}
        onChange={(e) => setAlgoExample(e.target.value)}
        value={algoExample}
        placeholder="Example"
        name=""
        id=""
      ></textarea>

      <div className="row">
        <div className="column">
          <label htmlFor="runtimes">Time</label>

          <select
            name="runtimes"
            value={algoTimeComplexity}
            onChange={(e) => setAlgoTimeComplexity(e.target.value)}
            id="runtimes"
          >
            {Object.keys(Complexities).map((key, i) => {
              return (
                <option key={key} value={key}>
                  {Complexities[key]}
                </option>
              );
            })}
          </select>
        </div>
        <div className="column">
          <label htmlFor="space-complexity">Space</label>

          <select
            name="space-complexity"
            value={algoSpaceComplexity}
            onChange={(e) => setAlgoSpaceComplexity(e.target.value)}
            id="space-complexity"
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
      <textarea
        className={"enter-algorithm-steps"}
        onChange={(e) => setAlgoSteps(e.target.value)}
        value={addAlgoSteps}
        placeholder="Steps - parsed by line"
        name=""
        id=""
      ></textarea>
      <button
        className={
          "add-algo-button " + (addButtonEnabled ? " enabled " : " disabled ")
        }
        onClick={addAlgo}
      >
        Add
      </button>
      <button
        className={
          "add-algo-button " + (addButtonEnabled ? " disabled " : " enabled ")
        }
        onClick={patchAlgo}
      >
        Patch
      </button>
    </div>
  );
};

export default AddAlgorithm;
