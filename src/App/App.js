import React, { useState } from 'react';
import './App.css';
import Jumble from '../Jumble/Jumble'
import Algorithm from '../Algorithm/Algorithm'
import STORE from '../STORE'
import MainContext from '../MainContext'
import Menu from '../Menu/Menu'

function App() {
  
  const [algoIndex, setAlgoIndex] = useState(0)
  const [steps, updateSteps] = useState(STORE[algoIndex].steps);
  const [correctOrderIndicator, setCorrectOrderIndicator] = useState("hide")

 
  const onNextPressed = () => {
    setCorrectOrderIndicator("hide")
    if(algoIndex === STORE.length - 1){
      setAlgoIndex(0)
    }else{
      setAlgoIndex(algoIndex + 1)
    }
  }

  const onCheckPressed = () => {
    setCorrectOrderIndicator("")
  }

  const contextParams = {
    currentAlgorithm: STORE[algoIndex],
    correctOrderIndicator: correctOrderIndicator,
    steps: steps,
    onNextPressed: onNextPressed,
    onCheckPressed: onCheckPressed,
    updateSteps: updateSteps,
  }

  
  return (
    <MainContext.Provider value = {contextParams}>
      <Menu></Menu>
    <div className="app">
      <div className="main">
        <header>
        <h1 className="header-text">Algorithm Jumble</h1>
        <h2 className="sub-header-text">Problem Set: Top 25 Core CS - Easy</h2>
        </header>
        <br/>
        <section>
        <div className="main-row">
          <div className="main-column">
            <div className="algo-description">
              <Algorithm/>
            </div>
          </div>
          <div className="main-column">
          <Jumble/>
          </div>
        </div>
        </section>
        <br/>
   <footer>
  </footer>
      </div>
    </div>

    </MainContext.Provider>
  );
}

export default App;
