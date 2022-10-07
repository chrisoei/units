import React from 'react';
import logo from './logo.svg';
import dxlx from './dxlx';
import {quart, volume} from './volume'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
            {quart()}
        </p>
      </header>
    </div>
  );
}

export default App;
