import React, { useEffect, useState } from 'react';
import './App.css';
import Display from './components/Display/Display';
import Tetris from './tetris/tetris';

function App() {

  const [screenData, setScreenData] = useState<Array<boolean[]>>([]);

  useEffect(() => {
    const tetris = new Tetris(10, 16, setScreenData);

    const handleKeyDown = (event: KeyboardEvent) => {
      const code = event.code;
      console.log(code);
      switch(code) {
        case 'ArrowLeft':
          tetris.onLeft();
          break;
        case 'ArrowRight':
          tetris.onRight();
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
