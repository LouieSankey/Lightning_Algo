import React, { useState, useContext } from 'react';
import './AddAlgorithm.css'
import MainContext from '../MainContext'
import APIService from '../api_services'
import Complexities from '../Complexities'

const AddAlgorithm = () => {

    const context = useContext(MainContext)
    const [algoName, setAlgoName] = useState("")
    const [algoDescription, setAlgoDescription] = useState("")
    const [algoExample, setAlgoExample] = useState("")
    const [algoTimeComplexity, setAlgoTimeComplexity] = useState("Select")
    const [algoSpaceComplexity, setAlgoSpaceComplexity] = useState("Select")
    const [addAlgoSteps, setAlgoSteps] = useState("")

    function addAlgo() {

        let algoSteps = addAlgoSteps.split('\n').map((step, i) => { return { id: i + "", item: step } })
        const newAlgo = {
            algo_name: algoName,
            algo_description: algoDescription,
            algo_example: algoExample,
            time_complexity: algoTimeComplexity,
            space_complexity: algoSpaceComplexity,
            algo_steps: algoSteps,
            problem_set: context.currentProblemSet,
            solve_time_best: 1000000,
            solve_time_penalty: 0,
            best_plus_penalty: 1000000,
        }
        APIService.addAlgorithm(newAlgo).then(() => {
            context.setAlgosFromLocalStorage([...context.algosFromLocalStorage, newAlgo])
        })

        setAlgoName("")
        setAlgoDescription("")
        setAlgoExample("")
        setAlgoTimeComplexity("Select")
        setAlgoSpaceComplexity("Select")
        setAlgoSteps("")

    }

    return (
        <div className="modal">
            <h2>Add Algorithm - {context.currentProblemSet}</h2>
            <p className="patch-current-algorithm">Patch Current</p>
            <textarea className={"enter-algorithm-name"} onChange={(e) => setAlgoName(e.target.value)} placeholder="Name" rows="1" name="" id="" value={algoName} ></textarea>
            <textarea className={"enter-algorithm-description"} onChange={(e) => setAlgoDescription(e.target.value)} placeholder="Description" name="" id="" value={algoDescription} ></textarea>
            <textarea className={"enter-algorithm-example"} onChange={(e) => setAlgoExample(e.target.value)} value={algoExample} placeholder="Example" name="" id=""  ></textarea>

            <div class="row">
                <div class="column">
                    <label for="runtimes">Time</label>

                    <select name="runtimes" value={algoTimeComplexity} onChange={(e) => setAlgoTimeComplexity(e.target.value)} id="runtimes">
                        {Object.keys(Complexities).map((key, i) => {
                            return <option value={key}>{Complexities[key]}</option>
                        })}
                    </select>
                </div>
                <div class="column">
                    <label for="space-complexity">Space</label>

                    <select name="space-complexity" value={algoSpaceComplexity} onChange={(e) => setAlgoSpaceComplexity(e.target.value)} id="space-complexity">
                        {Object.keys(Complexities).map((key, i) => {
                            return <option value={key}>{Complexities[key]}</option>
                        })}
                    </select>
                </div>
            </div>
            <textarea className={"enter-algorithm-steps"} onChange={(e) => setAlgoSteps(e.target.value)} value={addAlgoSteps} placeholder="Steps - parsed by line" name="" id=""  ></textarea>
            <button className="add-algo-button" onClick={addAlgo}>Add</button>
        </div>
    );
};


export default AddAlgorithm;