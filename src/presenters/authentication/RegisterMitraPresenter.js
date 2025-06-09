import { showErrorToast } from "../../utils/Toast";
import { AuthModel } from "../../models/AuthModel";
export class RegisterMitraPresenter {
    constructor( view ) {
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