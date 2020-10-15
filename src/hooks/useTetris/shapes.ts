import { bitmapItemEnum } from './types';
import { Bitmap } from '../../components/Display/Display.types';


export const shapeO: Bitmap = [
  [bitmapItemEnum.grey, bitmapItemEnum.grey],
  [bitmapItemEnum.grey, bitmapItemEnum.grey],
];


export const shapeI: Bitmap = [
  [bitmapItemEnum.grey],
  [bitmapItemEnum.grey],
  [bitmapItemEnum.grey],
  [bitmapItemEnum.grey],
];

export const shapeJ: Bitmap = [
    [bitmapItemEnum.empty, bitmapItemEnum.grey],
    [bitmapItemEnum.empty, bitmapItemEnum.grey],
    [bitmapItemEnum.grey, bitmapItemEnum.grey],
];

export const shapeL: Bitmap = [
  [bitmapItemEnum.grey, bitmapItemEnum.empty],
  [bitmapItemEnum.grey, bitmapItemEnum.empty],
  [bitmapItemEnum.grey, bitmapItemEnum.grey],
];

export const shapeZ: Bitmap = [
  [bitmapItemEnum.grey, bitmapItemEnum.grey, bitmapItemEnum.empty],
  [bitmapItemEnum.empty, bitmapItemEnum.grey, bitmapItemEnum.grey],
];

export const shapeS: Bitmap = [
  [bitmapItemEnum.empty, bitmapItemEnum.grey, bitmapItemEnum.grey],
  [bitmapItemEnum.grey, bitmapItemEnum.grey, bitmapItemEnum.empty],
];

export const shapeT: Bitmap = [
  [bitmapItemEnum.empty, bitmapItemEnum.grey, bitmapItemEnum.empty, bitmapItemEnum.empty],
  [bitmapItemEnum.grey, bitmapItemEnum.grey, bitmapItemEnum.grey, bitmapItemEnum.empty],
];

const shapes: Bitmap[] = [shapeO, shapeJ, shapeL, shapeI, shapeZ, shapeS, shapeT];

export default shapes;

