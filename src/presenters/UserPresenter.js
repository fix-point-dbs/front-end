import { UserModel } from "../models/UserModel";

export class UserPresenter {
  constructor(view) {
    this.view = view;
    this.model = new UserModel();
  }

  async loadUsers() {
    const users = await this.model.getUsers();
    this.view.displayUsers(users.data);
  }

  async addUser(user) {
    await this.model.createUser(user);
    this.loadUsers();
  }

  async editUser(id, user) {
    await this.model.updateUser(id, user);
    this.loadUsers();
  }

  async removeUser(id) {
    await this.model.deleteUser(id);
    this.loadUsers();
  }
}
