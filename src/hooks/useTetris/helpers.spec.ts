import { shapeI, shapeJ, shapeZ } from "./shapes";
import { bitmapItemEnum } from './types';
import { wrapShapeInSquare, rotateBitmap } from "./helpers";
import { Bitmap } from '../../components/Display/Display.types';


describe('rotateBitmap rotates shapes as expected', () => {

  const casesData: [string, Bitmap, Bitmap][] = [
    [
      'shapeI',
      shapeI,
      [
        [bitmapItemEnum.grey, bitmapItemEnum.grey, bitmapItemEnum.grey, bitmapItemEnum.grey]
      ]
    ],
    [
      'shapeJ',
      shapeJ,
      [
        [bitmapItemEnum.grey, bitmapItemEnum.empty, bitmapItemEnum.empty],
        [bitmapItemEnum.grey, bitmapItemEnum.grey, bitmapItemEnum.grey],
      ]
    ],
    [
      'rotated shapeJ',
      rotateBitmap(shapeJ),
      [
        [bitmapItemEnum.grey, bitmapItemEnum.grey],
        [bitmapItemEnum.grey, bitmapItemEnum.empty],
        [bitmapItemEnum.grey, bitmapItemEnum.empty],
      ]
    ],
  ];

  it.each(casesData)('%s', (_, shape, expectedBitmap) => {
    const result = rotateBitmap(shape);
    expect(result).toEqual(expectedBitmap);
  });
});

describe('wrapShapeInSquare places shape in the middle of the grid 4 by 4', () => {

  const casesData: [string, Bitmap, Bitmap][] = [
    [
      'shapeI',
      shapeI,
      [
        [bitmapItemEnum.empty, bitmapItemEnum.grey, bitmapItemEnum.empty, bitmapItemEnum.empty],
        [bitmapItemEnum.empty, bitmapItemEnum.grey, bitmapItemEnum.empty, bitmapItemEnum.empty],
        [bitmapItemEnum.empty, bitmapItemEnum.grey, bitmapItemEnum.empty, bitmapItemEnum.empty],
        [bitmapItemEnum.empty, bitmapItemEnum.grey, bitmapItemEnum.empty, bitmapItemEnum.empty],
      ]
    ],
    [
      'rotated shapeI',
      rotateBitmap(shapeI),
      [
        [bitmapItemEnum.empty, bitmapItemEnum.empty, bitmapItemEnum.empty, bitmapItemEnum.empty],
        [bitmapItemEnum.empty, bitmapItemEnum.empty, bitmapItemEnum.empty, bitmapItemEnum.empty],
        [bitmapItemEnum.grey, bitmapItemEnum.grey, bitmapItemEnum.grey, bitmapItemEnum.grey],
        [bitmapItemEnum.empty, bitmapItemEnum.empty, bitmapItemEnum.empty, bitmapItemEnum.empty],
      ]
    ],
    [
      'shapeZ',
      shapeZ,
      [
        [bitmapItemEnum.grey, bitmapItemEnum.grey, bitmapItemEnum.empty],
        [bitmapItemEnum.empty, bitmapItemEnum.grey, bitmapItemEnum.grey],
        [bitmapItemEnum.empty, bitmapItemEnum.empty, bitmapItemEnum.empty],
      ]
    ],
    [
      'rotated shapeZ',
      rotateBitmap(shapeZ),
      [
        [bitmapItemEnum.empty, bitmapItemEnum.empty, bitmapItemEnum.grey],
        [bitmapItemEnum.empty, bitmapItemEnum.grey, bitmapItemEnum.grey],
        [bitmapItemEnum.empty, bitmapItemEnum.grey, bitmapItemEnum.empty],
      ]
    ],
  ];

  it.each(casesData)('%s', (_, shape, expectedBitmap) => {
    const result = wrapShapeInSquare(shape);
    expect(result).toEqual(expectedBitmap);
  });
});