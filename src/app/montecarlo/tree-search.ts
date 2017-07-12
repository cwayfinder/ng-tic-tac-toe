import { Board } from '../game/board';
import { Tree } from '../tree/tree';
import { Node } from '../tree/Node';
import { UCT } from './uct';
import { State } from './state';

export class MonteCarloTreeSearch {
  private static readonly WIN_SCORE = 10;

  public level: number;

  constructor() {
    this.level = 3;
  }

  private getMillisForCurrentLevel(): number {
    return 2 * (this.level - 1) + 1;
  }

  public findNextMove(board: Board, playerNo: number): number {
    const start = Date.now().valueOf();
    const end = start + 60 * this.getMillisForCurrentLevel();

    const state = new State({ board, playerNo: 3 - playerNo });

    const tree = new Tree(state);
    const rootNode = tree.root;

    while (Date.now().valueOf() < end) {
      // Phase 1 - Selection
      const promisingNode = this.selectPromisingNode(rootNode);
      // Phase 2 - Expansion
      if (promisingNode.state.board.checkStatus() === Board.IN_PROGRESS) {
        this.expandNode(promisingNode);
      }

      // Phase 3 - Simulation
      let nodeToExplore = promisingNode;
      if (promisingNode.childArray.length > 0) {
        nodeToExplore = promisingNode.getRandomChildNode();
      }
      const playoutResult = this.simulateRandomPlayout(nodeToExplore);
      // Phase 4 - Update
      this.backPropagation(nodeToExplore, playoutResult);
    }

    const winnerNode = rootNode.getChildWithMaxScore();

    tree.root = winnerNode;
    return winnerNode.state.move;
  }

  private selectPromisingNode(rootNode: Node): Node {
    let node = rootNode;
    while (node.childArray.length) {
      node = UCT.findBestNodeWithUCT(node);
    }
    return node;
  }

  private expandNode(node: Node): void {
    const possibleStates = node.state.getAllPossibleStates();

    possibleStates.forEach(state => {
      const newNode = new Node(state);
      newNode.parent = node;
      newNode.state.playerNo = node.state.getOpponent();
      node.childArray.push(newNode);
    });
  }

  private backPropagation(nodeToExplore: Node, playerNo: number) {
    let tempNode = nodeToExplore;
    while (tempNode) {
      tempNode.state.incrementVisit();
      if (tempNode.state.playerNo === playerNo) {
        tempNode.state.addScore(MonteCarloTreeSearch.WIN_SCORE);
      }
      tempNode = tempNode.parent;
    }
  }

  private simulateRandomPlayout(node: Node): number {
    const tempNode = Node.clone(node);
    const tempState = tempNode.state;
    let boardStatus = tempState.board.checkStatus();

    if (boardStatus === tempState.playerNo) {
      tempNode.parent.state.winScore = Number.NEGATIVE_INFINITY;
      return boardStatus;
    }
    while (boardStatus === Board.IN_PROGRESS) {
      tempState.togglePlayer();
      tempState.randomPlay();
      boardStatus = tempState.board.checkStatus();
    }

    return boardStatus;
  }
}
