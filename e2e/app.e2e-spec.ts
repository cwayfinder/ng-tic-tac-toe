import { NgTicTacToePage } from './app.po';

describe('ng-tic-tac-toe App', () => {
  let page: NgTicTacToePage;

  beforeEach(() => {
    page = new NgTicTacToePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
