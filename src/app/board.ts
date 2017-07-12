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
    this.boardValues = Array.from<number>({length : 9}).fill(0);
  }

  public performMove(player: number, move: number): void {
    this.boardValues[move] = player;
  }

  public checkStatus(): number {
    const diag1 = [this.boardValues[0], this.boardValues[4], this.boardValues[8]];
    const diag2 = [this.boardValues[2], this.boardValues[4], this.boardValues[6]];

    const checkDia1gForWin = Board.checkForWin(diag1);
    if (checkDia1gForWin !== 0) {
      return checkDia1gForWin;
    }

    const checkDiag2ForWin = Board.checkForWin(diag2);
    if (checkDiag2ForWin !== 0) {
      return checkDiag2ForWin;
    }


    for (let i = 0; i < 3; i++) {
      const col = [this.boardValues[i], this.boardValues[i + 3], this.boardValues[i + 6]];
      const checkColForWin = Board.checkForWin(col);
      if (checkColForWin !== 0) {
        return checkColForWin;
      }
    }

    for (let i = 0; i < 9; i += 3) {
      const row = [this.boardValues[i], this.boardValues[i + 1], this.boardValues[i + 2]];
      const checkRowForWin = Board.checkForWin(row);
      if (checkRowForWin !== 0) {
        return checkRowForWin;
      }
    }


    if (this.getEmptyPositions().length > 0) {
      return Board.IN_PROGRESS;
    } else {
      return Board.DRAW;
    }
  }

  private static checkForWin(row: number[]): number {
    let isEqual = true;
    const size = row.length;
    let previous = row[0];
    for (let i = 0; i < size; i++) {
      if (previous !== row[i]) {
        isEqual = false;
        break;
      }
      previous = row[i];
    }
    if (isEqual) {
      return previous;
    } else {
      return 0;
    }
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
