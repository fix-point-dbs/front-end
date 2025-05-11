import { AuthModel } from '../models/AuthModel';

export class AuthPresenter {
  constructor(view) {
    this.view = view;
    this.model = new AuthModel();
  }

  async handleLogin(email, password) {
    const result = await this.model.login(email, password);
    if (result.success) {
      this.view.onLoginSuccess(result.user);
    } else {
      this.view.onLoginFailed(result.message);
    }
  }
}
