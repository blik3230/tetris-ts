import React, { useEffect, useState } from 'react';
import './App.css';
import Display from './components/Display/Display';
import Tetris from './classes/tetris/tetris';

function App() {

  const [screenData, setScreenData] = useState<Array<boolean[]>>([]);

  useEffect(() => {
    const tetris = new Tetris(12, 16, setScreenData);

    const handleKeyDown = (event: KeyboardEvent) => {
      const code = event.code;
      switch(code) {
        case 'ArrowLeft':
          tetris.toLeft();
          break;
        case 'ArrowRight':
          tetris.toRight();
          break;
        case 'ArrowDown':
          tetris.toBottom();
          break;
        case 'Space':
          tetris.toTern();
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="App">
      <Display screenData={ screenData }/>
    </div>
  );
}

export default App;
