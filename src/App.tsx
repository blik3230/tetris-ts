import React from 'react';
import './App.css';
import Tetris from './components/Tetris/Tetris';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Tetris width={11}  height={20} />
      </header>

    </div>
  );
}

export default App;
