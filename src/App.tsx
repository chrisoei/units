import React from 'react';
import logo from './logo.svg';
import dxlx from './dxlx';
import {volumes} from './volume'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
            {volumes()}
        </p>
      </header>
    </div>
  );
}

export default App;
