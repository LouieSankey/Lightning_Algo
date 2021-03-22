import React from 'react';
import './App.css';
import Jumble from './Jumble/Jumble'
import Algorithm from './Algorithm/Algorithm'
import STORE from './STORE'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Algorithm Jumble</h1>
        <div className="row">
          <div className="column">
            <div className="description-container">
              <Algorithm description={STORE.algo1.description}/>
            </div>
          </div>
          <div className="column">
          <Jumble items={STORE.algo1.items}/>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
