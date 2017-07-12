import { MonteCarloTreeSearch } from './montecarlo/tree-search';
import { UCT } from './montecarlo/uct';
import { Board } from './game/board';
import { State } from './montecarlo/state';

describe('MSTS', () => {
  let mcts;

  beforeEach(() => {
    mcts = new MonteCarloTreeSearch();
  });

  it('givenStats_whenGetUCTForNode_thenUCTMatchesWithManualData', () => {
    const uctValue = 15.79;
    expect(UCT.uctValue(600, 300, 20)).toBeCloseTo(uctValue, 0.1);
  });

  it('givenInitBoardState_whenGetAllPossibleStates_thenNonEmptyList', () => {
    const initState = new State();
    const possibleStates = initState.getAllPossibleStates();
    expect(possibleStates.length).toBeGreaterThan(0);
  });

  it('givenEmptyBoard_whenPerformMove_thenLessAvailablePossitions', () => {
    const board = new Board();
    const initAvailablePositions = board.getEmptyPositions().length;
    board.performMove(Board.PLAYER1, 1);
    const availablePositions = board.getEmptyPositions().length;
    expect(initAvailablePositions).toBeGreaterThan(availablePositions);
  });

  it('givenEmptyBoard_whenSimulateInterAIPlay_thenGameDraw', () => {
    const board = new Board();

    let player = Board.PLAYER1;
    const totalMoves = Board.BOARD_SIZE * Board.BOARD_SIZE;
    for (let i = 0; i < totalMoves; i++) {
      const move = mcts.findNextMove(board, player);
      board.performMove(player, move);
      if (board.checkStatus() !== -1) {
        break;
      }
      player = 3 - player;
    }
    const winStatus = board.checkStatus();
    expect(winStatus).toEqual(Board.DRAW);
  });

  it('givenEmptyBoard_whenLevel1VsLevel3_thenLevel3WinsOrDraw', () => {
    const board = new Board();
    const mcts1 = new MonteCarloTreeSearch();
    mcts1.level = 1;
    const mcts3 = new MonteCarloTreeSearch();
    mcts3.level = 3;

    let player = Board.PLAYER1;
    const totalMoves = Board.BOARD_SIZE * Board.BOARD_SIZE;
    for (let i = 0; i < totalMoves; i++) {
      let move;
      if (player === Board.PLAYER1) {
        move = mcts3.findNextMove(board, player);
      } else {
        move = mcts1.findNextMove(board, player);
      }

      board.performMove(player, move);

      if (board.checkStatus() !== -1) {
        break;
      }
      player = 3 - player;
    }
    const winStatus = board.checkStatus();
    console.log(winStatus, board.cells);
    // board.printBoard();
    expect(winStatus === Board.DRAW || winStatus === Board.PLAYER1).toBeTruthy();
  });
});
