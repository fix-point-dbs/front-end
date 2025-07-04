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
      
      if (result.status === "success" && result.data?.role === "user") {
        saveToken(result.data?.token);
        saveRole(result.data?.role);
        saveUser({
          id: result.data?.id,
          name: result.data?.name,
          email: result.data?.email,
          phone: result.data?.phone
        });
        this.view.onLoginSuccess();
      }else{
        showErrorToast("Email atau password salahs");
      }
    } catch (error) {
      console.log(error);
      showErrorToast(error.response.data.message);
    }
  }
}
