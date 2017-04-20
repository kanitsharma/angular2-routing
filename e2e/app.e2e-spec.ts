import { WireframePage } from './app.po';

describe('wireframe App', () => {
  let page: WireframePage;

  beforeEach(() => {
    page = new WireframePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
