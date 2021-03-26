import React, { useState} from 'react';
import './AddAlgorithm.css'


const AddAlgorithm = () => {

    return (
        <div className="modal">
            <h2>Add Algorithm - 25 Core CS Easy</h2>
            <p className="patch-current-algorithm">Patch Current</p>
            <textarea className={"enter-algorithm-name"} placeholder="Name" rows="1" name="" id=""  ></textarea>
            <textarea className={"enter-algorithm-description"} placeholder="Description" name="" id=""  ></textarea>
            <textarea className={"enter-algorithm-example"} placeholder="Example" name="" id=""  ></textarea>
            <label for="runtimes">Runtime</label>

            <select name="runtimes" id="runtimes">
                <option value="0(1)">O(1) - Constant</option>
                <option value=">O(log n)">O(log n) - Logarithmic</option>
                <option value="O(n)">O(n) - Linear</option>
                <option value="O(n log n)">O(n log n)	- Linearithmic</option>
                <option value="O(n2)">O(n2) - Quadratic</option>
                <option value="O(n3)">O(n3)	Cubic</option>
                <option value="O(n3)">O(2n)	Exponential</option>
                <option value="O(n!)">O(n!) - Factorial</option>
            </select>
            
            <textarea className={"enter-algorithm-steps"} placeholder="Steps - parsed by line" name="" id=""  ></textarea>
        <button className="add-algo-button">Add</button>
        </div>
    );
};


export default AddAlgorithm;