import { Bitmap } from '../../components/Display/Display.types';
import { bitmapItemEnum } from './types';

export const getBitmapOld = (gamePile: Bitmap, curShape: bitmapItemEnum[][], curY: number, curX: number): Bitmap | null => {
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

      if (shapeItem !== bitmapItemEnum.empty && item !== bitmapItemEnum.empty) {
        return null;
      }

      newLine[curX + shapeColumnIndex] = shapeItem;
    }

    newGamePile[curY + shapeLineIndex] = newLine;
  }

  //newGamePile[curY][curX] = bitmapItemEnum.red;

  return newGamePile;
};

export const wrapShapeInSquare = (shape: Bitmap): Bitmap => {
  const side = shape.length > shape[0].length ? shape.length : shape[0].length;
  const resultBitmap = new Array(side).fill(null)
    .map(() => (new Array(side).fill(bitmapItemEnum.red)));

  const middleResultY = Math.ceil((side - 1) / 2);
  const middleResultX = Math.floor((side - 1) / 2);
  const shapeMiddleX = Math.floor((shape[0].length - 1) / 2);
  const shapeMiddleY = Math.floor((shape.length - 1) / 2);

  for (
    let shapeY = shape.length - 1, resultY = middleResultY + shapeMiddleY;
    shapeY >= 0;
    shapeY--, resultY--
  ) {

    for (
      let shapeX = 0, resultX = middleResultX - shapeMiddleX;
      shapeX <= shape[0].length - 1;
      shapeX++, resultX++
    ) {
      resultBitmap[resultY][resultX] = shape[shapeY][shapeX];
    }
  }

  return resultBitmap;
};

export const getBitmap = (gamePile: Bitmap, curShape: bitmapItemEnum[][], curY: number, curX: number): Bitmap | null => {
  const newGamePile = [...gamePile];
  const alignedShape = wrapShapeInSquare(curShape);

  for (let shapeLineRevertIndex = alignedShape.length - 1, i = 0; shapeLineRevertIndex >= 0; shapeLineRevertIndex--, i++) {
    let newGamePileLineIndex = curY - i;

    if (newGamePileLineIndex > gamePile.length - 1 || newGamePileLineIndex < 0) {
      console.log('continue');
      continue;
    }

    const newLine = [
      ...gamePile[newGamePileLineIndex]
    ];

    for (let shapeColumnIndex = 0; shapeColumnIndex < alignedShape[0].length; shapeColumnIndex++) {
      const item = newLine[curX + shapeColumnIndex];
      const shapeItem = alignedShape[shapeLineRevertIndex][shapeColumnIndex];

      if (shapeItem !== bitmapItemEnum.empty && item !== bitmapItemEnum.empty) {
        return null;
      }

      newLine[curX + shapeColumnIndex] = shapeItem;
    }

    newGamePile[curY + shapeLineRevertIndex] = newLine;
  }

  // newGamePile[curY][curX] = bitmapItemEnum.red;

  return newGamePile;
};

export const rotateBitmap = (bitmap: Bitmap) => {
  return bitmap[0].reduce((acc, _, columnIndex) => {
    const newLine = bitmap.map(l => l[columnIndex]).reverse();
    acc.push(newLine);
    return acc;
  }, [] as Bitmap);
}

/*
* curY - не является начальной точкой для фигуры, фигура может заступать за его край.
* вращение фигуры происходит внутри квадрата 4 x 4. curY - является ореентиром и может
* позиционироваться относительно центра фигурі. Конечная позиция фигуры опредиляется с
* помощью сентрального ориентира (curX, curY) и лимитов игровова поля
*
* */