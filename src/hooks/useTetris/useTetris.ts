import { Bitmap } from "../../components/Display/Display.types";
import { useCallback, useEffect, useRef, useState } from 'react';
import shapes, { Shape, ShapeArr } from './shapes';
import { bitmapColorEnum } from './types';
import { getBitmap } from './helpers';

export interface TetrisApi {
  toLeft(): void;
  toRight(): void;
  toDown(): void;
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

export const useTetris: UseTetris = (width = 10, height = 20) => {
  const [curY, setCurY] = useState(0);
  const [speed, setSpeed] = useState(1);
  const [curX, setCurX] = useState(Math.ceil(width / 2));
  const [curShape, setCurShape] = useState<Shape>(shapes[getRandomShapeIndex()]);
  const [rotation, setRotation] = useState<number>(0);

  const [gamePile, setGamePile] = useState(new Array(height).fill(new Array(width).fill(bitmapColorEnum.empty)));

  const incrementSpeed = () => setSpeed(prevSpeed => prevSpeed + 1 > 10 ? 10 : prevSpeed + 1);
  const decrementSpeed = () => setSpeed(prevSpeed => prevSpeed - 1 < 1 ? 1 : prevSpeed - 1);

  const changeRotation = () => {
    setRotation(prevRotation => prevRotation + 1 <= 3 ? prevRotation + 1 : 0);
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
    setCurX(Math.ceil(width / 2));
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

    tick();

    return () => clearTimeout(timerId);
  }, [toDown]);

  const shapeArr: ShapeArr = curShape[rotation] || (rotation === 3 && curShape[1]) || curShape[0];

  const bitmap = getBitmap(gamePile, shapeArr, curY, curX);

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
    }
  ]
};

export default useTetris;