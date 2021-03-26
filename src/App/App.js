import React, { useState } from 'react';
import './App.css';
import Jumble from '../Jumble/Jumble'
import Algorithm from '../Algorithm/Algorithm'
import STORE from '../STORE'
import MainContext from '../MainContext'
import Menu from '../Menu/Menu'
import moment from 'moment'
require('dotenv').config()


function App() {
  
  //load algos into local storage for now to prototype keeping and storing time computations
  if(!localStorage.getItem("Algos")){
    localStorage.setItem("Algos", JSON.stringify(STORE))
  }


  const [algoIndex, setAlgoIndex] = useState(0)
  const [algosFromLocalStorage, setAlgosFromLocalStorage] = useState(JSON.parse(localStorage.getItem("Algos")))
  const [steps, updateSteps] = useState(algosFromLocalStorage[algoIndex].steps);
  const [correctOrderIndicator, setCorrectOrderIndicator] = useState("correctOrderIndicator")
  const [startTime, setStartTime] = useState(moment())
  const [currentSolveTime, setCurrentSolveTime] = useState("")
  const [currentPenalty, setCurrentPenalty] = useState("")
 
  const onNextPressed = () => {
    setStartTime(moment())
    setCurrentSolveTime("")
    setCurrentPenalty("")
    setCorrectOrderIndicator("correctOrderIndicator")
    if(algoIndex === STORE.length - 1){
      setAlgoIndex(0)
    }else{
      setAlgoIndex(algoIndex + 1)
    }
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const onCheckPressed = () => {
   
    const solveTime = moment.duration(moment().diff(startTime));
    let incorrectSteps = 0
    steps.forEach((step, i) => {
      incorrectSteps += (step.id !== i + "") ? 1 : 0
    })

    const solveTimeWithPenalty = Math.round(solveTime.asSeconds()) + incorrectSteps * 60
    const newPotentialBest = Math.min(STORE[algoIndex].solveTime.bestTotal, solveTimeWithPenalty)

    //temporarily from local storage
    const previousBest = algosFromLocalStorage[algoIndex].solveTime.bestTotal

    if(newPotentialBest < previousBest){
      algosFromLocalStorage[algoIndex].solveTime.bestTotal = newPotentialBest
      algosFromLocalStorage[algoIndex].solveTime.best = Math.round(solveTime.asSeconds())
      algosFromLocalStorage[algoIndex].solveTime.bestPenalty = incorrectSteps
    }

    localStorage.setItem("Algos", JSON.stringify(algosFromLocalStorage))
    setAlgosFromLocalStorage(algosFromLocalStorage)
    setCurrentSolveTime([solveTime.minutes() + "m", solveTime.seconds() + "s"].join(' '))
    setCurrentPenalty(`+ ${incorrectSteps}m penalty`)
    setCorrectOrderIndicator("")

  }


  const contextParams = {
    currentAlgorithm: algosFromLocalStorage[algoIndex],
    correctOrderIndicator: correctOrderIndicator,
    steps: steps,
    currentSolveTime: currentSolveTime,
    currentPenalty: currentPenalty,
    onNextPressed: onNextPressed,
    onCheckPressed: onCheckPressed,
    updateSteps: updateSteps
  }

  
  return (
    <MainContext.Provider value = {contextParams}>
      <Menu></Menu>
    <div className="app">
      <div className="main">
        <header>
        <h1 className="header-text">Algorithm Jumble</h1>
        <h2 className="sub-header-text">Top 25 Core CS Easy</h2>
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
