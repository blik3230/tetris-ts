import { bitmapColorEnum } from "./useTetris";

type ShapeArr = [
  [bitmapColorEnum, bitmapColorEnum, bitmapColorEnum, bitmapColorEnum],
  [bitmapColorEnum, bitmapColorEnum, bitmapColorEnum, bitmapColorEnum],
  [bitmapColorEnum, bitmapColorEnum, bitmapColorEnum, bitmapColorEnum],
  [bitmapColorEnum, bitmapColorEnum, bitmapColorEnum, bitmapColorEnum],
];

interface Shape {
  [1]: ShapeArr;
  [2]?: ShapeArr;
  [3]?: ShapeArr;
  [4]?: ShapeArr;
}



export const shapeO: Shape = {
  1: [
    [bitmapColorEnum.empty, bitmapColorEnum.empty, bitmapColorEnum.empty, bitmapColorEnum.empty],
    [bitmapColorEnum.empty, bitmapColorEnum.grey, bitmapColorEnum.grey, bitmapColorEnum.empty],
    [bitmapColorEnum.empty, bitmapColorEnum.grey, bitmapColorEnum.grey, bitmapColorEnum.empty],
    [bitmapColorEnum.empty, bitmapColorEnum.empty, bitmapColorEnum.empty, bitmapColorEnum.empty]
  ]
};


export const shapeI: Shape = {
  1: [
    [bitmapColorEnum.empty, bitmapColorEnum.empty, bitmapColorEnum.empty, bitmapColorEnum.empty],
    [bitmapColorEnum.empty, bitmapColorEnum.empty, bitmapColorEnum.empty, bitmapColorEnum.empty],
    [bitmapColorEnum.grey, bitmapColorEnum.grey, bitmapColorEnum.grey, bitmapColorEnum.grey],
    [bitmapColorEnum.empty, bitmapColorEnum.empty, bitmapColorEnum.empty, bitmapColorEnum.empty]
  ],
  2: [
    [bitmapColorEnum.empty, bitmapColorEnum.grey, bitmapColorEnum.empty, bitmapColorEnum.empty],
    [bitmapColorEnum.empty, bitmapColorEnum.grey, bitmapColorEnum.empty, bitmapColorEnum.empty],
    [bitmapColorEnum.empty, bitmapColorEnum.grey, bitmapColorEnum.empty, bitmapColorEnum.empty],
    [bitmapColorEnum.empty, bitmapColorEnum.grey, bitmapColorEnum.empty, bitmapColorEnum.empty]
  ]
};

export const shapeJ: Shape = {
  1: [
    [bitmapColorEnum.empty, bitmapColorEnum.empty, bitmapColorEnum.empty, bitmapColorEnum.empty],
    [bitmapColorEnum.empty, bitmapColorEnum.empty, bitmapColorEnum.grey, bitmapColorEnum.empty],
    [bitmapColorEnum.empty, bitmapColorEnum.empty, bitmapColorEnum.grey, bitmapColorEnum.empty],
    [bitmapColorEnum.empty, bitmapColorEnum.grey, bitmapColorEnum.grey, bitmapColorEnum.empty]
  ],
  2: [
    [bitmapColorEnum.empty, bitmapColorEnum.empty, bitmapColorEnum.empty, bitmapColorEnum.empty],
    [bitmapColorEnum.grey, bitmapColorEnum.empty, bitmapColorEnum.empty, bitmapColorEnum.empty],
    [bitmapColorEnum.grey, bitmapColorEnum.grey, bitmapColorEnum.grey, bitmapColorEnum.empty],
    [bitmapColorEnum.empty, bitmapColorEnum.empty, bitmapColorEnum.empty, bitmapColorEnum.empty],
  ],
  3: [
    [bitmapColorEnum.empty, bitmapColorEnum.empty, bitmapColorEnum.empty, bitmapColorEnum.empty],
    [bitmapColorEnum.empty, bitmapColorEnum.grey, bitmapColorEnum.grey, bitmapColorEnum.empty],
    [bitmapColorEnum.empty, bitmapColorEnum.grey, bitmapColorEnum.empty, bitmapColorEnum.empty],
    [bitmapColorEnum.empty, bitmapColorEnum.grey, bitmapColorEnum.empty, bitmapColorEnum.empty]
  ],
  4: [
    [bitmapColorEnum.empty, bitmapColorEnum.empty, bitmapColorEnum.empty, bitmapColorEnum.empty],
    [bitmapColorEnum.empty, bitmapColorEnum.grey, bitmapColorEnum.grey, bitmapColorEnum.grey],
    [bitmapColorEnum.empty, bitmapColorEnum.empty, bitmapColorEnum.empty, bitmapColorEnum.grey],
    [bitmapColorEnum.empty, bitmapColorEnum.empty, bitmapColorEnum.empty, bitmapColorEnum.empty],
  ]
};

