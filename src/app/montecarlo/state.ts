import { Board } from '../board';

export class State {
  public board: Board;
  public playerNo: number;
  public visitCount = 0;
  public winScore = 0;
  public move: number;

  public static clone(state: State): State {
    const result = new State();

    result.board = Board.clone(state.board);
    result.playerNo = state.playerNo;
    result.visitCount = state.visitCount;
    result.winScore = state.winScore;
    result.move = state.move;

    return result;
  }

  constructor(board?: Board) {
    this.board = board ? Board.clone(board) : new Board();
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

        const state = new State(board);
        state.playerNo = playerNo;
        state.move = position;

        return state;
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
    const availablePositions = this.board.getEmptyPositions();
    const totalPossibilities = availablePositions.length;
    const selectRandom = Math.floor(Math.random() * ((totalPossibilities - 1) + 1));
    this.board.performMove(this.playerNo, availablePositions[selectRandom]);
  }

  togglePlayer(): void {
    this.playerNo = 3 - this.playerNo;
  }
}
