import { Component } from '@angular/core';
import { Board } from './board';
import { MonteCarloTreeSearch } from './montecarlo/tree-search';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  board = new Board();
  mcts = new MonteCarloTreeSearch();

  constructor() {
    this.mcts.level = 3;
  }

  handleClick(humanMove) {
    if (this.board.boardValues[humanMove] === 0 && this.board.checkStatus() === Board.IN_PROGRESS) {
      this.board.performMove(Board.P1, humanMove);

      if (this.board.checkStatus() === Board.IN_PROGRESS) {
        const cpuMove = this.mcts.findNextMove(this.board, Board.P2);
        this.board.performMove(Board.P2, cpuMove);
      }
    }
  }

  formatCell(cell: number) {
    if (cell === 1) {
      return 'x';
    } else if (cell === 2) {
      return 'o';
    } else {
      return '';
    }
  }
}
