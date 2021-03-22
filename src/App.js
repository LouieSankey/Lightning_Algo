import React, { useState } from 'react';
import './App.css';
import Jumble from './Jumble/Jumble'
import Algorithm from './Algorithm/Algorithm'
import STORE from './STORE'
import MainContext from './MainContext'

function App() {

  
  const [algoIndex, setAlgoIndex] = useState(0)
 
  const onNextPressed = () => {
    if(algoIndex === STORE.length - 1){
      setAlgoIndex(0)
    }else{
      setAlgoIndex(algoIndex + 1)
    }
    
  }

  const contextParams = {
    currentAlgorithm: STORE[algoIndex],
    onNextPressed: onNextPressed
  }

  
  return (
    <MainContext.Provider value = {contextParams}>
    <div className="App">
      <header className="App-header">
        <h1>Algorithm Jumble</h1>
        <div className="row">
          <div className="column">
            <div className="description-container">
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
