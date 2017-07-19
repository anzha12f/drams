import { DramsPage } from './app.po';

describe('drams App', () => {
  let page: DramsPage;

  beforeEach(() => {
    page = new DramsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
