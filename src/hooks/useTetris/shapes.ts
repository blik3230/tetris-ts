import { bitmapColorEnum } from './types';

export type ShapeArr = [
  [bitmapColorEnum, bitmapColorEnum, bitmapColorEnum, bitmapColorEnum],
  [bitmapColorEnum, bitmapColorEnum, bitmapColorEnum, bitmapColorEnum],
  [bitmapColorEnum, bitmapColorEnum, bitmapColorEnum, bitmapColorEnum],
  [bitmapColorEnum, bitmapColorEnum, bitmapColorEnum, bitmapColorEnum],
];

export type Shape = ShapeArr[];


export const shapeO: Shape = [
  [
    [bitmapColorEnum.empty, bitmapColorEnum.empty, bitmapColorEnum.empty, bitmapColorEnum.empty],
    [bitmapColorEnum.empty, bitmapColorEnum.grey, bitmapColorEnum.grey, bitmapColorEnum.empty],
    [bitmapColorEnum.empty, bitmapColorEnum.grey, bitmapColorEnum.grey, bitmapColorEnum.empty],
    [bitmapColorEnum.empty, bitmapColorEnum.empty, bitmapColorEnum.empty, bitmapColorEnum.empty]
  ]
];


export const shapeI: Shape = [
  [
    [bitmapColorEnum.empty, bitmapColorEnum.empty, bitmapColorEnum.empty, bitmapColorEnum.empty],
    [bitmapColorEnum.empty, bitmapColorEnum.empty, bitmapColorEnum.empty, bitmapColorEnum.empty],
    [bitmapColorEnum.grey, bitmapColorEnum.grey, bitmapColorEnum.grey, bitmapColorEnum.grey],
    [bitmapColorEnum.empty, bitmapColorEnum.empty, bitmapColorEnum.empty, bitmapColorEnum.empty]
  ],
  [
    [bitmapColorEnum.empty, bitmapColorEnum.grey, bitmapColorEnum.empty, bitmapColorEnum.empty],
    [bitmapColorEnum.empty, bitmapColorEnum.grey, bitmapColorEnum.empty, bitmapColorEnum.empty],
    [bitmapColorEnum.empty, bitmapColorEnum.grey, bitmapColorEnum.empty, bitmapColorEnum.empty],
    [bitmapColorEnum.empty, bitmapColorEnum.grey, bitmapColorEnum.empty, bitmapColorEnum.empty]
  ],
];

export const shapeJ: Shape = [
  [
    [bitmapColorEnum.empty, bitmapColorEnum.grey, bitmapColorEnum.empty, bitmapColorEnum.empty],
    [bitmapColorEnum.empty, bitmapColorEnum.grey, bitmapColorEnum.empty, bitmapColorEnum.empty],
    [bitmapColorEnum.grey, bitmapColorEnum.grey, bitmapColorEnum.empty, bitmapColorEnum.empty],
    [bitmapColorEnum.empty, bitmapColorEnum.empty, bitmapColorEnum.empty, bitmapColorEnum.empty],
  ],
  [
    [bitmapColorEnum.empty, bitmapColorEnum.empty, bitmapColorEnum.empty, bitmapColorEnum.empty],
    [bitmapColorEnum.grey, bitmapColorEnum.empty, bitmapColorEnum.empty, bitmapColorEnum.empty],
    [bitmapColorEnum.grey, bitmapColorEnum.grey, bitmapColorEnum.grey, bitmapColorEnum.empty],
    [bitmapColorEnum.empty, bitmapColorEnum.empty, bitmapColorEnum.empty, bitmapColorEnum.empty],
  ],
  [
    [bitmapColorEnum.empty, bitmapColorEnum.grey, bitmapColorEnum.grey, bitmapColorEnum.empty],
    [bitmapColorEnum.empty, bitmapColorEnum.grey, bitmapColorEnum.empty, bitmapColorEnum.empty],
    [bitmapColorEnum.empty, bitmapColorEnum.grey, bitmapColorEnum.empty, bitmapColorEnum.empty],
    [bitmapColorEnum.empty, bitmapColorEnum.empty, bitmapColorEnum.empty, bitmapColorEnum.empty],
  ],
  [
    [bitmapColorEnum.empty, bitmapColorEnum.empty, bitmapColorEnum.empty, bitmapColorEnum.empty],
    [bitmapColorEnum.grey, bitmapColorEnum.grey, bitmapColorEnum.grey, bitmapColorEnum.empty],
    [bitmapColorEnum.empty, bitmapColorEnum.empty, bitmapColorEnum.grey, bitmapColorEnum.empty],
    [bitmapColorEnum.empty, bitmapColorEnum.empty, bitmapColorEnum.empty, bitmapColorEnum.empty],
  ]
];

