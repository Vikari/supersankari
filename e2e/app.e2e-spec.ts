import { SupersankariPage } from './app.po';

describe('supersankari App', () => {
  let page: SupersankariPage;

  beforeEach(() => {
    page = new SupersankariPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
