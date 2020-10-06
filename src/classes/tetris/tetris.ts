import { FigureTemplate, FigureTypeEnum, Figure } from "./types";
import getFigureTemplate from './templates';

class Tetris {
  private readonly onChangeScreenData: (data: Array<boolean[]>) => void;
  private screenData: Array<boolean[]> = [];
  private readonly width: number;
  private readonly height: number;
  private figure: Figure | null = null;

  constructor(x: number, y: number, renderItems: (data: Array<boolean[]>) => void) {
    this.width = x;
    this.height = y;
    this.onChangeScreenData = renderItems;

    this.init();
  }


  init = () => {
    this.screenData = new Array(this.height).fill(new Array(this.width).fill(false));
    this.initFigure();
    this.rerender();
    this.startLoop();
  }

  initFigure() {
    const template = getFigureTemplate(FigureTypeEnum.One);

    this.figure = {
      template,
      y: 0,
      x: Math.round(this.width / 2),
    };
  }

  startLoop = () => {
    this.nextTick();
  };

  nextTick = () => {
    if (!this.figure) return;

    setTimeout(() => {
      if (!!this.figure) {
        this.nextTick();
      }
    }, 300);
  };

  toLeft = () => {
    if (this.figure && this.figure.x - 1 >= 0) {
      this.figure.x -= 1;
      this.rerender();
    }
  };

  toRight = () => {
    if (this.figure && this.figure.x + 1 < this.width - 1) {
      this.figure.x += 1;
      this.rerender();
    }
  };

  toTern = () => {
    if (!this.figure) {
      return;
    }

    const template = this.figure.template;

    this.figure = {
      ...this.figure,

      template: template[0].reduce((acc, _, columnIndex) => {
        const newLine = template.map((line) => {
          return line[columnIndex];
        });
        acc.push(newLine.reverse());
        return acc;
      }, [] as FigureTemplate),
    };
    this.rerender();
  }

  toBottom = () => {
    if (!this.figure || this.figure.y + 1 > this.height - 1) {
      return;
    }

    this.figure.y += 1;
    this.rerender();
  }

  getNewScreenData = () => {
    const figure = this.figure;

    if (!figure) {
      return this.screenData;
    }

    const newScreenData = [
      ...this.screenData
    ];

    for (let figureLineIndex = 0; figureLineIndex < figure.template.length; figureLineIndex++) {
      const curY: number = figure.y + figureLineIndex;

      if (curY < 0) {
        continue;
      }

      console.log({ curY });

      const newSDLine = [
        ...newScreenData[curY]
      ];

      for (let figureItemIndex = 0; figureItemIndex < figure.template[figureLineIndex].length; figureItemIndex++) {
        const curX: number = figure.x + figureItemIndex;
        newSDLine[curX] = newScreenData[curY][curX] || figure.template[figureLineIndex][figureItemIndex];
      }

      newScreenData[curY] = newSDLine;
    }

    return newScreenData;
  };

  rerender = () => {
    const newScreenData = this.getNewScreenData();

    console.table(newScreenData);
    this.onChangeScreenData(newScreenData);
  };
}

export default Tetris;