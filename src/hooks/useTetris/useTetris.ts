import { Bitmap } from "../../components/Display/Display.types";
import { useCallback, useEffect, useRef, useState } from 'react';
import shapes from './shapes';
import { bitmapItemEnum } from './types';
import { getBitmap, rotateBitmap } from './helpers';

export interface TetrisApi {
  toLeft(): void;
  toRight(): void;
  toDown(): void;
  toUp(): void;
  incrementSpeed(): void;
  decrementSpeed(): void;
  changeRotation(): void;

  speed: number;
  rotation: number;
}

type UseTetris = (width?: number, height?: number) => [
    Bitmap | null,
  TetrisApi,
];

const getRandomShapeIndex = () => Math.round(Math.random() * 123) % 7;

export const useTetris: UseTetris = (width = 11, height = 20) => {
  const [curY, setCurY] = useState(0);
  const [speed, setSpeed] = useState(1);
  const [curX, setCurX] = useState(Math.floor(width / 2));
  const [curShape, setCurShape] = useState<Bitmap>(shapes[getRandomShapeIndex()]);
  const [rotation, setRotation] = useState<number>(0);

  const [gamePile, setGamePile] = useState<Bitmap>(new Array(height).fill(new Array(width).fill(bitmapItemEnum.empty)));

  const incrementSpeed = () => setSpeed(prevSpeed => prevSpeed + 1 > 10 ? 10 : prevSpeed + 1);
  const decrementSpeed = () => setSpeed(prevSpeed => prevSpeed - 1 < 1 ? 1 : prevSpeed - 1);

  const changeRotation = () => {
    setCurShape(prevShape => rotateBitmap(prevShape));
  };

  const toRight = () => {
    setCurX(prevCurX => {
      return prevCurX + 1 < width ? prevCurX + 1 : prevCurX;
    })
  };

  const toLeft = () => {
    setCurX(prevCurX => {
      return prevCurX - 1 >= 0 ? prevCurX - 1 : 0;
    })
  };

  const nextShapeStart = useCallback(() => {
    setCurX(Math.floor(width / 2));
    setCurY(0);
    setCurShape(shapes[getRandomShapeIndex()])
  }, [width]);

  const innerRef = useRef<any>(null);

  innerRef.current = {
    curX, curY, speed,
  };

  const toDown = useCallback(() => {
    if (innerRef.current.curY + 1 >= height) {
      nextShapeStart();
      return;
    }

    setCurY(innerRef.current.curY + 1);
  }, [height, nextShapeStart]);

  const toUp = useCallback(() => {
    setCurY(innerRef.current.curY - 1 < 0 ? 0: innerRef.current.curY - 1);
  }, [height, nextShapeStart]);

  useEffect(() => {
    let timerId: NodeJS.Timeout;

    const tick = () => {
      const speed = innerRef.current.speed;
      const tickDelay = 1000 - (105 * (speed - 1));
      timerId = setTimeout(() => {
        console.log('tick', innerRef.current.curY);
        toDown();
        tick();
      }, tickDelay);
    };

    // tick();

    return () => clearTimeout(timerId);
  }, [toDown]);

  const bitmap = getBitmap(gamePile, curShape, curY, curX);

  return [
    bitmap,
    {
      speed,
      rotation,
      incrementSpeed,
      decrementSpeed,
      toLeft,
      toRight,
      toDown,
      changeRotation,
      toUp,
    }
  ]
};

export default useTetris;