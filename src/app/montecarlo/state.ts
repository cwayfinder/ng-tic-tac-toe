import { Board } from '../game/board';
import { getRandomArrayItem } from '../utils';

export class State {
  public board: Board;
  public playerNo: number;
  public visitCount = 0;
  public winScore = 0;
  public move: number;

  public static clone(state: State): State {
    const result = new State({ board: state.board, playerNo: state.playerNo, move: state.move });

    result.visitCount = state.visitCount;
    result.winScore = state.winScore;

    return result;
  }

  constructor(config: any = {}) {
    this.board = config.board ? Board.clone(config.board) : new Board();
    this.playerNo = config.playerNo;
    this.move = config.move;
  }

  public getOpponent(): number {
    return 3 - this.playerNo;
  }

  public getAllPossibleStates(): State[] {
    return this.board.getEmptyPositions()
      .map((position: number) => {
        const playerNo = 3 - this.playerNo;
        const board = Board.clone(this.board);

        board.performMove(playerNo, position);

        return new State({ board, playerNo, move: position });
      });
  }

  incrementVisit(): void {
    this.visitCount++;
  }

  addScore(score: number): void {
    if (this.winScore !== Number.NEGATIVE_INFINITY) {
      this.winScore += score;
    }
  }

  randomPlay(): void {
    const randomPosition = getRandomArrayItem(this.board.getEmptyPositions());
    this.board.performMove(this.playerNo, randomPosition);
  }

  togglePlayer(): void {
    this.playerNo = 3 - this.playerNo;
  }
}
