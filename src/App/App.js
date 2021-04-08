import React, { useEffect, useState } from 'react';
import './App.css';
import Jumble from '../Jumble/Jumble'
import Algorithm from '../Algorithm/Algorithm'
import MainContext from '../MainContext'
import Menu from '../Menu/Menu'
import moment from 'moment'
import AddAlgroithm from '../AddAlgorithm/AddAlgorithm'
import APIService from '../api_services'
import { useSelector, useDispatch } from 'react-redux'
import { reset, increment } from '../features/updateAlgoIndexSlice'
import { updateSteps } from '../features/updateStepsSlice'
import { updateAlgorithms, setExampleAlgorithm } from '../features/algorithmSlice'


function App() {

  const currentProblemSet = useSelector((state) => state.currentProblemSet.value)
  const algoIndex = useSelector((state) => state.algoIndex.value)
  const steps = useSelector((state) => state.steps.value)
  const algorithms = useSelector((state) => state.algorithms.value)

  const dispatch = useDispatch()

  const [correctOrderIndicator, setCorrectOrderIndicator] = useState("correctOrderIndicator")
  const [startTime, setStartTime] = useState(moment())
  const [currentSolveTime, setCurrentSolveTime] = useState("")
  const [currentPenalty, setCurrentPenalty] = useState("")
  const [toggleAddModal, setToggleAddModal] = useState(false)
  const [selectedTimeComplexity, setSelectedTimeComplexity] = useState()
  const [selectedSpaceComplexity, setSelectedSpaceComplexity] = useState()

  useEffect(() => {
 
    APIService.getAlgorithmsForProblemSet(currentProblemSet).then((res) => {
      if (res[0]) {
        dispatch(updateAlgorithms(res))
        dispatch(updateSteps(res[0].algo_steps))
      }else{
        dispatch(reset())
        dispatch(setExampleAlgorithm())
        dispatch(updateSteps(algorithms[0].algo_steps))
      }

    })
  }, [currentProblemSet])


  const OnNextPressed = () => {
    setSelectedTimeComplexity("Select")
    setSelectedSpaceComplexity("Select")
    setStartTime(moment())
    setCurrentSolveTime("")
    setCurrentPenalty("")
    setCorrectOrderIndicator("correctOrderIndicator")

    if (algoIndex === algorithms.length - 1) {
        dispatch(reset())
      } else {
        dispatch(increment())
      }
 
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const OnCheckPressed = () => {

    const solveTime = moment.duration(moment().diff(startTime));
    let incorrectSteps = 0
    steps.forEach((step, i) => {
      incorrectSteps += (step.id !== i + "") ? 1 : 0
    })

    const timeComplexityPenalty = (algorithms[algoIndex].time_complexity === selectedTimeComplexity) ? 0 : 1
    const spaceComplexityPenalty = (algorithms[algoIndex].space_complexity === selectedSpaceComplexity) ? 0 : 1

    const addedPenalty = timeComplexityPenalty + spaceComplexityPenalty

    const solveTimeWithPenalty = Math.round(solveTime.asSeconds()) + (incorrectSteps * 60) + addedPenalty
    const newPotentialBest = Math.min(algorithms[algoIndex].best_plus_penalty, solveTimeWithPenalty)
    const previousBest = algorithms[algoIndex].best_plus_penalty

    if (newPotentialBest < previousBest) {

      // algorithms[algoIndex].best_plus_penalty = newPotentialBest
      // algorithms[algoIndex].solve_time_best = Math.round(solveTime.asSeconds())
      // algorithms[algoIndex].solve_time_penalty = incorrectSteps + addedPenalty

      //need to write this to the DB
    
    }

    dispatch(updateAlgorithms(algorithms))
    setCurrentSolveTime([solveTime.minutes() + "m", solveTime.seconds() + "s"].join(' '))
    setCurrentPenalty(`+ ${incorrectSteps + addedPenalty}m penalty`)
    setCorrectOrderIndicator("")

  }


  const contextParams = {
    correctOrderIndicator: correctOrderIndicator,
    currentSolveTime: currentSolveTime,
    currentPenalty: currentPenalty,
    toggleAddModal: toggleAddModal,
    selectedTimeComplexity: selectedTimeComplexity,
    selectedSpaceComplexity: selectedSpaceComplexity,
    setSelectedTimeComplexity: setSelectedTimeComplexity,
    setSelectedSpaceComplexity: setSelectedSpaceComplexity,
    setToggleAddModal: setToggleAddModal,
    onNextPressed: OnNextPressed,
    onCheckPressed: OnCheckPressed,

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
