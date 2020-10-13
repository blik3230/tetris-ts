import { Bitmap } from "../../components/Display/Display.types";
import { useCallback, useEffect, useRef, useState } from 'react';

export interface TetrisApi {
  toLeft(): void;
  toRight(): void;
}

type UseTetris = (width?: number, height?: number) => [Bitmap | null];

export enum bitmapColorEnum {
  empty,
  grey,
}

export const useTetris: UseTetris = (width = 10, height = 20) => {
  const [curY, setCurY] = useState(0);

  const [curX, setCurX] = useState(Math.ceil(width / 10));

  const [gamePile, setGamePile] = useState(new Array(height).fill(new Array(width).fill(bitmapColorEnum.empty)));

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
  }, [width]);

  const innerRef = useRef<any>(null);

  innerRef.current = {
    curX, curY,
  };

  const toDown = useCallback(() => {
    if(innerRef.current.curY + 1 >= height) {
      nextShapeStart();
      return;
    }

    setCurY(innerRef.current.curY + 1);
  }, [height, nextShapeStart]);

  useEffect(() => {
    let timerId: NodeJS.Timeout;

    const tick = () => {
      timerId = setTimeout(() => {
        console.log('tick', innerRef.current.curY);
        toDown();
        tick();
      }, 200);
    };

    tick();

    return () => clearTimeout(timerId);
  }, [toDown]);
  const shapeShoe: Bitmap = [
    [bitmapColorEnum.grey, bitmapColorEnum.empty],
    [bitmapColorEnum.grey, bitmapColorEnum.empty],
    [bitmapColorEnum.grey, bitmapColorEnum.grey],
  ];
  const bitmap = getBitmap(gamePile, shapeShoe, curY, curX);

  return [
    bitmap,
  ]
};

const getBitmap = (gamePile: Bitmap, curShape: bitmapColorEnum[][], curY: number, curX: number): Bitmap | null => {
  const newGamePile = [...gamePile];

  for(let shapeLineIndex = 0; shapeLineIndex < curShape.length; shapeLineIndex++ ) {
    let resultY = curY + shapeLineIndex;

    if(resultY > gamePile.length - 1) {
      continue;
    }

    const newLine = [
      ...gamePile[resultY]
    ];

    for(let shapeColumnIndex = 0; shapeColumnIndex < curShape[0].length; shapeColumnIndex++) {
      const item = newLine[curX + shapeColumnIndex];
      const shapeItem = curShape[shapeLineIndex][shapeColumnIndex];

      if(shapeItem !== bitmapColorEnum.empty && item !== bitmapColorEnum.empty) {
        return null;
      }

      newLine[curX + shapeColumnIndex] = shapeItem;
    }

    newGamePile[curY + shapeLineIndex] = newLine;
  }

  return newGamePile;
};

/*
* curY - не является начальной точкой для фигуры, фигура может заступать за его край.
* вращение фигуры происходит внутри квадрата 4 x 4. curY - является ореентиром и может
* позиционироваться относительно центра фигурі. Конечная позиция фигуры опредиляется с
* помощью сентрального ориентира (curX, curY) и лимитов игровова поля
*
* */

export default useTetris;