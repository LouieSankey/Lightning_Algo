import React, { useEffect, useState } from 'react';
import './App.css';
import Jumble from '../Jumble/Jumble'
import Algorithm from '../Algorithm/Algorithm'
import STORE from '../STORE'
import MainContext from '../MainContext'
import Menu from '../Menu/Menu'
import moment from 'moment'
import AddAlgroithm from '../AddAlgorithm/AddAlgorithm'
import APIService from '../api_services'



function App() {

  //load algos into local storage for now to prototype keeping and storing time computations
  if (!localStorage.getItem("Algos")) {
    localStorage.setItem("Algos", JSON.stringify(STORE))
  }

  const example = [{
    algo_name: "Example Algorithm",
    algo_description: `Here you will see a description of the algorithm you've added.`,
    algo_example: "Here you will see any examples you've uploaded.",
    timeComplexity: "O(n)",
    spaceComplexity: "O(1)",
    algo_steps: [{
      id: '0',
      item: 'Example Step 1',
    },
    {
      id: '1',
      item: 'Example Step 2',
    }, {
      id: '2',
      item: 'Example Step 3',
    },
    {
      id: '3',
      item: 'Example Step 4',
    }, {
      id: '4',
      item: 'Example Step 5',
    }],
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
  const [currentProblemSet, setCurrentProblemSet] = useState("Create a New Algorithm Group, then add Algos with the Gear Icon")


  useEffect(() => {
    APIService.getAlgorithmsForProblemSet(currentProblemSet).then((res) => {
      if (res[0]) {
        setAlgosFromLocalStorage(res)
        updateSteps(res[0].algo_steps)
      }

    })
  }, [currentProblemSet])


  const onNextPressed = () => {
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

    const solveTimeWithPenalty = Math.round(solveTime.asSeconds()) + incorrectSteps * 60
    const newPotentialBest = Math.min(algosFromLocalStorage[algoIndex].best_plus_penalty, solveTimeWithPenalty)

    //temporarily from local storage
    const previousBest = algosFromLocalStorage[algoIndex].best_plus_penalty

    if (newPotentialBest < previousBest) {
      algosFromLocalStorage[algoIndex].best_plus_penalty = newPotentialBest
      algosFromLocalStorage[algoIndex].solve_time_best = Math.round(solveTime.asSeconds())
      algosFromLocalStorage[algoIndex].solve_time_penalty = incorrectSteps
    }

    // localStorage.setItem("Algos", JSON.stringify(algosFromLocalStorage))
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
    toggleAddModal: toggleAddModal,
    currentProblemSet: currentProblemSet,
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
            <h1 className="header-text">Algorithm Jumble</h1>
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
