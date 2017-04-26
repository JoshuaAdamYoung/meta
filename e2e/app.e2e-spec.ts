import { MetaPage } from './app.po';

describe('meta App', () => {
  let page: MetaPage;

  beforeEach(() => {
    page = new MetaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
