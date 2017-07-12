import { Node } from './node';
import { State } from '../montecarlo/state';

export class Tree {
  public root: Node;

  constructor(rootState: State) {
    this.root = new Node(rootState);
  }
}
