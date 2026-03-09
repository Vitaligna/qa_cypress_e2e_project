import { PageObject } from '../PageObject';

class SignInPage extends PageObject {
  visit() {
    super.visit('/login');
  }

  fillEmail(email) {
    this.typeByQa('login-email', email);
  }

  fillPassword(password) {
    this.typeByQa('login-password', password);
  }

  submit() {
    this.clickByQa('login-submit');
  }

  login(email, password) {
    this.fillEmail(email);
    this.fillPassword(password);
    this.submit();
  }
}

export default new SignInPage();
