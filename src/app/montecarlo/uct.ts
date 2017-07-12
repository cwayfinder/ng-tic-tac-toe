import { Node } from '../tree/node';

export class UCT {
  public static uctValue(totalVisit: number, nodeWinScore = 0, nodeVisit: number): number {
    if (nodeVisit === 0) {
      return Number.POSITIVE_INFINITY;
    }
    return (nodeWinScore / nodeVisit) + 1.41 * Math.sqrt(Math.log(totalVisit) / nodeVisit);
  }

  public static findBestNodeWithUCT(node: Node): Node {
    const parentVisit = node.state.visitCount;

    let max = node.childArray[0];
    node.childArray.forEach(child => {
      const score = UCT.uctValue(parentVisit, child.state.winScore, child.state.visitCount);
      const maxScore = UCT.uctValue(parentVisit, max.state.winScore, max.state.visitCount);

      if (maxScore < score) {
        max = child;
      }
    });

    return max;
  }
}
