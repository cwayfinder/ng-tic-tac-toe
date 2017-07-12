export class Board {
  public static readonly DEFAULT_BOARD_SIZE = 3;

  public static readonly IN_PROGRESS = -1;
  public static readonly DRAW = 0;
  public static readonly P1 = 1;
  public static readonly P2 = 2;

  public boardValues: number[];

  public static clone(board: Board): Board {
    const result = new Board();
    result.boardValues = board.boardValues.map(val => val);

    return result;
  }

  constructor() {
    this.boardValues = Array.from<number>({ length: 9 }).fill(0);
  }

  public performMove(player: number, move: number): void {
    this.boardValues[move] = player;
  }

  public checkStatus(): number {
    const diag1 = [this.boardValues[0], this.boardValues[4], this.boardValues[8]];
    const diag2 = [this.boardValues[2], this.boardValues[4], this.boardValues[6]];

    const rows = [];
    for (let i = 0; i < 9; i += 3) {
      rows.push([this.boardValues[i], this.boardValues[i + 1], this.boardValues[i + 2]]);
    }

    const cols = [];
    for (let i = 0; i < 3; i++) {
      cols.push([this.boardValues[i], this.boardValues[i + 3], this.boardValues[i + 6]]);
    }

    const lines = [diag1, diag2, ...rows, ...cols];
    const winLine = lines.find(this.checkForWin);

    if (winLine) {
      return winLine[0];
    } else if (this.getEmptyPositions().length > 0) {
      return Board.IN_PROGRESS;
    } else {
      return Board.DRAW;
    }
  }

  checkForWin(arr: number[]) {
    return arr[0] && arr.every(value => arr[0] === value);
  }

  public getEmptyPositions(): number[] {
    const size = this.boardValues.length;
    const emptyPositions = [];
    for (let i = 0; i < size; i++) {
      if (this.boardValues[i] === 0) {
        emptyPositions.push(i);
      }
    }
    return emptyPositions;
  }
}
