import { ProjDeployHerokuPage } from './app.po';

describe('proj-deploy-heroku App', () => {
  let page: ProjDeployHerokuPage;

  beforeEach(() => {
    page = new ProjDeployHerokuPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
