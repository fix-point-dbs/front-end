import { UserModel } from "../models/UserModel";
import { showErrorToast } from "../utils/Toast";
import { saveUser , removeUser} from "../utils/LocalStorage";
export class ProfilePresenter {
    constructor(view) {
        this.view = view;
        this.model = new UserModel();
    }

    async updateUser(id, data) {
        try {
            const res = await this.model.updateUser(id, data);
            console.log(res.data);
            removeUser();
            saveUser(res.data);
            this.view.onSuccess("Data berhasil diubah");
        } catch (error) {
            showErrorToast(error.response.data.message);
        }
    }

    async changePassword(id, data) {
        try {
            await this.model.changePassword(id, data);
            this.view.onSuccess("Password berhasil diubah");
        } catch (error) {
            showErrorToast(error.response.data.message);
        }
    }
}