import { UserModel } from "../../models/UserModel.js";
export class UserAdminPresenter {
    constructor(view) {
        this.view = view;
        this.model = new UserModel();
    }

    async loadUsers() {
        try {
            this.view.setIsLoading(true);
            const users = await this.model.getUsers();
            this.view.setUsers(users);
        } catch (error) {
            console.log(error);
        } finally {
            this.view.setIsLoading(false);
        }
    }

    async deleteUser(id) {
        try {
            this.view.setIsLoading(true);
            await this.model.deleteUser(id);
            this.loadUsers();
        } catch (error) {
            console.log(error);
        }finally{
            this.view.setIsLoading(false);
        }
    }
}