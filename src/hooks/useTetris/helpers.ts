import { Bitmap } from '../../components/Display/Display.types';
import { bitmapColorEnum } from './types';

export const getBitmap = (gamePile: Bitmap, curShape: bitmapColorEnum[][], curY: number, curX: number): Bitmap | null => {
  const newGamePile = [...gamePile];

  for (let shapeLineIndex = 0; shapeLineIndex < curShape.length; shapeLineIndex++) {
    let resultY = curY + shapeLineIndex;

    if (resultY > gamePile.length - 1) {
      continue;
    }

    const newLine = [
      ...gamePile[resultY]
    ];

    for (let shapeColumnIndex = 0; shapeColumnIndex < curShape[0].length; shapeColumnIndex++) {
      const item = newLine[curX + shapeColumnIndex];
      const shapeItem = curShape[shapeLineIndex][shapeColumnIndex];

      if (shapeItem !== bitmapColorEnum.empty && item !== bitmapColorEnum.empty) {
        return null;
      }

      newLine[curX + shapeColumnIndex] = shapeItem;
    }

    newGamePile[curY + shapeLineIndex] = newLine;
  }

  //newGamePile[curY][curX] = bitmapColorEnum.red;

  return newGamePile;
};

/*
* curY - не является начальной точкой для фигуры, фигура может заступать за его край.
* вращение фигуры происходит внутри квадрата 4 x 4. curY - является ореентиром и может
* позиционироваться относительно центра фигурі. Конечная позиция фигуры опредиляется с
* помощью сентрального ориентира (curX, curY) и лимитов игровова поля
*
* */