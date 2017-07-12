import { State } from '../montecarlo/state';

export class Node {
  state: State;
  parent: Node;
  childArray: Node[] = [];

  static clone(node: Node): Node {
    const result = new Node(node.state);
    result.childArray = node.childArray.map(child => child);

    if (node.parent) {
      result.parent = node.parent;
    }

    return result;
  }

  private static getRandomInt(min, max): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  constructor(state?: State) {
    this.state = state ? State.clone(state) : new State();
  }

  public getRandomChildNode(): Node {
    const noOfPossibleMoves = this.childArray.length;
    const selectRandom = Node.getRandomInt(0, noOfPossibleMoves - 1);
    return this.childArray[selectRandom];
  }

  public getChildWithMaxScore(): Node {
    let max = this.childArray[0];
    this.childArray.forEach(child => {
      if (max.state.visitCount < child.state.visitCount) {
        max = child;
      }
    });

    return max;
  }
}