export const shapeL: Shape = {
  1: [
    [bitmapColorEnum.empty, bitmapColorEnum.empty, bitmapColorEnum.empty, bitmapColorEnum.empty],
    [bitmapColorEnum.empty, bitmapColorEnum.grey, bitmapColorEnum.empty, bitmapColorEnum.empty],
    [bitmapColorEnum.empty, bitmapColorEnum.grey, bitmapColorEnum.empty, bitmapColorEnum.empty],
    [bitmapColorEnum.empty, bitmapColorEnum.grey, bitmapColorEnum.grey, bitmapColorEnum.empty],
  ],
  2: [
    [bitmapColorEnum.empty, bitmapColorEnum.empty, bitmapColorEnum.empty, bitmapColorEnum.empty],
    [bitmapColorEnum.grey, bitmapColorEnum.grey, bitmapColorEnum.grey, bitmapColorEnum.empty],
    [bitmapColorEnum.grey, bitmapColorEnum.empty, bitmapColorEnum.empty, bitmapColorEnum.empty],
    [bitmapColorEnum.empty, bitmapColorEnum.empty, bitmapColorEnum.empty, bitmapColorEnum.empty],
  ],
  3: [
    [bitmapColorEnum.empty, bitmapColorEnum.empty, bitmapColorEnum.empty, bitmapColorEnum.empty],
    [bitmapColorEnum.empty, bitmapColorEnum.grey, bitmapColorEnum.grey, bitmapColorEnum.empty],
    [bitmapColorEnum.empty, bitmapColorEnum.empty, bitmapColorEnum.grey, bitmapColorEnum.empty],
    [bitmapColorEnum.empty, bitmapColorEnum.empty, bitmapColorEnum.grey, bitmapColorEnum.empty],
  ],
  4: [
    [bitmapColorEnum.empty, bitmapColorEnum.empty, bitmapColorEnum.empty, bitmapColorEnum.empty],
    [bitmapColorEnum.empty, bitmapColorEnum.empty, bitmapColorEnum.empty, bitmapColorEnum.grey],
    [bitmapColorEnum.empty, bitmapColorEnum.grey, bitmapColorEnum.grey, bitmapColorEnum.grey],
    [bitmapColorEnum.empty, bitmapColorEnum.empty, bitmapColorEnum.empty, bitmapColorEnum.empty],
  ]
};

export const shapeZ: Shape = {
  1: [
    [bitmapColorEnum.empty, bitmapColorEnum.empty, bitmapColorEnum.empty, bitmapColorEnum.empty],
    [bitmapColorEnum.grey, bitmapColorEnum.grey, bitmapColorEnum.empty, bitmapColorEnum.empty],
    [bitmapColorEnum.empty, bitmapColorEnum.grey, bitmapColorEnum.grey, bitmapColorEnum.empty],
    [bitmapColorEnum.empty, bitmapColorEnum.empty, bitmapColorEnum.empty, bitmapColorEnum.empty],
  ],
  2: [
    [bitmapColorEnum.empty, bitmapColorEnum.empty, bitmapColorEnum.empty, bitmapColorEnum.empty],
    [bitmapColorEnum.empty, bitmapColorEnum.empty, bitmapColorEnum.grey, bitmapColorEnum.empty],
    [bitmapColorEnum.empty, bitmapColorEnum.grey, bitmapColorEnum.grey, bitmapColorEnum.empty],
    [bitmapColorEnum.empty, bitmapColorEnum.grey, bitmapColorEnum.empty, bitmapColorEnum.empty],
  ],
};

