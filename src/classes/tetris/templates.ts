import { FigureTemplate, FigureTypeEnum } from "./types";

const templates: {
  [prop: string]: FigureTemplate
} = {
  [FigureTypeEnum.Cube]: [
    [true, true],
    [true, true],
  ],
  [FigureTypeEnum.LeftShoe]: [
    [true, true],
    [false, true],
    [false, true],
  ],
  [FigureTypeEnum.One]: [
    [true]
  ],
};

const getFigureTemplate = (figureType: FigureTypeEnum) => {
  const t = templates[figureType];

  if(!t) {
    throw new Error('Wrong type of figure');
  }

  return t;
};

export default getFigureTemplate;