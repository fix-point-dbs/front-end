import { useEffect, useState } from "react";
import { UserPresenter } from "../presenters/UserPresenter";
import { UserForm } from "../views/user/UserForm";
import { UserTable } from "../views/user/UserTable";

export function UserPage() {
  const [users, setUsers] = useState([]);
  const [editing, setEditing] = useState(null);

  const presenter = new UserPresenter({
    displayUsers: (data) => setUsers(data),
  });

  useEffect(() => {
    presenter.loadUsers();
  }, []);

  const handleAddOrEdit = async (user) => {
    if (editing) {
      await presenter.editUser(editing.id, user);
      setEditing(null);
    } else {
      await presenter.addUser(user);
    }
  };

  const handleDelete = async (id) => {
    if (confirm("Yakin ingin hapus user ini?")) {
      await presenter.removeUser(id);
    }
  };

  const handleEdit = (user) => {
    setEditing(user);
  };

  return (
    <div className="max-w-3xl mx-auto mt-10 p-4">
      <UserForm onSubmit={handleAddOrEdit} initialData={editing} />
      <UserTable users={users} onEdit={handleEdit} onDelete={handleDelete} />
    </div>
  );
}
