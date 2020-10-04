class Tetris {
  private readonly renderSD: (data: Array<boolean[]>) => void;
  private screenData: Array<boolean[]> = [];
  private screenWidth: number;
  private screenHeight: number;
  private figure: {
    template: Array<boolean[]>;
    x: number;
    y: number;
  } | undefined;

  constructor(x: number, y: number, renderItems: (data: Array<boolean[]>) => void) {
    this.screenWidth = x;
    this.screenHeight = y;
    this.renderSD = renderItems;

    this.init();
  }

  init = () => {
    this.screenData = new Array(this.screenHeight).fill(new Array(this.screenWidth).fill(false));
    this.figure = {
      x: Math.round(this.screenWidth / 2),
      y: 0,
      template: [
        [true, true],
        [true, true],
      ],
    };
    this.rerender();
    this.startLoop();
  }

  startLoop = () => {
    this.nextTick();
  };

  nextTick = () => {
    if(!this.figure) return;

    if(this.figure.y + this.figure.template.length < this.screenHeight) {
      setTimeout(() => {
        if(!!this.figure) {
          this.figure.y += 1;
          this.rerender();
          this.nextTick();
        }
      }, 300);
    } else {
      this.screenData = this.getNewScreenData();
      this.figure.y = 0;
      this.nextTick();
    }
  };

  onLeft = () => {
    if (this.figure && this.figure.x - 1 >= 0) {
      this.figure.x -= 1;
      this.rerender();
    }
  };

  onRight = () => {
    if (this.figure && this.figure.x + 1 < this.screenWidth - 1) {
      this.figure.x += 1;
      this.rerender();
    }
  };

  getNewScreenData = () => {
    const figure = this.figure;

    if(!figure) {
      return this.screenData;
    }

    const newScreenData = [
      ...this.screenData
    ];

    for(let figureLineIndex = 0; figureLineIndex < figure.template.length; figureLineIndex++) {
      const curY: number = figure.y + figureLineIndex;

      const newSDLine = [
        ...newScreenData[curY]
      ];

      for(let figureItemIndex = 0; figureItemIndex < figure.template[figureLineIndex].length; figureItemIndex++) {
        const curX: number = figure.x + figureItemIndex;
        newSDLine[curX] = figure.template[figureLineIndex][figureItemIndex];
      }

      newScreenData[curY] = newSDLine;
    }

    return newScreenData;
  };

  rerender = () => {
    const newScreenData = this.getNewScreenData();

    this.renderSD(newScreenData);
  };
}

export default Tetris;