export const shapeL: Shape = [
  [
    [bitmapColorEnum.empty, bitmapColorEnum.empty, bitmapColorEnum.empty, bitmapColorEnum.empty],
    [bitmapColorEnum.empty, bitmapColorEnum.grey, bitmapColorEnum.empty, bitmapColorEnum.empty],
    [bitmapColorEnum.empty, bitmapColorEnum.grey, bitmapColorEnum.empty, bitmapColorEnum.empty],
    [bitmapColorEnum.empty, bitmapColorEnum.grey, bitmapColorEnum.grey, bitmapColorEnum.empty],
  ],
  [
    [bitmapColorEnum.empty, bitmapColorEnum.empty, bitmapColorEnum.empty, bitmapColorEnum.empty],
    [bitmapColorEnum.grey, bitmapColorEnum.grey, bitmapColorEnum.grey, bitmapColorEnum.empty],
    [bitmapColorEnum.grey, bitmapColorEnum.empty, bitmapColorEnum.empty, bitmapColorEnum.empty],
    [bitmapColorEnum.empty, bitmapColorEnum.empty, bitmapColorEnum.empty, bitmapColorEnum.empty],
  ],
  [
    [bitmapColorEnum.empty, bitmapColorEnum.empty, bitmapColorEnum.empty, bitmapColorEnum.empty],
    [bitmapColorEnum.empty, bitmapColorEnum.grey, bitmapColorEnum.grey, bitmapColorEnum.empty],
    [bitmapColorEnum.empty, bitmapColorEnum.empty, bitmapColorEnum.grey, bitmapColorEnum.empty],
    [bitmapColorEnum.empty, bitmapColorEnum.empty, bitmapColorEnum.grey, bitmapColorEnum.empty],
  ],
  [
    [bitmapColorEnum.empty, bitmapColorEnum.empty, bitmapColorEnum.empty, bitmapColorEnum.empty],
    [bitmapColorEnum.empty, bitmapColorEnum.empty, bitmapColorEnum.empty, bitmapColorEnum.grey],
    [bitmapColorEnum.empty, bitmapColorEnum.grey, bitmapColorEnum.grey, bitmapColorEnum.grey],
    [bitmapColorEnum.empty, bitmapColorEnum.empty, bitmapColorEnum.empty, bitmapColorEnum.empty],
  ]
];

export const shapeZ: Shape = [
  [
    [bitmapColorEnum.empty, bitmapColorEnum.empty, bitmapColorEnum.empty, bitmapColorEnum.empty],
    [bitmapColorEnum.grey, bitmapColorEnum.grey, bitmapColorEnum.empty, bitmapColorEnum.empty],
    [bitmapColorEnum.empty, bitmapColorEnum.grey, bitmapColorEnum.grey, bitmapColorEnum.empty],
    [bitmapColorEnum.empty, bitmapColorEnum.empty, bitmapColorEnum.empty, bitmapColorEnum.empty],
  ],
  [
    [bitmapColorEnum.empty, bitmapColorEnum.empty, bitmapColorEnum.empty, bitmapColorEnum.empty],
    [bitmapColorEnum.empty, bitmapColorEnum.empty, bitmapColorEnum.grey, bitmapColorEnum.empty],
    [bitmapColorEnum.empty, bitmapColorEnum.grey, bitmapColorEnum.grey, bitmapColorEnum.empty],
    [bitmapColorEnum.empty, bitmapColorEnum.grey, bitmapColorEnum.empty, bitmapColorEnum.empty],
  ],
];

