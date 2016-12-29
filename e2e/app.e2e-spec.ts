import { MultiPage } from './app.po';

describe('multi App', function() {
  let page: MultiPage;

  beforeEach(() => {
    page = new MultiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
