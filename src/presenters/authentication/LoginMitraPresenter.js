import { AuthModel } from "../../models/AuthModel";
import { showErrorToast } from "../../utils/Toast";
import { saveRole, saveToken, saveUser } from "../../utils/LocalStorage";
export class LoginMitraPresenter {
    constructor(view) {
        this.view = view;
        this.model = new AuthModel();
    }

    async handleLogin(email, password) {
        try {
            const result = await this.model.login(email, password);
            if (result.status === "success" && result.data?.role === "mitra" || result.data?.role === "admin") {
                    saveToken(result.data?.token);
                    saveRole(result.data?.role);
                    saveUser({
                      id: result.data?.id,
                      name: result.data?.name,
                      email: result.data?.email,
                      phone: result.data?.phone
                    });
                    this.view.onLoginSuccess(result.data?.role);
                  }else{
                    showErrorToast("Email atau password salahs");
                  }
        } catch (error) {
            showErrorToast(error.response.data.message);
        }
    }
}