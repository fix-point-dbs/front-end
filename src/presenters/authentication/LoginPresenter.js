import { AuthModel } from '../../models/AuthModel';
import { saveRole, saveToken, saveUser } from '../../utils/LocalStorage';
import { showErrorToast } from '../../utils/Toast';
export class LoginPresenter {
  constructor(view) {
    this.view = view;
    this.model = new AuthModel();
  }

  async handleLogin(email, password) {
    try {
      const result = await this.model.login(email, password);
      console.log(result);
      
      if (result.status === "success") {
        saveToken(result.data?.token);
        saveRole(result.data?.role);
        saveUser({
          id: result.data?.id,
          name: result.data?.name,
          email: result.data?.email,
        });
        this.view.onLoginSuccess(result.data);
      }
    } catch (error) {
      console.log(error);
      showErrorToast(error.response.data.message);
    }
  }
}
