import { PageObject } from '../PageObject';

class HomePage extends PageObject {
  openNewArticle() {
    this.clickByQa('new-article');
  }

  openSettings() {
    this.clickByQa('settings-link');
  }

  openProfile() {
    this.clickByQa('profile-link');
  }
}

export default new HomePage();
