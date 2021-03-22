import React, { useState } from 'react';
import './App.css';
import Jumble from './Jumble/Jumble'
import Algorithm from './Algorithm/Algorithm'
import STORE from './STORE'
import MainContext from './MainContext'

function App() {

  const [currentAlgorithm, setCurrentAlgorithm] = useState(STORE.algo1)
  
  return (
    <MainContext.Provider value = {currentAlgorithm}>
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
