import { SilverPage } from './app.po';

describe('silver App', () => {
  let page: SilverPage;

  beforeEach(() => {
    page = new SilverPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('silver works!');
  });
});
