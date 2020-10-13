import React  from 'react';
import Display from '../Display/Display';
import useTetris from '../../hooks/useTetris/useTetris';

interface Props {
  width: number;
  height: number;
}

const Tetris = (props: Props) => {
  const { width, height } = props;
  const [bitmap] = useTetris(width, height);

  return (
    <div className="Tetris">
      <div className="Tetris__wrapDisplay">
        <Display bitmap={ bitmap }/>
      </div>
    </div>
  );
};

export default Tetris;