export const shapeS: Shape = [
  [
    [bitmapColorEnum.empty, bitmapColorEnum.empty, bitmapColorEnum.empty, bitmapColorEnum.empty],
    [bitmapColorEnum.empty, bitmapColorEnum.grey, bitmapColorEnum.grey, bitmapColorEnum.empty],
    [bitmapColorEnum.grey, bitmapColorEnum.grey, bitmapColorEnum.empty, bitmapColorEnum.empty],
    [bitmapColorEnum.empty, bitmapColorEnum.empty, bitmapColorEnum.empty, bitmapColorEnum.empty],
  ],
  [
    [bitmapColorEnum.empty, bitmapColorEnum.empty, bitmapColorEnum.empty, bitmapColorEnum.empty],
    [bitmapColorEnum.empty, bitmapColorEnum.grey, bitmapColorEnum.empty, bitmapColorEnum.empty],
    [bitmapColorEnum.empty, bitmapColorEnum.grey, bitmapColorEnum.grey, bitmapColorEnum.empty],
    [bitmapColorEnum.empty, bitmapColorEnum.empty, bitmapColorEnum.grey, bitmapColorEnum.empty],
  ]
];

export const shapeT: Shape = [
  [
    [bitmapColorEnum.empty, bitmapColorEnum.empty, bitmapColorEnum.empty, bitmapColorEnum.empty],
    [bitmapColorEnum.empty, bitmapColorEnum.grey, bitmapColorEnum.empty, bitmapColorEnum.empty],
    [bitmapColorEnum.grey, bitmapColorEnum.grey, bitmapColorEnum.grey, bitmapColorEnum.empty],
    [bitmapColorEnum.empty, bitmapColorEnum.empty, bitmapColorEnum.empty, bitmapColorEnum.empty],
  ],
  [
    [bitmapColorEnum.empty, bitmapColorEnum.empty, bitmapColorEnum.empty, bitmapColorEnum.empty],
    [bitmapColorEnum.empty, bitmapColorEnum.grey, bitmapColorEnum.empty, bitmapColorEnum.empty],
    [bitmapColorEnum.empty, bitmapColorEnum.grey, bitmapColorEnum.grey, bitmapColorEnum.empty],
    [bitmapColorEnum.empty, bitmapColorEnum.grey, bitmapColorEnum.empty, bitmapColorEnum.empty],
  ],
  [
    [bitmapColorEnum.empty, bitmapColorEnum.empty, bitmapColorEnum.empty, bitmapColorEnum.empty],
    [bitmapColorEnum.grey, bitmapColorEnum.grey, bitmapColorEnum.grey, bitmapColorEnum.empty],
    [bitmapColorEnum.empty, bitmapColorEnum.grey, bitmapColorEnum.empty, bitmapColorEnum.empty],
    [bitmapColorEnum.empty, bitmapColorEnum.empty, bitmapColorEnum.empty, bitmapColorEnum.empty],
  ],
  [
    [bitmapColorEnum.empty, bitmapColorEnum.empty, bitmapColorEnum.empty, bitmapColorEnum.empty],
    [bitmapColorEnum.empty, bitmapColorEnum.empty, bitmapColorEnum.grey, bitmapColorEnum.empty],
    [bitmapColorEnum.empty, bitmapColorEnum.grey, bitmapColorEnum.grey, bitmapColorEnum.empty],
    [bitmapColorEnum.empty, bitmapColorEnum.empty, bitmapColorEnum.grey, bitmapColorEnum.empty],
  ]
];

const shapes: Shape[] = [shapeO, shapeJ, shapeL, shapeI, shapeZ, shapeS, shapeT];

export default shapes;

