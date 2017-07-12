export class Board {
  public static readonly BOARD_SIZE = 3;

  public static readonly IN_PROGRESS = -1;
  public static readonly DRAW = 0;
  public static readonly PLAYER1 = 1;
  public static readonly PLAYER2 = 2;

  public cells: number[];

  public static clone(board: Board): Board {
    const result = new Board();
    result.cells = board.cells.map(val => val);

    return result;
  }

  constructor() {
    this.cells = Array.from<number>({ length: 9 }).fill(0);
  }

  public performMove(player: number, move: number): void {
    this.cells[move] = player;
  }

  public checkStatus(): number {
    const diag1 = [this.cells[0], this.cells[4], this.cells[8]];
    const diag2 = [this.cells[2], this.cells[4], this.cells[6]];

    const rows = [];
    for (let i = 0; i < 9; i += 3) {
      rows.push([this.cells[i], this.cells[i + 1], this.cells[i + 2]]);
    }

    const cols = [];
    for (let i = 0; i < 3; i++) {
      cols.push([this.cells[i], this.cells[i + 3], this.cells[i + 6]]);
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

  private checkForWin(arr: number[]) {
    return arr[0] && arr.every(value => arr[0] === value);
  }

  public getEmptyPositions(): number[] {
    const size = this.cells.length;
    const emptyPositions = [];
    for (let i = 0; i < size; i++) {
      if (this.cells[i] === 0) {
        emptyPositions.push(i);
      }
    }
    return emptyPositions;
  }
}