export const shapeS: Shape = {
  1: [
    [bitmapColorEnum.empty, bitmapColorEnum.empty, bitmapColorEnum.empty, bitmapColorEnum.empty],
    [bitmapColorEnum.empty, bitmapColorEnum.grey, bitmapColorEnum.grey, bitmapColorEnum.empty],
    [bitmapColorEnum.empty, bitmapColorEnum.grey, bitmapColorEnum.empty, bitmapColorEnum.empty],
    [bitmapColorEnum.grey, bitmapColorEnum.empty, bitmapColorEnum.empty, bitmapColorEnum.empty],
  ],
  2: [
    [bitmapColorEnum.empty, bitmapColorEnum.empty, bitmapColorEnum.empty, bitmapColorEnum.empty],
    [bitmapColorEnum.empty, bitmapColorEnum.grey, bitmapColorEnum.empty, bitmapColorEnum.empty],
    [bitmapColorEnum.empty, bitmapColorEnum.grey, bitmapColorEnum.grey, bitmapColorEnum.empty],
    [bitmapColorEnum.empty, bitmapColorEnum.empty, bitmapColorEnum.grey, bitmapColorEnum.empty],
  ]
};

export const shapeT: Shape = {
  1: [
    [bitmapColorEnum.empty, bitmapColorEnum.empty, bitmapColorEnum.empty, bitmapColorEnum.empty],
    [bitmapColorEnum.empty, bitmapColorEnum.grey, bitmapColorEnum.empty, bitmapColorEnum.empty],
    [bitmapColorEnum.grey, bitmapColorEnum.grey, bitmapColorEnum.grey, bitmapColorEnum.empty],
    [bitmapColorEnum.empty, bitmapColorEnum.empty, bitmapColorEnum.empty, bitmapColorEnum.empty],
  ],
  2: [
    [bitmapColorEnum.empty, bitmapColorEnum.empty, bitmapColorEnum.empty, bitmapColorEnum.empty],
    [bitmapColorEnum.empty, bitmapColorEnum.grey, bitmapColorEnum.empty, bitmapColorEnum.empty],
    [bitmapColorEnum.empty, bitmapColorEnum.grey, bitmapColorEnum.grey, bitmapColorEnum.empty],
    [bitmapColorEnum.empty, bitmapColorEnum.grey, bitmapColorEnum.empty, bitmapColorEnum.empty],
  ],
  3: [
    [bitmapColorEnum.empty, bitmapColorEnum.empty, bitmapColorEnum.empty, bitmapColorEnum.empty],
    [bitmapColorEnum.grey, bitmapColorEnum.grey, bitmapColorEnum.grey, bitmapColorEnum.empty],
    [bitmapColorEnum.empty, bitmapColorEnum.grey, bitmapColorEnum.empty, bitmapColorEnum.empty],
    [bitmapColorEnum.empty, bitmapColorEnum.empty, bitmapColorEnum.empty, bitmapColorEnum.empty],
  ],
  4: [
    [bitmapColorEnum.empty, bitmapColorEnum.empty, bitmapColorEnum.empty, bitmapColorEnum.empty],
    [bitmapColorEnum.empty, bitmapColorEnum.empty, bitmapColorEnum.grey, bitmapColorEnum.empty],
    [bitmapColorEnum.empty, bitmapColorEnum.grey, bitmapColorEnum.grey, bitmapColorEnum.empty],
    [bitmapColorEnum.empty, bitmapColorEnum.empty, bitmapColorEnum.grey, bitmapColorEnum.empty],
  ]
};

const shapes: Shape[] = [shapeO, shapeJ, shapeL, shapeI, shapeZ, shapeS, shapeT];

export default shapes;

