import { AuthModel } from "../../models/AuthModel";
import { showErrorToast } from "../../utils/Toast";
export class RegisterPresenter {
    constructor(view) {
        this.view = view;
        this.model = new AuthModel();
    }

    async handleRegister(data) {
        try {
            await this.model.register(data);
            this.view.onRegisterSuccess();
        } catch (error) {
            showErrorToast(error.response.data.message);
        }
    }
}