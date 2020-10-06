export enum FigureTypeEnum {
  Cube,
  LeftShoe,
  One,
}

export type FigureTemplate = Array<boolean[]>;

export type Figure = {
  x: number;
  y: number;
  template: FigureTemplate;
};