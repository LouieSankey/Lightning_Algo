import React, { useEffect, useState } from 'react';
import './App.css';
import Jumble from '../Jumble/Jumble'
import Algorithm from '../Algorithm/Algorithm'
import MainContext from '../MainContext'
import Menu from '../Menu/Menu'
import moment from 'moment'
import AddAlgroithm from '../AddAlgorithm/AddAlgorithm'
import APIService from '../api_services'



function App() {


  const example = [{
    algo_name: "Example Algorithm",
    algo_description: `Here you will see a description of the algorithm you've added.`,
    algo_example: "Here you will see any examples you've uploaded.",
    timeComplexity: "O(n)",
    spaceComplexity: "O(1)",
    algo_steps: [{
      id: '0',
      item: 'Empty',
    }
    ],
    problem_set: "",
    solve_time_best: 0,
    solve_time_penalty: 0,
    best_plus_penalty: 0,
  }

  ]



  const [algoIndex, setAlgoIndex] = useState(0)
  const [algosFromLocalStorage, setAlgosFromLocalStorage] = useState(example)

  const [steps, updateSteps] = useState(example[0].algo_steps);
  const [correctOrderIndicator, setCorrectOrderIndicator] = useState("correctOrderIndicator")
  const [startTime, setStartTime] = useState(moment())
  const [currentSolveTime, setCurrentSolveTime] = useState("")
  const [currentPenalty, setCurrentPenalty] = useState("")
  const [toggleAddModal, setToggleAddModal] = useState(false)
  const [currentProblemSet, setCurrentProblemSet] = useState("Create a New Algorithm Set, then add Algos with the Gear Icon")


  const [selectedTimeComplexity, setSelectedTimeComplexity] = useState()
  const [selectedSpaceComplexity, setSelectedSpaceComplexity] = useState()

  useEffect(() => {
 
    APIService.getAlgorithmsForProblemSet(currentProblemSet).then((res) => {
      if (res[0]) {
        setAlgosFromLocalStorage(res)
        updateSteps(res[0].algo_steps)
      }else{
        setAlgosFromLocalStorage(example)
        updateSteps(example[0].algo_steps)
      }

    })
  }, [currentProblemSet])


  const onNextPressed = () => {
    setSelectedTimeComplexity("Select")
    setSelectedSpaceComplexity("Select")
    setStartTime(moment())
    setCurrentSolveTime("")
    setCurrentPenalty("")
    setCorrectOrderIndicator("correctOrderIndicator")
    if (algoIndex === algosFromLocalStorage.length - 1) {
      setAlgoIndex(0)
    } else {
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

    const timeComplexityPenalty = (algosFromLocalStorage[algoIndex].time_complexity === selectedTimeComplexity) ? 0 : 1
    const spaceComplexityPenalty = (algosFromLocalStorage[algoIndex].space_complexity === selectedSpaceComplexity) ? 0 : 1
    
    const addedPenalty = timeComplexityPenalty + spaceComplexityPenalty

    const solveTimeWithPenalty = Math.round(solveTime.asSeconds()) + (incorrectSteps * 60) + addedPenalty
    const newPotentialBest = Math.min(algosFromLocalStorage[algoIndex].best_plus_penalty, solveTimeWithPenalty)
    const previousBest = algosFromLocalStorage[algoIndex].best_plus_penalty

    if (newPotentialBest < previousBest) {

      algosFromLocalStorage[algoIndex].best_plus_penalty = newPotentialBest
      algosFromLocalStorage[algoIndex].solve_time_best = Math.round(solveTime.asSeconds())
      algosFromLocalStorage[algoIndex].solve_time_penalty = incorrectSteps + addedPenalty

      //need to write this to the DB
    
    }

    setAlgosFromLocalStorage(algosFromLocalStorage)
    setCurrentSolveTime([solveTime.minutes() + "m", solveTime.seconds() + "s"].join(' '))
    setCurrentPenalty(`+ ${incorrectSteps + addedPenalty}m penalty`)
    setCorrectOrderIndicator("")

  }


  const contextParams = {
    currentAlgorithm: algosFromLocalStorage[algoIndex],
    correctOrderIndicator: correctOrderIndicator,
    steps: steps,
    currentSolveTime: currentSolveTime,
    currentPenalty: currentPenalty,
    toggleAddModal: toggleAddModal,
    currentProblemSet: currentProblemSet,
    selectedTimeComplexity: selectedTimeComplexity,
    selectedSpaceComplexity: selectedSpaceComplexity,
    algosFromLocalStorage: algosFromLocalStorage,
    setAlgosFromLocalStorage: setAlgosFromLocalStorage,
    setSelectedTimeComplexity: setSelectedTimeComplexity,
    setSelectedSpaceComplexity: setSelectedSpaceComplexity,
    setCurrentProblemSet: setCurrentProblemSet,
    setToggleAddModal: setToggleAddModal,
    onNextPressed: onNextPressed,
    onCheckPressed: onCheckPressed,
    updateSteps: updateSteps

  }


  return (
    <MainContext.Provider value={contextParams}>
      <Menu></Menu>
      {toggleAddModal && <AddAlgroithm/>}
      <div className="app">
        <div className="main">
          <header>
            <h1 className="header-text"><span><img  alt=""/></span>Lightning A<span><img className="lightning" src={require('../Img/bolt.png')} alt=""/></span>go</h1>
            <h2 className="sub-header-text">{currentProblemSet}</h2>
          </header>
          <br />
          <section>
            <div className="main-row">
              <div className="main-column">
                <div className="algo-description">
                  <Algorithm />
                </div>
              </div>
              <div className="main-column">
                <Jumble />
              </div>
            </div>
          </section>
          <br />
          <footer>
          </footer>
        </div>
      </div>

    </MainContext.Provider>
  );
}

export default App;
