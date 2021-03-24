import React, { useState } from 'react';
import './App.css';
import Jumble from '../Jumble/Jumble'
import Algorithm from '../Algorithm/Algorithm'
import STORE from '../STORE'
import MainContext from '../MainContext'

function App() {
  
  const [algoIndex, setAlgoIndex] = useState(0)
  const [steps, updateSteps] = useState(STORE[algoIndex].steps);
  const [showHide, setShowHide] = useState("hide")

 
  const onNextPressed = () => {
    setShowHide("hide")
    if(algoIndex === STORE.length - 1){
      setAlgoIndex(0)
    }else{
      setAlgoIndex(algoIndex + 1)
    }
  }

  const onCheckPressed = () => {
    setShowHide("")
  }

  const contextParams = {
    currentAlgorithm: STORE[algoIndex],
    showHide: showHide,
    steps: steps,
    onNextPressed: onNextPressed,
    onCheckPressed: onCheckPressed,
    updateSteps: updateSteps,
  }

  
  return (
    <MainContext.Provider value = {contextParams}>
    <div className="app">
      <header className="app-header">
        <h1>Algorithm Jumble</h1>
        <div className="row">
          <div className="column">
            <div className="algo-description">
              <Algorithm/>
            </div>
          </div>
          <div className="column">
          <Jumble/>
          </div>
        </div>
      </header>
    </div>
    </MainContext.Provider>
  );
}

export default App;
