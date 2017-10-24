import { SonnetsPage } from './app.po';

describe('sonnets App', () => {
  let page: SonnetsPage;

  beforeEach(() => {
    page = new SonnetsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
