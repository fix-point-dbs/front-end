import { AuthModel } from '../../models/AuthModel';
import { saveToken, saveUser } from '../../lib/auth';
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
        saveUser({
          id: result.data?.user?.id,
          name: result.data?.user?.name,
          email: result.data?.user?.email,
        });
        this.view.onLoginSuccess(result.data);
      }
    } catch (error) {
      console.log(error);
      showErrorToast(error.response.data.message);
    }
  }
}
