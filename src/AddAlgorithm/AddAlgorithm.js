import React, { useState, useContext } from 'react';
import './AddAlgorithm.css'
import MainContext from '../MainContext'
import APIService from '../api_services'
import Complexities from '../Complexities'

const AddAlgorithm = () => {

    const context = useContext(MainContext)
    const [addAlgoName, setAlgoName] = useState("")
    const [addAlgoDescription, setAlgoDescription] = useState("")
    const [addAlgoExample, setAlgoExample] = useState("")
    const [addAlgoTimeComplexity, setAlgoTimeComplexity] = useState("0(1)")
    const [addAlgoSpaceComplexity, setAlgoSpaceComplexity] = useState("0(1)")
    const [addAlgoSteps, setAlgoSteps] = useState("")

    function addAlgo() {

        let algoSteps = addAlgoSteps.split('\n').map((step, i) => { return { id: i + "", item: step } })
        const params = {
            algo_name: addAlgoName,
            algo_description: addAlgoDescription,
            algo_example: addAlgoExample,
            time_complexity: addAlgoTimeComplexity,
            space_complexity: addAlgoSpaceComplexity,
            algo_steps: algoSteps,
            problem_set: context.currentProblemSet,
            solve_time_best: 1000000,
            solve_time_penalty: 0,
            best_plus_penalty: 1000000,
        }
        APIService.addAlgorithm(params)
    }

    return (
        <div className="modal">
            <h2>Add Algorithm - 25 Core CS Easy</h2>
            <p className="patch-current-algorithm">Patch Current</p>
            <textarea className={"enter-algorithm-name"} onChange={(e) => setAlgoName(e.target.value)} placeholder="Name" rows="1" name="" id=""  ></textarea>
            <textarea className={"enter-algorithm-description"} onChange={(e) => setAlgoDescription(e.target.value)} placeholder="Description" name="" id=""  ></textarea>
            <textarea className={"enter-algorithm-example"} onChange={(e) => setAlgoExample(e.target.value)} placeholder="Example" name="" id=""  ></textarea>

            <div class="row">
                <div class="column">
                    <label for="runtimes">Time</label>

                    <select name="runtimes" value={addAlgoTimeComplexity} onChange={(e) => setAlgoTimeComplexity(e.target.value)} id="runtimes">
                        {Object.keys(Complexities).map((key, i) => {
                            return <option value={key}>{Complexities[key]}</option>
                        })}
                    </select>
                </div>
                <div class="column">
                    <label for="space-complexity">Space</label>

                    <select name="space-complexity" value={addAlgoSpaceComplexity} onChange={(e) => setAlgoSpaceComplexity(e.target.value)} id="space-complexity">
                        {Object.keys(Complexities).map((key, i) => {
                            return <option value={key}>{Complexities[key]}</option>
                        })}
                    </select>
                </div>
            </div>
            <textarea className={"enter-algorithm-steps"} onChange={(e) => setAlgoSteps(e.target.value)} placeholder="Steps - parsed by line" name="" id=""  ></textarea>
            <button className="add-algo-button" onClick={addAlgo}>Add</button>
        </div>
    );
};


export default AddAlgorithm;