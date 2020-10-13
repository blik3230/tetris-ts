import React, { useEffect } from 'react';
import Display from '../Display/Display';
import useTetris from '../../hooks/useTetris/useTetris';

interface Props {
  width: number;
  height: number;
}

const Tetris = (props: Props) => {
  const { width, height } = props;
  const [bitmap, tetrisApi] = useTetris(width, height);

  useEffect(() => {
    document.addEventListener('keydown', (e) => {
      console.log(e.code);
      switch (e.code) {
        case 'ArrowLeft':
            console.log('left', tetrisApi);
          if(tetrisApi && tetrisApi.toLeft) {
            tetrisApi.toLeft();
          }
          break;
        case 'ArrowRight':
            console.log('right')
          if(tetrisApi && tetrisApi.toRight) {
            tetrisApi.toRight();
          }
      }
    });
  }, []);

  return (
    <div className="Tetris">
      <button onClick={tetrisApi.incrementSpeed}>+</button>
      <span>{tetrisApi.speed}</span>
      <button onClick={tetrisApi.decrementSpeed}>-</button>

      <div className="Tetris__wrapDisplay">
        <Display bitmap={ bitmap }/>
      </div>
    </div>
  );
};

export default Tetris;
